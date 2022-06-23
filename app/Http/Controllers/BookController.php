<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookCollection;
use App\Repositories\PaginateRepositories;
use App\Services\Book\BookService;
use Illuminate\Http\Request;

class BookController extends Controller
{

    private  BookService $bookService;

    public function __construct(BookService $bookService)
    {
        $this->bookService=$bookService;

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $listBook =  new BookCollection($this->bookService->getAll($request));
        return $listBook;
//     return  response( $fillterData['books'],$fillterData['statusCode']);

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Basic
//        $book=new Book();
//        $book->save();

//        Advance OOP

//        $bookRepo=new BookRepository();
//        $newBook=$bookRepo->create($request->post());
//        return $newBook;
//        dd($request->post());

        $book=$this->bookService->create($request->all());
//        dd($book);

         return json($book['message'],$book['statusCode']);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $bookShow=$this->bookService->getById($id);

        return  response()->json($bookShow['book'],$bookShow['statusCode']);
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
        $bookUpdate=$this->bookService->update($request->post(),$id);
        return response()->json($bookUpdate['book'],$bookUpdate['statusCode']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $bookDelete=$this->bookService->destroy($id);
        return response()->json($bookDelete['message'],$bookDelete['statusCode']);
    }
}
