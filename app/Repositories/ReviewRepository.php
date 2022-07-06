<?php

namespace App\Repositories;

use App\Models\Review;

class ReviewRepository
{
    protected $query;
    public function __construct()
    {
        $this->query = Review::query();
    }

    public function getAll()
    {
        return $this->query->get();
    }

    public function getById($id)
    {
        // TODO: Implement getById() method.

    }

    public function getBookAVGRatingStar($idBook)
    {
        $this->query
            ->selectRaw('bs.id,sum(bs.sumStar)/sum(bs.countStar) as average_star')
            ->from(function ($q) {
                $q->selectRaw('book.id,review.rating_start*count(review.rating_start) as sumStar ,count(review.rating_start) as countStar from book')
                    ->leftJoin('review', 'book.id', '=', 'review.book_id')
                    ->groupBy(
                        'book.id',
                        'review.rating_start',
                    );
            }, 'bs')
            ->where('bs.id', '=', $idBook)
            ->groupBy('bs.id')
            ->orderByRaw('average_star desc NULLS LAST');


        return $this->query->get();
    }
}