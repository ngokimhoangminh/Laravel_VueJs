<?php

namespace App\Repositories;
use Illuminate\Http\Request;
use App\Model\Category;

class CategoryRepository
{
    protected $category;

    public function __construct(Category $category)
    {
        $this->category = $category;
    }
    public function index($per_page)
    { 
        return $this->category::orderBy('id','desc')->paginate($per_page);
    }
    public function getAll()
    { 
        return $this->category::orderBy('id','desc')->get();
    }
    public function create()
    {
        //
    }

    public function store($data)
    {
        return $this->category::create($data);
    }


    public function edit($category)
    {
        //
    }

    public function update($data, $category)
    {
        //
        return $this->category::find($category)->update($data);
    }

    public function findByID($id)
    {
        return $this->category::find($id);
    }

    
    public function destroy($category)
    {
        return $this->category::find($category)->delete();
    }

}
