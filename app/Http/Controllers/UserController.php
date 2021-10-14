<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UserModel;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function registerRequest()
    {
        $pattern = [
            'fullname'=>'required|unique:user|string|min:6|max:255',
            'username'=>'required|unique:user|string|min:3|max:255',
            'email'=>'required|unique:user|string|email',
            'password'=>'required|string|min:6',
            'gender'=>'required|string',
            'phone'=>'required|string',
            'birthday'=>'required'
        ];
        return $pattern;
    }
    public function signup(Request $request)
    {
        
        $data=$request->validate($this->registerRequest());
        $birthday=strstr($request->birthday,"T");
        $birthdays=str_replace($birthday,'',$request->birthday);
        
        $data['password']=Hash::make($request->password);
        $data['birthday']=$birthdays;
        
        $user=UserModel::create($data);
        if($user)
        {
            return response()->json([
                'message'=>'Đăng ký tài khoản thành công!',
                'status_code'=>201
            ],201);
        }else
        {
            return response()->json([
                'message'=>'Some error occured, plese try again',
                'status_code'=>500
            ],500);
        }
    }

    public function loginRequest()
    {
        $pattern = [
            'username'=>'required|string',
            'password'=>'required|string',
        ];
        return $pattern;
    }

    public function login(Request $request)
    {
        $data=$request->validate($this->loginRequest());
        $users=UserModel::where('username',$request->username)->first();
        if(!$users || ! Hash::check($request->password,$users->password))
        {
            return response()->json([
                'message'=>'Tên đăng nhập hoặc mật khẩu không đúng',
                'status_code'=>500
            ],500);
        }
        else
        {
            return response()->json([
                'message'=>'Login successfully',
                'user'=>$users,
                'status'=>200
            ],200);
        }   
    }
}
