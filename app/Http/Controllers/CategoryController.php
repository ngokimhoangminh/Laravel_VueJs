<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
class CategoryController extends Controller
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
        $categories=Category::orderBy('id','desc')->paginate($per_page);
        $categories_data=Category::orderBy('id','desc')->get();
        //return response()->json($categories,200);
        return response()
        ->json([
            'data' => $categories,
            'data_total'=>$categories_data
        ]);
        
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
            'image'=> 'required|image|mimes:jpeg,png,jpg'
        ]);
        $category= new Category();
        $category->name=$request->name;

        $image=$request->image;
        $name=time().'_'.$image->getClientOriginalName();
        Storage::disk('public')->put($name,File::get($image));
        $category->image=$name;
        
        if($category->save())
        {
            return response()->json($category,200);
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
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
        $request->validate([
            'name'=>'required|min:3',
            'image'=> 'image|mimes:jpeg,png,jpg'
        ]);
        $category->name=$request->name;
        $oldPath=$category->image;
        if($request->image)
        {
            $image=$request->image;
            $name=time().'_'.$image->getClientOriginalName();
            Storage::disk('public')->put($name,File::get($image));
            $category->image=$name;
            Storage::disk('public')->delete($oldPath);
        }
        if($category->save())
        {
            return response()->json($category,200);
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
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
        if($category->delete())
        {
            Storage::disk('public')->delete($category->image);
            return response()-> json([
                'message'=>'Category deleted succesfully !!!',
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
