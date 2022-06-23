<?php

namespace App\Services;

abstract class BaseServices
{
    public abstract function getAll($request);
    public abstract function getBook($conditions);
    public abstract function getById($id);
    public abstract function create($request);
    public abstract function update($request,$id);
    public abstract function destroy($id);



}
