<?php

namespace App\Services\Review;

use App\Repositories\ReviewRepository;
use stdClass;

class ReviewService
{
    protected $review;

    public function __construct(ReviewRepository $review)
    {
        $this->review = $review;
    }
    public  function getAll()
    {
        $listCategories = $this->review->getAll();
        $data = [];
        if ($listCategories) {
            $data = [
                'message' => 'Success',
                'statusCode' => 'true',
                'data' => $listCategories,
            ];
        } else {
            $data = [
                'message' => 'Failed',
                'statusCode' => 'false',
                'data' => [],
            ];
        }

        return $data;
    }
    public function getAllAVGRatingStar($conditions)
    {
        $data = [];
        $starFilter = '';
        $perPage = 5;
        if ($conditions->has('star')) {
            $starFilter = $conditions['star'];
            // dd($starFilter);

            if ($conditions->has('per_page')) {
                $perPage = $conditions['per_page'];
                $data = $this->review->getBookAVGRatingStar($starFilter, $perPage);
            } else {
                $data = $this->review->getBookAVGRatingStar($starFilter, $perPage);
            }
        } else {
            $data = $this->review->getBookAVGRatingStar($starFilter, $perPage);
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
    }
    public  function getById($id)
    {
    }
    public  function create($request)
    {
    }
    public  function update($request, $id)
    {
    }
    public  function destroy($id)
    {
    }
}