<?php

namespace App\Repositories;
use Illuminate\Http\Request;
use App\Model\Brands;

class BrandsRepository
{
    protected $brands;

    public function __construct(Brands $brands)
    {
        $this->brands = $brands;
    }
    public function index()
    { 
        $per_page=5;
        return $this->brands::orderBy('id','desc')->paginate($per_page);
    }

    public function create()
    {
        //
    }

    public function store($data)
    {
        return $this->brands::create($data);
    }


    public function show(Brands $customer)
    {
        //
    }

    public function edit($brand)
    {
        //
    }

    public function update($data, $brand)
    {
        //
        return $this->brands::find($brand)->update($data);
    }

    public function findByID($id)
    {
        return $this->brands::find($id);
    }

    
    public function destroy($brand)
    {
        return $this->brands::find($brand)->delete();
    }
    public function unactive($brand)
    {
        return $this->brands::where('id',$brand)->update(['status'=>0]);
    }
    public function active($brand)
    {
        return $this->brands::where('id',$brand)->update(['status'=>1]);
    }
}
