<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use App\Repositories\BookRepository;
use App\Services\Book\BookService;
use Illuminate\Http\Request;

class BookController extends Controller
{

    private  BookService $bookService;

    public function __construct(BookService $bookService)
    {
        $this->bookService = $bookService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //        getAll Book

        // return $this->bookService->getAll($request);
        //        *********************
        //        get On Sale - Featured
        //        $bookHome=$this->bookService->getBookHomeSale_Feature($request,5);
        //        return $bookHome;

        if (
            $request->has('list_books')
            && ($request->get('list_books') == 'featured-popular'
                || $request->get('list_books') == 'featured-recommend'
                || $request->get('list_books') == 'on-sale')
        ) {

            return  $this->bookService->getBookHomeSale_Feature($request, 20);
        } else {
            return $this->bookService->getAll($request);
        }
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $book = $this->bookService->create($request->all());
        return response()->json($book['message'], $book['statusCode']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $bookShow = $this->bookService->getById($id);

        return  response()->json($bookShow['book'], $bookShow['statusCode']);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        //        dd($request->post());
        $bookUpdate = $this->bookService->update($request->post(), $id);
        return response()->json($bookUpdate['book'], $bookUpdate['statusCode']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $bookDelete = $this->bookService->destroy($id);
        return response()->json($bookDelete['message'], $bookDelete['statusCode']);
    }
}