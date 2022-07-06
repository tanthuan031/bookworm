<?php

namespace App\Repositories;

use App\Models\Author;

class AuthorRepository
{
    protected $query;
    public function __construct()
    {
        $this->query = Author::query();
    }

    public function getAll()
    {
        return $this->query->get();
    }

    public function getById($id)
    {
        // TODO: Implement getById() method.
        $this->query->where('id', '=', $id);
        return $this->query->get();
    }
}