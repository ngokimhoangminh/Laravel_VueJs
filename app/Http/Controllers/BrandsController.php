<?php

namespace App\Http\Controllers;
use App\Service\Api\BrandsService;
use Illuminate\Http\Request;
use App\Validates\BrandValidate;

class BrandsController extends Controller
{
    //
    protected $brandService;
    public function __construct(BrandsService $brandService)
    {
        $this->brandService=$brandService;
    }
    public function index()
    {
        //
        return $this->brandService->index();
    }
    public function store(BrandValidate $request)
    {
        //
        return $this->brandService->store($request);
    }
    public function update(BrandValidate $request, $brand)
    {
        //
        return $this->brandService->update($request,$brand);
    }
    public function destroy($brand)
    {
        //
        return $this->brandService->destroy($brand);
    }
    public function unactive(Request $request)
    {
        return $this->brandService->unactive($request);
    }
    public function active(Request $request)
    {
        return $this->brandService->active($request);
    }
}
