<?php

namespace App\Repositories;
use Illuminate\Http\Request;
use App\Cart;

class CartRepository
{
    protected $carts;

    public function __construct(Cart $carts)
    {
        $this->carts = $carts;
    }
    public function index()
    { 
        
    }

    // public function getAll()
    // { 
    //     return $this->brands::orderBy('id','desc')->get();
    // }


    public function store($data)
    {
        return $this->carts::create($data);
    }

    public function show($cart)
    {
        return $this->carts::where('user_id',$cart)->orderBy('id','desc')->get();
    }

    public function update($data, $cart)
    {
        //
        return $this->carts::where('id',$cart)->update(['quantity'=>$data]);
        
    }

    public function destroy($cart)
    {
        return $this->carts::find($cart)->delete();
    }

}
