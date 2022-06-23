<?php

namespace App\Repositories;

abstract class BaseRepository
{
    protected $query;
    public abstract function getAll($perPage);
    public abstract function getById($id);
    public abstract function fillter($cdtAuth,$cdtCategory,$perPage);
    public abstract function create($data);
    public abstract function update($data,$object);
    public abstract function delete($object);
}
