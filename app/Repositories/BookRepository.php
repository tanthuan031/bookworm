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
        return $this->query->paginate($perPage);

    }

    public function getById($id)
    {
        // TODO: Implement getById() method.
        return $this->query->find($id);
    }

    public function fillter($conditions, $perPage = 5)
    {
        // TODO: Implement filter() method.

        $bookList = $this->query;
//        Check Category
        try {
            if ($conditions['category_id'] != null && is_numeric($conditions['category_id'])
                && $bookList->where('category_id', '=', $conditions['category_id'])->get()) {
                $this->query->where('category_id', '=', $conditions['category_id']);
            }
        } catch (\Exception $e) {
        }
//        Check Author
        try {
            if ($conditions['author_id'] != null && is_numeric($conditions['author_id']) && $bookList->where('author_id', '=', $conditions['author_id'])->get()) {

                $this->query->where('author_id', '=', $conditions['author_id']);

            }
        } catch (\Exception $e) {
        }
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
