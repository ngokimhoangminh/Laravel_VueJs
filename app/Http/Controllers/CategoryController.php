<?php

namespace App\Http\Controllers;

use App\Model\Category;
use App\Service\Api\CategoryService;
use Illuminate\Http\Request;
use App\Validates\CategoryValidate;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected $categoryService;
    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService=$categoryService;
    }
    public function index()
    {
        //
        return $this->categoryService->index();
    }

    public function create()
    {
        //
    }
    public function store(CategoryValidate $request)
    {
        //
        return $this->categoryService->store($request);
    }
    public function show(Category $category)
    {
        //
    }
    public function edit(Category $category)
    {
        //
        
    }
    public function update(CategoryValidate $request, $category)
    {
        //
        return $this->categoryService->update($request,$category);
    }

    public function destroy($category)
    {
        //
        return $this->categoryService->destroy($category);
    }
}
