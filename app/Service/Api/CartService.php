<?php

namespace App\Service\Api;
use App\Cart;
use Illuminate\Http\Request;
use App\Repositories\CartRepository;


class CartService
{
    protected $cartRepository;
    public function __construct(CartRepository $cartRepository)
    {
        $this->cartRepository = $cartRepository;
    }

    public function index($id)
    {
        //
        
    }

    public function create()
    {
        //
    }

    public function store($request)
    {
        //
        $data=$request->all();
        if(empty($request->quantity))
        {
            $data['quantity']=1;
        }
        $cart=$this->cartRepository->store($data);
        if($cart)
        {
            return response()->json($cart,200);
        }else{
            return response()->json([
                'message'=>'Đã xảy ra lỗi',
                'status_code'=>500
            ],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function show($cart)
    {
        //
        $carts=$this->cartRepository->show($cart);
        if($carts)
        {
            return response()->json($carts->toArray(),200);
        }else
        {
            return response()->json([
                'message'=>'Đã xảy ra lỗi',
                'status_code'=>500
            ],500);
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function edit(Cart $cart)
    {
        //
    }


    public function update($request, $cart)
    {
        $cart=$this->cartRepository->update($request->quantity,$cart);
        if($cart)
        {
            return response()->json($cart,200);
        }else{
            return response()->json([
                'message'=>'Some error occured, plese try again',
                'status_code'=>500
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy($cart)
    {
        $result=$this->cartRepository->destroy($cart);
        if($result)
        {
            return response()-> json([
                'message'=>'Đã xóa sản phẩm trong giỏ hàng thành công !!!',
                'status_code'=>200
            ],200);
           
        }else
        {
            return response()-> json([
                'message'=>'Some error occured, pleses try again!!!',
                'status_code'=>500
            ],500);
        }
    }
}
