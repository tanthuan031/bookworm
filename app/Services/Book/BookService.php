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
            if ($request->has('author_id') || $request->has('category_id')) {
                $data = $this->bookRepository->fillter($request, $perPage);
            } else {
                $data = $this->bookRepository->getAll($perPage);
            }
        } else {
            if ($request->has('author_id') || $request->has('category_id')) {
                $data = $this->bookRepository->fillter($request, $perPage);
            } else {
                $data = $this->bookRepository->getAll($perPage);
            }
        }
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
