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
        $perPage = 5;
        if ($request->has('per_page')) {
            $perPage = $request->get('per_page');
            if ($perPage == null || !is_numeric($perPage)) {
                $perPage = 5;
            }
            $data = $this->fillter($request, $perPage);
        } else {
            $data = $this->fillter($request, $perPage);
        }

        if ($data) {
            $listBook = [
                'message' => 'Success.',
                'statusCode' => 'true',
                'data' => $data->items(),
                'current_page' => $data->currentPage(),
                'next_page_url' => $data->nextPageUrl(),
                'pre_page_url' => $data->previousPageUrl(),
                'last_page_url' => $data->lastPage(),
                'perPage' => $data->perPage(),
                'toTalPage' => $data->total()
            ];
        } else {
            $listBook = [
                'message' => 'Not Error.',
                'statusCode' => 'False',

            ];
        }
        return $listBook;

    }

    public function fillter($conditions, $perPage)
    {

        if ($conditions->has('author_id') || $conditions->has('category_id')) {
            $cdtCategory = $conditions['category_id'];
            $cdtAuthor = $conditions['author_id'];
            if (is_numeric($cdtCategory) || is_numeric($cdtAuthor)) {
                switch ($conditions) {
                    case $cdtCategory != null :
                    case $cdtAuthor != null :
                        $data = $this->bookRepository->fillter($cdtAuthor, $cdtCategory, $perPage);
                        break;
                    default:
                        break;
                }
            }else {
                $data = $this->bookRepository->getAll($perPage);

            }
        } else {
            $data = $this->bookRepository->getAll($perPage);
        }
//        dd($data);
        return $data;
    }

//    public function fillter($conditions)
//    {
//        // TODO: Implement fillter() method.
//
//        switch ($conditions){
//            case $conditions->has('author_id') :
//            case $conditions->has('category_id'):
//                    $data= $this->bookRepository->fillter($conditions->all());
//                break;
//            default:
//                $data=null;
//        }
//        $statusCode=404;
////        dd($data);
//        if( $data){
//            $statusCode=201;
//        }
//        $fillterBook=[
//            'statusCode'=>$statusCode,
//            'books'=>$data
//        ];
//
//        return  $fillterBook;
//    }

//Get HomeBookSale_Featured

    public function getBookHomeSale_Feature($conditions)
    {
        // TODO: Implement getBookHomeSale_Feature() method.
//    dd($conditions['book-home']);
        $onSale = '';
        $featured = '';
        $listBook=[];
//        http://bookworm-app.local:8000/api/books?book-home=onsale
        if ($conditions->has('book-home')) {
            if ($conditions['book-home'] == 'onsale') {

                $onSale = $conditions['book-home'];
                $listBook = $this->bookRepository->getHomeBookOnSale_Featured($onSale, $featured);

            } elseif ($conditions['book-home'] == 'featured') {

                $featured = $conditions['book-home'];
                $listBook = $this->bookRepository->getHomeBookOnSale_Featured($onSale, $featured);
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


    public function create($request)
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

    public function update($request, $id)
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

    public function destroy($id)
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
