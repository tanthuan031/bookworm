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
                ->select('book.id', 'book.author_id', 'book.book_title', 'book.book_summary', 'book.book_price', 'book.book_cover_photo', 'discount.discount_price')
                ->join('discount', 'book.id', '=', 'discount.book_id')
                ->groupBy('book.id', 'book.author_id', 'book.book_title', 'book.book_summary', 'book.book_price',
                    'book.book_cover_photo', 'discount.discount_start_date', 'discount.discount_end_date',
                    'discount.discount_price')
                ->having(Book::raw('discount.discount_end_date - discount.discount_start_date'), '>', 0)
                ->orHavingNull(Book::raw('discount.discount_end_date - discount.discount_start_date'))
                ->orderBy(Book::raw('book.book_price - discount.discount_price'), 'desc')
                ->limit(10)
                ->get();
        }
//        getHome with featured-recommend
        elseif (empty($onSale) && !empty($featured) && $featured == 'featured-recommend') {
            $listBooksHome = ['Featured-recommend'];


        }
//        getHome with featured-popular
        elseif (empty($onSale) && !empty($featured) && $featured == 'featured-popular') {
            $listBooksHome = ['Featured-popular'];
        }
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
