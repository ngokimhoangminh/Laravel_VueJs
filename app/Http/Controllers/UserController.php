<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UserModel;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    public function signup(Request $request)
    {
        $request->validate([
            'fullname'=>'required|string|max:255',
            'name'=>'required|string|max:255',
            'email'=>'required|string|email',
            'phone'=>'required|string',
            'password'=>'required|string|min:6',
            'gender'=>'required|string'
        ]);
        $user=new UserModel();
        $user->fullname=$request->fullname;
        $user->username=$request->name;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        $user->gender=$request->gender;
        $user->birthday=$request->birthday;
        if($user->save())
        {
            return response()->json([
                'message'=>'User created succesfully!',
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
    public function login(Request $request)
    {
        $request->validate([
            'username'=>'required|string',
            'password'=>'required|string', 
        ]);
        
        //cách của mình
        $userss=UserModel::where('username',$request->username)->first();
        if(!$userss || ! Hash::check($request->password,$userss->password))
        {
            return response()->json([
                         'message'=>'Some error occured, plese try again',
                         'status_code'=>500
                     ],500);
        }
        else
        {
            return response()->json([
                'message'=>'Login successfully',
                'user'=>$userss,
                'access_token'=>$userss->createToken($request->username),
                'token_type'=>'Bearer',
                'status'=>200
            ],200);
        }




        
    }
    // public function logout(Request $request)
    // {
    //     $request->user()->token()->revoke();
    //     //$request->user()->currentAccessToken()->delete();
    //     return response()->json([
    //         'message'=>'Logout succesfully!!',
    //         'status_code'=>200
    //     ],200);
    // }
}
