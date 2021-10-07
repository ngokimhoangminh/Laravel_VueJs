<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Customer;
use App\Http\Resources\CustomerResource;
use App\Service\Api\CustomerService;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
class CustomerController extends Controller
{
    protected $customerService;
    public function __construct(CustomerService $customerService)
    {
        $this->customerService=$customerService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return $this->customerService->index();
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
        $customer=new Customer;
        $customer->name_customer=$request->name_customer;
        $customer->phone_customer=$request->phone_customer;
        $customer->address_customer=$request->address_customer;
        $customer->email_customer=$request->email_customer;
        $customer->city_customer=$request->city_customer;
        if($request->image_customer)
        {
            $image=$request->image_customer;
            $extension=$image->getClientOriginalExtension();
            $name=time().'_'.$image->getClientOriginalName();
            Storage::disk('public')->put($name,File::get($image));
            $customer->image_customer=$name;
        }else{  
            $customer->image_customer="default.png";
        }
        $customer->save();
        //return $this->customerService->store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        //
        return $this->customerService->show($customer);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $customer)
    {
        //
        //return $this->customerService->update($request,$customer);
        $customer=Customer::find($customer);
        $customer->name_customer=$request->name_customer;
        $customer->phone_customer=$request->phone_customer;
        $customer->address_customer=$request->address_customer;
        $customer->email_customer=$request->email_customer;
        $customer->city_customer=$request->city_customer;
        
        $oldPath=$customer->image_customer;
        if($request->image_customer)
        {
            $image=$request->image_customer;
            $extension=$image->getClientOriginalExtension();
            $name=time().'_'.$image->getClientOriginalName();
            Storage::disk('public')->put($name,File::get($image));
            $customer->image_customer=$name;
            Storage::disk('public')->delete($oldPath);
        }
        $customer->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($customer)
    {
        //
        return $this->customerService->destroy($customer);
    }
}
