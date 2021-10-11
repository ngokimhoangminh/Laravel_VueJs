<?php

namespace App\Service\Api;

use App\Model\Category;
use Illuminate\Http\Request;
use App\Repositories\CategoryRepository;
use App\Repositories\ProductRepository;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class CategoryService
{
    protected $categoryRepository;
    protected $productRepository;
    public function __construct(CategoryRepository $categoryRepository,ProductRepository $productRepository)
    {
        $this->categoryRepository = $categoryRepository;
        $this->productRepository = $productRepository;
    }
    public function index()
    {
        $categories=$this->categoryRepository->index(5);
        $categories_data=$this->categoryRepository->getAll();
        return response()
        ->json([
            'data' => $categories,
            'data_total'=>$categories_data
        ]);
    }

    public function create()
    {
        //
    }

    public function store($request)
    {
        $data = $request->validated();
        $image=$request->image;
        $get_name_image = $image->getClientOriginalName();
        $name_image = current(explode('.',$get_name_image));
        $new_image =  $name_image.rand(0,99).'.'.$image->getClientOriginalExtension();
        $data['image'] = $new_image;
        Storage::disk('public')->put($new_image,File::get($image));
        
        $category=$this->categoryRepository->store($data);
    
        if($category)
        {
            return response()->json($category,200);
        }else{
            return response()->json([
                'message'=>'Some error occured, plese try again',
                'status_code'=>500
            ],500);
        }
    }

    public function show(Category $category)
    {
        //
    }

    public function edit(Category $category)
    {
        //
        
    }

    public function update($request,$category)
    {
        $data = $request->validated();
        $cat=$this->categoryRepository->findByID($category);
        $oldPath=$cat->image;

        if($request->image)
        {
            $image=$request->image;
            $get_name_image = $image->getClientOriginalName();
            $name_image = current(explode('.',$get_name_image));
            $new_image =  $name_image.rand(0,99).'.'.$image->getClientOriginalExtension();
            Storage::disk('public')->put($new_image,File::get($image));
            $data['image']=$new_image;
            Storage::disk('public')->delete($oldPath);
        }
        $categorys=$this->categoryRepository->update($data,$category);

        if($categorys)
        {
            return response()->json($categorys,200);
        }else{
            return response()->json([
                'message'=>'Some error occured, plese try again',
                'status_code'=>500
            ],500);
        }
    }

    public function destroy($category)
    {
        $product=$this->productRepository->findByCategoryID($category);
        $cat=$this->categoryRepository->findByID($category);
        if(!empty($product))
        {
            foreach($product as $products)
            {
                $this->productRepository->delete($products);
                Storage::disk('public')->delete($products->image);
            }
        }
        $result=$this->categoryRepository->destroy($category);
        if($result)
        {
            Storage::disk('public')->delete($cat->image);
            return response()-> json([
                'message'=>'Đã xóa danh mục thành công !!!',
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
