<?php

namespace App\Service\Api;

use Illuminate\Http\Request;
use App\Brands;
class BrandsService
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $per_page=5;
        $brands=Brands::orderBy('id','desc')->paginate($per_page);
        return response()->json($brands,200);
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
    public function store(Request $request)
    {
        //Customer::create($request->all());
        $request->validate([
            'name'=>'required|min:3',
            'description'=> 'required|min:10',
            'status'=> 'required'
        ]);
        $brand=new Brands;
        $brand->name=$request->name;
        $brand->description=$request->description;
        $brand->status=$request->status;
        if($brand->save())
        {
            return response()->json($brand,200);
        }else{
            return response()->json([
                'message'=>'Some error occured, plese try again',
                'status_code'=>500
            ],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Brands $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($brand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($request, $brand)
    {
        //
        $brand=Brands::find($brand);
        $brand->name=$request->name;
        $brand->description=$request->description;
        $brand->status=$request->status;
        if($brand->save())
        {
            return response()->json($brand,200);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($brand)
    {
        //Nếu có Customer $customer thì nó đã là Customer::find($customer)
        $brand=Brands::find($brand);
        if($brand->delete())
        {
            return response()-> json([
                'message'=>'Brand deleted succesfully !!!',
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
    public function unactive(Request $request)
    {
        $id_brand=$request->brand_id;
        $brand=Brands::find($id_brand);
        $brand->status=0;
        if($brand->save())
        {
            return response()-> json([
                'message'=>'Product change unactive succesfully !!!',
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
    public function active(Request $request)
    {
        $id_brand=$request->brand_id;
        $brand=Brands::find($id_brand);
        $brand->status=1;
        if($brand->save())
        {
            return response()-> json([
                'message'=>'Product change unactive succesfully !!!',
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
