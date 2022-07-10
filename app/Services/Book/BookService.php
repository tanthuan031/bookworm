<?php

namespace App\Services\Book;

use App\Models\Book;
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
            if ($request->has('star')) {
                $data = $this->fillter($request, $perPage);
            } else if ($request->has('list_books') || $request->has('author_id') || $request->has('category_id')) {

                $data = $this->getBookHomeSale_Feature($request, $perPage);
            } elseif ($request->has('sort')) {
                $sort = $request['sort'];
                $data = $this->bookRepository->getAll($sort, $perPage);
            } else {
                $data = $this->bookRepository->getAll('desc', $perPage);
            }
        } else {


            // if ($request->has('author_id') || $request->has('category_id')) {
            //     $data = $this->fillter($request, $perPage);
            // } else

            if ($request->has('star')) {
                $data = $this->fillter($request, $perPage);
            } else if ($request->has('list_books') || $request->has('author_id') || $request->has('category_id')) {
                $data = $this->getBookHomeSale_Feature($request, $perPage);
            } else {
                $data = $this->bookRepository->getAll('desc', $perPage);
            }
        }
        if ($data) {
            $listBook = [
                'message' => 'Success.',
                'statusCode' => 'true',
                'data' => $data->items(),
                'pagination' => [
                    'current_page' => $data->currentPage(),
                    'next_page_url' => $data->nextPageUrl(),
                    'pre_page_url' => $data->previousPageUrl(),
                    'last_page_url' => $data->lastPage(),
                    'perPage' => $data->perPage(),
                    'toTalPage' => $data->total()
                ]

            ];
        } else {
            $listBook = [
                'message' => 'Not Error.',
                'statusCode' => 'False',

            ];
        }
        return $listBook;

        // return $data;
    }

    public function fillter($conditions, $perPage)
    {

        $data = [];

        if ($conditions->has('author_id') || $conditions->has('category_id')) {

            $cdtCategory = $conditions['category_id'];
            $cdtAuthor = $conditions['author_id'];
            if ($cdtAuthor != null) {
                $cdtAuthor = explode(',', $cdtAuthor);
            }
            if ($cdtCategory != null) {
                $cdtCategory = explode(',', $cdtCategory);
            }
            $data = $this->bookRepository->fillter($cdtAuthor, $cdtCategory, $perPage);
        } else if ($conditions->has('star')) {

            $cdtStar = $conditions['star'];
            $data = $this->bookRepository->getAllBookAVGRatingStar($cdtStar, $perPage);
        } else {
            $data = $this->bookRepository->getAll('desc', $perPage);
        }
        return $data;
    }

    //Get HomeBookSale_Featured

    public function getBookHomeSale_Feature($conditions, $perPage)
    {
        // TODO: Implement getBookHomeSale_Feature() method.
        //    dd($conditions['list_books']);
        $onSale = '';
        $featured = '';
        $listBook = [];
        $cdtCategory = $conditions['category_id'] ? $conditions['category_id'] : '';
        $cdtAuthor = $conditions['author_id'] ? $conditions['author_id'] : '';
        $cdtStar = $conditions['star'] ? $conditions['star'] : '';
        //        http://bookworm-app.local:8000/api/books?list_books=onsale
        if ($conditions->has('list_books')) {
            if ($conditions['list_books'] == 'on-sale' || $conditions['list_books'] == 'on-sale-sort') {

                $onSale = $conditions['list_books'];


                $listBook = $this->bookRepository->getHomeBookOnSale_Featured($onSale, $featured, $cdtAuthor, $cdtCategory, $cdtStar, $perPage);
            } //http://bookworm-app.local:8000/api/books?list_books=featured-recommend
            elseif ($conditions['list_books'] == 'featured-recommend' || $conditions['list_books'] == 'featured-recommend-sort') {

                $featured = $conditions['list_books'];
                $listBook = $this->bookRepository->getHomeBookOnSale_Featured($onSale, $featured, $cdtAuthor, $cdtCategory, $cdtStar, $perPage);
            } //http://bookworm-app.local:8000/api/books?list_books=featured-popular
            elseif ($conditions['list_books'] == 'featured-popular' || $conditions['list_books'] == 'featured-popular-sort') {
                $featured = $conditions['list_books'];
                $listBook = $this->bookRepository->getHomeBookOnSale_Featured($onSale, $featured, $cdtAuthor, $cdtCategory, $cdtStar, $perPage);
            } elseif ($conditions['list_books'] == 'asc' || $conditions['list_books'] == 'desc') {
                $sort = $conditions['list_books'];
                $listBook = $this->bookRepository->getAll($sort, $perPage);
            } else {
                $listBook = [];
            }
        } elseif ($conditions->has('author_id') || $conditions->has('category_id')) {
            $listBook = $this->fillter($conditions, $perPage);
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
            'data' => $book
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