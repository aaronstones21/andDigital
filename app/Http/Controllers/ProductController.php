<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Gloudemans\Shoppingcart\Facades\Cart;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Product $product)
    {
        $cart = Cart::instance('main');
        $cart->add(
            $product->getKey(),
            $product->name,
            1,
            $product->cost,
        )->associate(Product::class);

        $data['cost'] = str_replace(',', '', $cart->subtotal());
        $data['cart'] = $cart->content();

        return json_encode($data);
    }

    public function edit(Product $product)
    {
        //
    }

    public function delete(Product $product)
    {
        $product->delete();
        return json_encode('success');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $product = Product::find($request->id);
        $product->fill($request->all())->save();
        return json_encode('success');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $cart = Cart::instance('main');
        $cart->destroy();
    }

    public function show(){

        $products = Product::all();
        return json_encode($products);

    }

}
