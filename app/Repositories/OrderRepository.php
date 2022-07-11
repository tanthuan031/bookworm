<?php

namespace App\Repositories;

use App\Models\Book;
use App\Models\Order;
use App\Models\OrderItem;
use Hamcrest\Core\HasToString;
use PhpParser\Node\Expr\Print_;

class OrderRepository
{
    protected $query;
    public function __construct()
    {
        $this->query = Order::query();
    }



    public function getById($id)
    {
        // TODO: Implement getById() method.

    }
    public function create($data)
    {

        $user_id = auth('sanctum')->user()->id;
        $order_date = date('Y-m-d H:i:s');
        $order_amount = $data->order_amount;
        $order_item = $data->order_item;

        $insert = new Order();
        $insert->user_id = $user_id;
        $insert->order_date = $order_date;
        $insert->order_amount = $order_amount;
        $insert->save();
        $currentOrderId = $insert->id;

        $idBook = new Book();
        // $orderCartItem = new OrderItem();
        $cartItemNot = [];
        foreach ($order_item as $item) {
            if ($idBook->find($item['id']) == NULL) {
                array_push($cartItemNot, $item['id']);
            } else {
                $orderCartItem = OrderItem::create([
                    'order_id' =>
                    $currentOrderId,
                    'book_id' => $item['id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['final_price'],
                ]);
            }
        }
        // dd($orderCartItem->toSql());
        return $cartItemNot;
    }
}