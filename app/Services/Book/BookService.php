<?php

namespace App\Services\Book;

use App\Repositories\BookRepository;
use App\Services\BaseServices;
use PHPUnit\Exception;

class BookService extends BaseServices
{

    protected $bookRepository;

    public function __construct(BookRepository $bookRepository)
    {
        $this->bookRepository = $bookRepository;

    }

    public function getAll($request)
    {
        // TODO: Implement getAll() method.
        // TODO: Handle perPage from url
//        dd($request['sort']);
        $perPage = 5;
        $data = [];
        if ($request->has('per_page')) {
            $perPage = $request->get('per_page');
            if ($perPage == null || !is_numeric($perPage)) {
                $perPage = 5;
            }

            if ($request->has('author_id') || $request->has('category_id')) {
                $data = $this->fillter($request, $perPage);

            } elseif ($request->has('list-books')) {
                $data = $this->getBookHomeSale_Feature($request, $perPage);
            } elseif ($request->has('sort')) {
                $sort = $request['sort'];
                $data = $this->bookRepository->getAll($sort, $perPage);

            }else{
                $data = $this->bookRepository->getAll('desc', $perPage);

            }

        } else {

            if ($request->has('author_id') || $request->has('category_id')) {
                $data = $this->fillter($request, $perPage);

            } elseif ($request->has('list-books')) {
                $data = $this->getBookHomeSale_Feature($request, $perPage);
            } elseif ($request->has('sort')) {
                $sort = $request['sort'];
                $data = $this->bookRepository->getAll($sort, $perPage);

            }else{
                $data = $this->bookRepository->getAll('desc', $perPage);

            }


        }
//
//        if ($data) {
//            $listBook = [
//                'message' => 'Success.',
//                'statusCode' => 'true',
//                'data' => $data->items(),
//                'current_page' => $data->currentPage(),
//                'next_page_url' => $data->nextPageUrl(),
//                'pre_page_url' => $data->previousPageUrl(),
//                'last_page_url' => $data->lastPage(),
//                'perPage' => $data->perPage(),
//                'toTalPage' => $data->total()
//            ];
//        } else {
//            $listBook = [
//                'message' => 'Not Error.',
//                'statusCode' => 'False',
//
//            ];
//        }
//        return $listBook;

        return $data;
    }

    public function fillter($conditions, $perPage)
    {

        $data = [];
        if ($conditions->has('author_id') || $conditions->has('category_id')) {

            $cdtCategory = $conditions['category_id'];
            $cdtAuthor = $conditions['author_id'];
            if ($cdtAuthor != null){
                $cdtAuthor = explode(',', $cdtAuthor);


            }
            if ($cdtCategory != null){
                $cdtCategory = explode(',', $cdtCategory);

            }
            $data = $this->bookRepository->fillter($cdtAuthor, $cdtCategory, $perPage);

       }
         else {
           $data = $this->bookRepository->getAll('desc',$perPage);
      }
        return $data;
    }

//Get HomeBookSale_Featured

    public function getBookHomeSale_Feature($conditions, $perPage)
    {
        // TODO: Implement getBookHomeSale_Feature() method.
//    dd($conditions['list-books']);
        $onSale = '';
        $featured = '';
        $listBook = [];
//        http://bookworm-app.local:8000/api/books?list-books=onsale
        if ($conditions->has('list-books')) {
            if ($conditions['list-books'] == 'on-sale' || $conditions['list-books'] == 'on-sale-sort') {

                $onSale = $conditions['list-books'];
                $listBook = $this->bookRepository->getHomeBookOnSale_Featured($onSale, $featured, $perPage);

            } //http://bookworm-app.local:8000/api/books?list-books=featured-recommend
            elseif ($conditions['list-books'] == 'featured-recommend' || $conditions['list-books'] == 'featured-recommend-sort') {

                $featured = $conditions['list-books'];
                $listBook = $this->bookRepository->getHomeBookOnSale_Featured($onSale, $featured, $perPage);

            } //http://bookworm-app.local:8000/api/books?list-books=featured-popular
            elseif
            ($conditions['list-books'] == 'featured-popular' || $conditions['list-books'] == 'featured-popular-sort') {
                $featured = $conditions['list-books'];
                $listBook = $this->bookRepository->getHomeBookOnSale_Featured($onSale, $featured, $perPage);
            } else {
                $listBook = [];
            }
        }
        return $listBook;

    }

    public function getById($id)
    {
        // TODO: Implement findById() method.
        $book = $this->bookRepository->getById($id);
        $statusCode = 200;
        if (!$book) {
            $statusCode = 404;
        }
        $data = [
            'statusCode' => $statusCode,
            'book' => $book
        ];
        return $data;
    }


    public
    function create($request)
    {
        // TODO: Implement create() method.
        // TODO: Handle data input
//        dd($request);
        $book = $this->bookRepository->create($request);

//      print_r($book);

//        dd($book );
        $statusCode = 201;
        $message = "Create success.";
        if (!$book) {
            $statusCode = 500;
            $message = "Create not success";
        }
        $data = [
            'statusCode' => $statusCode,
            'message' => $message,
            'book' => $book
        ];
        return $data;
    }

    public
    function update($request, $id)
    {
        // TODO: Implement update() method.
        $oldBook = $this->bookRepository->getById($id);
//        dd($oldBook);
        if (!$oldBook) {
            $newBook = null;
            $statusCode = 404;
        } else {
            $newBook = $this->bookRepository->update($request, $oldBook);
            $statusCode = 200;
        }
        $data = [
            'statusCode' => $statusCode,
            'book' => $newBook
        ];
        return $data;
    }

    public
    function destroy($id)
    {
        // TODO: Implement destroy() method.
        $book = $this->bookRepository->getById($id);
        $statusCode = 404;
        $message = "Book not found.";
        if ($book) {
            $this->bookRepository->delete($book);
            $statusCode = 200;
            $message = "Delete success.";
        }
        $data = [
            'statusCode' => $statusCode,
            'message' => $message
        ];
        return $data;
    }


}
