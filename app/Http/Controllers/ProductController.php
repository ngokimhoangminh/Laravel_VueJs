<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use App\Category;
use App\Brands;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class ProductController extends Controller
{

    public function categories()
    {
        $categories=Category::all();
        return response()->json($categories,200);
    }
    public function brands()
    {
        $brands=Brands::all();
        return response()->json($brands,200);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $per_page=5;
        $products=Product::with('category','brands')->orderBy('id','desc')->paginate($per_page);
        //$products=Product::orderBy('id','desc')->paginate($per_page);
        $product_total=Product::orderBy('id','desc')->get();
        return response()
        ->json([
            'data' => $products,
            'data_total'=>$product_total
        ]);
        //return response()->json($products,200);
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
        //
        $request->validate([
            'name'=>'required|min:3',
            'product_status'=>'required',
            'product_des'=>'required',
            'image'=> 'required|image|mimes:jpeg,png,jpg'
        ]);
        $product= new Product();
        $product->category_id=$request->category_id;
        $product->brand_id=$request->brand_id;
        $product->name=$request->name;
        $product->product_des=$request->product_des;
        $product->price=$request->price;
        $product->discount=$request->discount;
        $product->product_status=$request->product_status;

        $image=$request->image;
        $name=time().'_'.$image->getClientOriginalName();
        Storage::disk('public')->put($name,File::get($image));
        $product->image=$name;
        
        if($product->save())
        {
            return response()->json($product,200);
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
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
        return response()->json($product,200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
        return response()
            ->json([
                'form' => $product
            ]);

        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
        $request->validate([
            'name'=>'required|min:3',
            'image'=> 'image|mimes:jpeg,png,jpg'
        ]);
        $product->category_id=$request->category_id;
        $product->brand_id=$request->brand_id;
        $product->name=$request->name;
        $product->product_des=$request->product_des;
        $product->price=$request->price;
        $product->discount=$request->discount;
        $product->product_status=$request->product_status;

        $oldPath=$product->image;
        if($request->image)
        {
            $image=$request->image;
            $name=time().'_'.$image->getClientOriginalName();
            Storage::disk('public')->put($name,File::get($image));
            $product->image=$name;
            Storage::disk('public')->delete($oldPath);
        }
        if($product->save())
        {
            return response()->json($product,200);
        }else{
            Storage::disk('public')->delete($name);
            return response()->json([
                'message'=>'Some error occured, plese try again',
                'status_code'=>500
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
        if($product->delete())
        {
            Storage::disk('public')->delete($product->image);
            return response()-> json([
                'message'=>'Product deleted succesfully !!!',
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
        $id_product=$request->product_id;
        $product=Product::find($id_product);
        
        $product->product_status=0;
        if($product->save())
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
        $id_product=$request->product_id;
        $product=Product::find($id_product);
        
        $product->product_status=1;
        if($product->save())
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
    public function filter(Request $request)
    {
        $id_category=$request->category_id;
        $product=Product::where('category_id',$id_category)->get();
        return response()->json($product,200);
    }
}
