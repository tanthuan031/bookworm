<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Author extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'author';
    public static function getTableName(): string
    {
        return 'author';
    }

    protected $fillable = [
        'author_name',
        'author_bio',
    ];
    public function book(): HasMany
    {
        return $this->hasMany(Book::class);
    }
}