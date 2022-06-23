<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return parent::toArray($request);

//        return [
//            'category_id' => $this->author_id,
//            'author_id' => $this->author_id,
//            'book_title' => $this->book_title,
//            'page' => $this->current_page,
//        ];


    }
}
