<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Book extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'book';
    protected $attributes = [];
//    Define attribute
    protected $fillable = [
        'category_id',
        'author_id',
        'book_title',
        'book_summary',
        'book_price',
        'book_cover_photo'
    ];
//    protected $guarded = [];

//    Relationship
    public function discount():HasOne
    {
        return $this->hasOne(Discount::class);
    }
    public function review():HasMany{
        return $this->hasMany(Review::class);

    }
    public  static function getTableBook():string{
        return 'book';
    }
    public function author():BelongsTo
    {
        return $this->belongsTo(Author::class);
    }
    public function category():BelongsTo
    {
        return$this->belongsTo(Category::class);
    }


}
