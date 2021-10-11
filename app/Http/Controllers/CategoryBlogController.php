<?php

namespace App\Http\Controllers;

use App\CategoryBlog;
use Illuminate\Http\Request;

class CategoryBlogController extends Controller
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
        $category_blog=CategoryBlog::orderBy('id','desc')->paginate($per_page);
        return response()->json($category_blog,200);
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
            'category_blog_name'=>'required|unique:category_blogs|min:3',
            'category_blog_slug'=> 'required|unique:category_blogs|min:3',
            'category_blog_des'=> 'required'
        ]
        ,
        [
            'category_blog_name.required' => 'Bạn chưa nhập tên danh mục',
            'category_blog_name.unique' => 'tên danh mục bài viết đã tồn tại',
            'category_blog_slug.required' => 'Bạn chưa nhập slug danh mục',
            'category_blog_des.required' => 'Mô tả danh mục hiện chưa có'
        ]);
       
        $category_blog=new CategoryBlog;
        $category_blog->category_blog_name=$request->category_blog_name;
        $category_blog->category_blog_slug=$request->category_blog_slug;
        $category_blog->category_blog_des=$request->category_blog_des;
        if($category_blog->save())
        {
            return response()->json($category_blog,200);
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
     * @param  \App\CategoryBlog  $categoryBlog
     * @return \Illuminate\Http\Response
     */
    public function show(CategoryBlog $categoryBlog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CategoryBlog  $categoryBlog
     * @return \Illuminate\Http\Response
     */
    public function edit(CategoryBlog $categoryBlog)
    {
        //
        return response()
            ->json([
                'form' => $categoryBlog
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CategoryBlog  $categoryBlog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $categoryBlog)
    {
        //
       // dd($categoryBlog);
        $category_blog=CategoryBlog::find($categoryBlog);
        //dd($category_blog);
        $category_blog->category_blog_name=$request->category_blog_name;
        $category_blog->category_blog_slug=$request->category_blog_slug;
        $category_blog->category_blog_des=$request->category_blog_des;
        if($category_blog->save())
        {
            return response()->json($category_blog,200);
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
     * @param  \App\CategoryBlog  $categoryBlog
     * @return \Illuminate\Http\Response
     */
    public function destroy(CategoryBlog $categoryBlog)
    {
        //
        if($categoryBlog->delete())
        {
            return response()-> json([
                'message'=>'Xóa danh mục bài viết thành công!!!',
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
