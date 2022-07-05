<?php

namespace App\Services\Category;

use App\Repositories\CategoryRepository;


class CategoryService
{
    protected $category;

    public function __construct(CategoryRepository $category)
    {
        $this->category = $category;
    }
    public  function getAll()
    {
        $listCategories = $this->category->getAll();
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