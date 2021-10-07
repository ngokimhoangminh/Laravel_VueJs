<?php

namespace App\Service\Api;

use Illuminate\Http\Request;
use App\Model\Customer;
use App\Http\Resources\CustomerResource;
class CustomerService
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $per_page=10;
        $customers=Customer::orderBy('id_customer','desc')->paginate($per_page);
        return response()->json($customers,200);
        //return CustomerResource::collection(Customer::orderBy('id_customer','desc')->paginate(10));
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
        //Customer::create($request->all());

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
        return new CustomerResource($customer);
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
    public function update($request, $customer)
    {
        //
        //$customer ở 1 mình là id
        // $customer = Customer::find($customer);
        // $customer->update($request->all());

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($customer)
    {
        //Nếu có Customer $customer thì nó đã là Customer::find($customer)
        $customer=Customer::find($customer);
        $customer->delete();
    }
}
