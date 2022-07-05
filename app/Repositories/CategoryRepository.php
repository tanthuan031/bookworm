<?php

namespace App\Repositories;

use App\Models\Author;
use App\Models\Book;
use App\Models\Category;

class CategoryRepository
{
    protected $query;
    public function __construct()
    {
        $this->query = Category::query();
    }

    public function getAll()
    {
        return $this->query->get();
    }

    public function getById($id)
    {
        // TODO: Implement getById() method.

    }
}