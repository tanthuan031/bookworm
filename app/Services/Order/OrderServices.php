<?php

namespace App\Services\Order;

use App\Repositories\OrderRepository;
use Illuminate\Support\Facades\Auth;

class OrderServices
{
    protected $order;

    public function __construct(OrderRepository $order)
    {
        $this->order = $order;
    }

    public  function create($request)
    {


        if (auth('sanctum')->check()) {

            $cart = $this->order->create($request);

            return response()->json([
                'status' => 201,
                'message' => 'Your order has been created successfully.',
                'cart' => $cart,
            ]);
        } else {
            return response()->json([
                'status' => 401,
                'message' => 'Login to Add to Cart'
            ]);
        }
    }
    public  function update($request, $id)
    {
    }
    public  function destroy($id)
    {
    }
}