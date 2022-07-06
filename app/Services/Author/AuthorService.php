<?php

namespace App\Services\Author;

use App\Repositories\AuthorRepository;


class AuthorService
{
    protected $author;

    public function __construct(AuthorRepository $author)
    {
        $this->author = $author;
    }
    public  function getAll()
    {
        $listAuthor = $this->author->getAll();
        $data = [];
        if ($listAuthor) {
            $data = [
                'message' => 'Success',
                'statusCode' => 'true',
                'data' => $listAuthor,
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
        return $this->author->getById($id);
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