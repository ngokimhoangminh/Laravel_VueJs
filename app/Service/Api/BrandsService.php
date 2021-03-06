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
        try {
            $this->brandsRepository->update($request->validated(),$brand);
            return response()->json($brand,200);
        } catch (\Throwable $th) {
            \Log::error($th);
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
        try {
            $product=$this->productRepository->findByBrandID($brand);
            if(!empty($product))
            {
                foreach($product as $products)
                {
                    $this->productRepository->delete($products);
                    Storage::disk('public')->delete($products->image);
                }
            }
            $this->brandsRepository->destroy($brand);
            return response()-> json([
                'message'=>'???? x??a th????ng hi???u th??nh c??ng !!!',
                'status_code'=>200
            ],200);
        } catch (\Throwable $th) {
            \Log::error($th);
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
                'message'=>'???? chuy???n sang tr???ng th??i "???n" th??nh c??ng !!!',
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
                'message'=>'???? chuy???n sang tr???ng th??i "Hi???n Th???" th??nh c??ng !!!',
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
