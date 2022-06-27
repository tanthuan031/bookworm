<?php

namespace App\Repositories;

use App\Models\Author;
use App\Models\Book;


class BookRepository extends BaseRepository
{

    public function __construct()
    {
        $this->query = Book::query();
    }

    public function getAll($perPage)
    {
        // TODO: Implement getAll() method.

        $this->query->with('discount');
        return $this->query->paginate($perPage);

    }

    public function getById($id)
    {
        // TODO: Implement getById() method.
        $this->query->with('discount');
        return $this->query->find($id);
    }

    public function fillter($cdtAuthor, $cdtCategory, $perPage = 5)
    {
        // TODO: Implement filter() method.

        $bookList = $this->query;
        if (is_numeric($cdtAuthor) && !empty($bookList->where('author_id', '=', $cdtAuthor)->get())) {

            $this->query->where('author_id', '=', $cdtAuthor);
        }
        if (is_numeric($cdtCategory) && !empty($bookList->where('category_id', '=', $cdtCategory)->get())) {

            $this->query->where('category_id', '=', $cdtCategory);
        }
        $this->query->with('discount');
        return $this->query->paginate($perPage);

    }

    public function getHomeBookOnSale_Featured($onSale, $featured)
    {
        // TODO: Implement getHomeBookOnSale_Featured() meth od.
//        dd($onSale,$featured);


        $listBooksHome = [];
//       getHome with onSale

        if (!empty($onSale) && empty($featured)) {
            $listBooksHome = $this->query
                ->select('book.id', 'book.author_id','author.author_name', 'book.book_title', 'book.book_summary', 'book.book_price', 'book.book_cover_photo', 'discount.discount_price')
                ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
                ->join('author','book.author_id','=','author.id')
                ->groupBy('book.id', 'book.author_id','author.author_name', 'book.book_title', 'book.book_summary', 'book.book_price',
                    'book.book_cover_photo', 'discount.discount_start_date', 'discount.discount_end_date',
                    'discount.discount_price')
                ->having(Book::raw('discount.discount_end_date - discount.discount_start_date'), '>', 0)
                ->orHavingNull(Book::raw('discount.discount_end_date - discount.discount_start_date'))
                ->orderByRaw('book.book_price - discount.discount_price desc NULLS LAST')
                ->limit(10)
                ->get();

//            dd($listBooksHome->toSql());
        }
//        getHome with featured-recommend
        elseif (empty($onSale) && !empty($featured) && $featured == 'featured-recommend') {
//            $listBooksHome = ['Featured-recommend'];
            $listBooksHome=$this->query

                ->selectRaw('bs.id,bs.author_id,author.author_name,bs.book_title,bs.book_price,bs.book_cover_photo,bs.discount_price, sum(bs.sumStar)/sum(bs.countStar) as average_star, bs.final_price')
                ->from(function ($q){
                    $q->selectRaw('book.id ,book.author_id,book.book_title ,book.book_price,book.book_cover_photo , discount.discount_price ,discount.discount_start_date ,
                                      discount.discount_end_date ,  review.rating_start*count(review.rating_start) as sumStar ,count(review.rating_start) as countStar,
                                      case when (discount.discount_end_date - discount.discount_start_date) < 0 or discount.discount_price  is null  then book.book_price
                                           when (discount.discount_end_date - discount.discount_start_date) >0 or (discount.discount_end_date - discount.discount_start_date) is null  then discount.discount_price
                                      end as final_price from book')
                        ->leftJoin('discount','book.id','=','discount.book_id')
                        ->leftJoin('review','book.id','=','review.book_id')
                        ->groupBy('book.id','book.author_id','book.book_title','book.book_price','book.book_cover_photo','discount.discount_price','discount.discount_start_date','discount.discount_end_date',
                            'review.rating_start',
                        );
                },'bs')
                ->join('author','bs.author_id','=','author.id')
                ->groupBy('bs.id'  ,'bs.author_id','author.author_name','bs.book_title','bs.book_price','bs.discount_price','bs.book_cover_photo','bs.discount_start_date','bs.discount_end_date','bs.final_price')
                ->orderByRaw('average_star desc NULLS LAST')
                ->orderBy('final_price')
                ->limit(8)
                ->get()
            ;
//            dd($listBooksHome->toSql());
        }
//        getHome with featured-popular
        elseif (empty($onSale) && !empty($featured) && $featured == 'featured-popular') {
//            $listBooksHome = ['Featured-popular'];
            $listBooksHome=$this->query
                ->selectRaw('book.id,book.author_id,author.author_name ,book.book_title , book.book_price , discount.discount_price,
                              case
                                  when (discount.discount_end_date - discount.discount_start_date) < 0
                                       or discount.discount_price  is null  then book.book_price
                                  when (discount.discount_end_date - discount.discount_start_date) >0
                                       or (discount.discount_end_date - discount.discount_start_date) is null  then discount.discount_price
                              end as final_price ,count(review.book_id) as count_review')
                ->leftJoin('discount','book.id','=','discount.book_id')
                ->leftJoin('review','book.id','=','review.book_id')
                ->join('author','book.author_id','=','author.id')
                ->groupBy('book.id','book.author_id','author.author_name','book.book_title','book.book_price','book.book_cover_photo','discount.discount_price','discount.discount_start_date','discount.discount_end_date', 'review.book_id')
                ->orderBy('count_review','desc')
                ->orderBy('final_price','asc')
                ->limit(8)
//                ->paginate();
            ->get();

        }
//        dd($listBooksHome->toSql());
        return $listBooksHome;

    }

    public function create($data)
    {
        // TODO: Implement create() method.
        // TODO: Handle data input
        // TODO: Insert data
        try {
            $object = $this->query->create($data);

        } catch (\Exception $e) {
            return null;
        }
        return $object;

    }

    public function update($data, $object)
    {
        // TODO: Implement update() method.
//        dd($object);
        $object->update($data);
        return $object;

    }

    public function delete($object)
    {
        // TODO: Implement delete() method.
        $object->delete();

    }


}
