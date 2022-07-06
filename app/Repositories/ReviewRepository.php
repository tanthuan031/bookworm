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
    public function getAllAVGRatingStar($filter_star, $perPage = 5)
    {
        $this->query
            ->selectRaw('bs.id,bs.author_id,bs.category_id,author.author_name,bs.book_title,bs.book_price,bs.book_cover_photo,bs.discount_price, sum(bs.sumStar)/sum(bs.countStar) as average_star, bs.final_price')
            ->from(function ($q) {
                $q->selectRaw('book.id ,book.author_id,book.category_id,book.book_title ,book.book_price,book.book_cover_photo , discount.discount_price ,discount.discount_start_date ,
                                      discount.discount_end_date ,  review.rating_start*count(review.rating_start) as sumStar ,count(review.rating_start) as countStar,
                                      case when (discount.discount_end_date - discount.discount_start_date) < 0 or discount.discount_price  is null  then book.book_price
                                           when (discount.discount_end_date - discount.discount_start_date) >0 or (discount.discount_end_date - discount.discount_start_date) is null  then discount.discount_price
                                      end as final_price from book')
                    ->leftJoin('discount', 'book.id', '=', 'discount.book_id')
                    ->leftJoin('review', 'book.id', '=', 'review.book_id')
                    ->groupBy(
                        'book.id',
                        'book.category_id',
                        'book.author_id',
                        'book.book_title',
                        'book.book_price',
                        'book.book_cover_photo',
                        'discount.discount_price',
                        'discount.discount_start_date',
                        'discount.discount_end_date',
                        'review.rating_start',
                    );
            }, 'bs')
            ->join('author', 'bs.author_id', '=', 'author.id')
            ->groupBy('bs.id', 'bs.author_id', 'bs.category_id', 'author.author_name', 'bs.book_title', 'bs.book_price', 'bs.discount_price', 'bs.book_cover_photo', 'bs.discount_start_date', 'bs.discount_end_date', 'bs.final_price')
            ->orderByRaw('average_star desc NULLS LAST')
            ->orderBy('final_price');
        if (!empty($filter_star) && is_numeric($filter_star)) {
            $this->query->having(Review::raw('sum(bs.sumStar)/sum(bs.countStar)'), '>=', $filter_star);
        }
        // $this->query->with('discount');
        // $this->query->with('author');
        return $this->query->paginate($perPage);
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