<?php

namespace App\Repositories;

use App\Models\Author;
use App\Models\Book;


class BookRepository extends BaseRepository
{

    public function __construct()
    {
        $this->query = Book::query();
    }

    public function getAll($perPage)
    {
        // TODO: Implement getAll() method.

        $this->query->with('discount');
        return $this->query->paginate($perPage);

    }

    public function getById($id)
    {
        // TODO: Implement getById() method.
        return $this->query->find($id);
    }

    public function fillter($cdtAuthor, $cdtCategory, $perPage = 5)
    {
        // TODO: Implement filter() method.

        $bookList = $this->query;
        if (is_numeric($cdtAuthor) && !empty($bookList->where('author_id', '=', $cdtAuthor)->get())) {

            $this->query->where('author_id', '=', $cdtAuthor);
        }
        if (is_numeric($cdtCategory) && !empty($bookList->where('category_id', '=', $cdtCategory)->get())) {

            $this->query->where('category_id', '=', $cdtCategory);
        }
        $this->query->with('discount');
        return $this->query->paginate($perPage);

    }


    public function create($data)
    {
        // TODO: Implement create() method.
        // TODO: Handle data input
        // TODO: Insert data
        try {
            $object = $this->query->create($data);

        } catch (\Exception $e) {
            return null;
        }
        return $object;

    }

    public function update($data, $object)
    {
        // TODO: Implement update() method.
//        dd($object);
        $object->update($data);
        return $object;

    }

    public function delete($object)
    {
        // TODO: Implement delete() method.
        $object->delete();

    }


}
