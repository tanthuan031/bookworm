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

    public function getAll($sort,$perPage)
    {
        // TODO: Implement getAll() method.
//        dd($sort);
        $this->query->with('discount');

        if($sort!=null){
           $this->query->orderBy('book_price',$sort);
        }
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
//        dd($cdtAuthor, $cdtCategory);

        try {
            if ($cdtAuthor!=null) {

                $this->query->whereIn('author_id',$cdtAuthor );
            }
            if ($cdtCategory!=null){
                {
                    $this->query->whereIn('category_id', $cdtCategory);
                }
            }


            $this->query->with('discount');
//            dd( $this->query->toSql());
            return $this->query->paginate($perPage);

        } catch (\Exception $e) {

        }


    }

    public function getHomeBookOnSale_Featured($onSale, $featured,$perPage)
    {
        // TODO: Implement getHomeBookOnSale_Featured() meth od.
//        dd($onSale,$featured);
//       getHome with onSale
        if (!empty($onSale) && empty($featured)) {
//            dd($onSale);
            $this->query
                ->select('book.id', 'book.author_id', 'author.author_name', 'book.book_title', 'book.book_summary', 'book.book_price', 'book.book_cover_photo', 'discount.discount_price')
                ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
                ->join('author', 'book.author_id', '=', 'author.id')
                ->groupBy('book.id', 'book.author_id', 'author.author_name', 'book.book_title', 'book.book_summary', 'book.book_price',
                    'book.book_cover_photo', 'discount.discount_start_date', 'discount.discount_end_date',
                    'discount.discount_price')
                ->having(Book::raw('discount.discount_end_date - discount.discount_start_date'), '>', 0)
                ->orHavingNull(Book::raw('discount.discount_end_date - discount.discount_start_date'))
                ->orderByRaw('book.book_price - discount.discount_price desc NULLS LAST');
            if ($onSale == 'on-sale-sort') {
                return $this->query->paginate($perPage);
            } else {
               return $this->query->limit(8)->get();
            }
//            dd($listBooksHome->toSql());
//            return $this->query->get();
        } //        getHome with featured-recommend
        elseif (empty($onSale) && !empty($featured) && ($featured == 'featured-recommend' || $featured == 'featured-recommend-sort')) {
//            $listBooksHome = ['Featured-recommend'];
            $this->query
                ->selectRaw('bs.id,bs.author_id,author.author_name,bs.book_title,bs.book_price,bs.book_cover_photo,bs.discount_price, sum(bs.sumStar)/sum(bs.countStar) as average_star, bs.final_price')
                ->from(function ($q) {
                    $q->selectRaw('book.id ,book.author_id,book.book_title ,book.book_price,book.book_cover_photo , discount.discount_price ,discount.discount_start_date ,
                                      discount.discount_end_date ,  review.rating_start*count(review.rating_start) as sumStar ,count(review.rating_start) as countStar,
                                      case when (discount.discount_end_date - discount.discount_start_date) < 0 or discount.discount_price  is null  then book.book_price
                                           when (discount.discount_end_date - discount.discount_start_date) >0 or (discount.discount_end_date - discount.discount_start_date) is null  then discount.discount_price
                                      end as final_price from book')
                        ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
                        ->leftJoin('review', 'book.id', '=', 'review.book_id')
                        ->groupBy('book.id', 'book.author_id', 'book.book_title', 'book.book_price', 'book.book_cover_photo', 'discount.discount_price', 'discount.discount_start_date', 'discount.discount_end_date',
                            'review.rating_start',
                        );
                }, 'bs')
                ->join('author', 'bs.author_id', '=', 'author.id')
                ->groupBy('bs.id', 'bs.author_id', 'author.author_name', 'bs.book_title', 'bs.book_price', 'bs.discount_price', 'bs.book_cover_photo', 'bs.discount_start_date', 'bs.discount_end_date', 'bs.final_price')
                ->orderByRaw('average_star desc NULLS LAST')
                ->orderBy('final_price');
            if($featured == 'featured-recommend-sort'){
                return $this->query->paginate($perPage);
            }else{
                return $this->query->limit(8)->get();
            }

        } //        getHome with featured-popular
        elseif (empty($onSale) && !empty($featured) && ($featured == 'featured-popular' || $featured == 'featured-popular-sort')) {
//            $listBooksHome = ['Featured-popular'];
//            dd($featured);
            $this->query
                ->selectRaw('book.id,book.author_id,author.author_name ,book.book_title , book.book_price , discount.discount_price,
                              case
                                  when (discount.discount_end_date - discount.discount_start_date) < 0
                                       or discount.discount_price  is null  then book.book_price
                                  when (discount.discount_end_date - discount.discount_start_date) >0
                                       or (discount.discount_end_date - discount.discount_start_date) is null  then discount.discount_price
                              end as final_price ,count(review.book_id) as count_review')
                ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
                ->leftJoin('review', 'book.id', '=', 'review.book_id')
                ->join('author', 'book.author_id', '=', 'author.id')
                ->groupBy('book.id', 'book.author_id', 'author.author_name', 'book.book_title', 'book.book_price', 'book.book_cover_photo', 'discount.discount_price', 'discount.discount_start_date', 'discount.discount_end_date', 'review.book_id')
                ->orderBy('count_review', 'desc')
                ->orderBy('final_price', 'asc');

            if ($featured == 'featured-popular-sort') {
                return $this->query->paginate($perPage);
            } else {

//                ->paginate();
                return $this->query->limit(8)->get();
            }


        }

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
