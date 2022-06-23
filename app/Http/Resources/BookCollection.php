<?php

namespace App\Http\Resources;



use Illuminate\Http\Resources\Json\ResourceCollection;


class BookCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     *
     */

    public function toArray($request):array
    {
        $listBook= $this->collection;

        if(!($listBook)|| $listBook!= [] ){
            $response['status']='true';
            $response['message']='Book List';
            $response['book']=$listBook;

        }else{
            $response['status']='false';
            $response['message']='Book is not found. ';
        }

        return  [

            'data'=>$response
        ];

    }
}
