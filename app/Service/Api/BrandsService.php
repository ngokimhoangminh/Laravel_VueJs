<?php

namespace App\Service\Api;
use Illuminate\Http\Request;
use App\Repositories\BrandsRepository;
use App\Repositories\ProductRepository;
use Illuminate\Support\Facades\Storage;
use App\Model\Brands;

class BrandsService
{
    protected $brandsRepository;
    protected $productRepository;
    public function __construct(BrandsRepository $brandsRepository,ProductRepository $productRepository)
    {
        $this->brandsRepository = $brandsRepository;
        $this->productRepository = $productRepository;
    }
    public function index()
    {
        //
        $brands=$this->brandsRepository->index();
        $brands_data=$this->brandsRepository->getAll();
        return response()
        ->json([
            'data' => $brands,
            'data_total'=>$brands_data
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

    public function store($request)
    {
        $brand=$this->brandsRepository->store($request->validated());
        if($brand)
        {
            return response()->json($brand,200);
        }else{
            return response()->json([
                'message'=>'Some error occured, plese try again',
                'status_code'=>500
            ],500);
        }
    }

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

    public function update($request, $brand)
    {
        //
        $brand=$this->brandsRepository->update($request->validated(),$brand);
        if($brand)
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
        $product=$this->productRepository->findByBrandID($brand);
        if(!empty($product))
        {
            foreach($product as $products)
            {
                $this->productRepository->delete($products);
                Storage::disk('public')->delete($products->image);
            }
        }
        $result=$this->brandsRepository->destroy($brand);
        if($result)
        {
            return response()-> json([
                'message'=>'Đã xóa thương hiệu thành công !!!',
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
        $brand=$this->brandsRepository->unactive($request->brand_id);
        if($brand)
        {
            return response()-> json([
                'message'=>'Đã chuyển sang trạng thái "Ẩn" thành công !!!',
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
        $brand=$this->brandsRepository->active($request->brand_id);
        if($brand)
        {
            return response()-> json([
                'message'=>'Đã chuyển sang trạng thái "Hiển Thị" thành công !!!',
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
