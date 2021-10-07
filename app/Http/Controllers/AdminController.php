<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use App\Http\Requests;
use Illuminate\Support\Facades\Redirect;
session_start();
class AdminController extends Controller
{
    //
    public function check_login()
    {
    	$admin_id=Session::get('admin_id');
    	if($admin_id)
    	{
    		return Redirect::to('/dashboard');
    	}else
    	{
    		return Redirect::to('/showlogin')->send();
    	}
    }
    public function index()
    {
        $this->check_login();
    	return view('admin.welcome');
    }
    public function login(Request $request)
    {
    	$admin_email=$request->admin_email;
    	$admin_password=md5($request->admin_password);
    	$result=DB::table('users')->where('email',$admin_email)->where('password',$admin_password)->first();
    	if($result)
    	{
    		Session::put('admin_name',$result->name);
    		Session::put('admin_id',$result->id);
    		return Redirect::to('/dashboard');
    	}else
    	{
    		Session::put('message','Tên đăng nhập hoặc mật khẩu bị sai');
            return Redirect::to('/showlogin');
    	}
    }
}
