<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'order';
    protected $attributes = [];
    protected $fillable = [
        'user_id',
        'order_date',
        'order_amount'
    ];

    public function order_item(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}