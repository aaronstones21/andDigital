<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use App\Models\Product;
use Illuminate\Http\Request;

class OrdersController extends Controller
{

    public function show(){

        $orders = Orders::all();

        return json_encode($orders);

    }

    public function store($products)
    {
        $quantityCheck = false;
        $products = json_decode($products);
        $products->order = str_split($products->order);

        for($x =0; $x < sizeof($products->order); $x++){
            if($products->order[$x] > 0){
                $product = Product::find($products->order[$x]);
                $product->quantity--;
                if($product->quantity < 0){
                    $quantityCheck = true;
                }
            }
            if($quantityCheck == true){
                return 'Sorry we can not fulfil that order';
            }
            $product->save();
        }

        $order = new Orders;

        $order->cost = $products->cost;
        $order->count = $products->count;
        $order->email = $products->email;

        $order->save();


        return json_encode('new order created');

    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Orders  $orders
     * @return \Illuminate\Http\Response
     */
    public function edit(Orders $orders)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Orders  $orders
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Orders $orders)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Orders  $orders
     * @return \Illuminate\Http\Response
     */
    public function destroy(Orders $orders)
    {
        //
    }
}
