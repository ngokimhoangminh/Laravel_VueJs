<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;
use phpDocumentor\Reflection\Types\Boolean;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    //
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register','resetPasswordRequest','resetPassword']]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name'=>'required|string|max:255',
            'email'=>'required|string|email',
            'password'=>'required|string|confirmed'
        ]);

        $user=new User();
        $user->name=$request->name;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        //$user->role="customer";
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

        $credentials=$request->validate([
            'email'=>'required|string|email',
            'password'=>'required|string',
    	],[
    		'email.required' => 'Email không được để trống',
    		'email.email'=> 'Email không đúng định dạng',
    		'password.required' => 'Password không đúng định dạng'
    	]);
        if(!Auth::attempt($credentials))
        {
            return response()->json([
                'message'=>'Invalid user/password',
                'status_code'=>401
            ],401);
        }
        $authenticated_user =Auth::user();
        $user = User::find($authenticated_user->id);
        return response()->json([
            'user'=>$user,
            'access_token'=>$user->createToken($request->email),
            'token_type'=>'Bearer',
            'role'=>$user->role,
            //'token_scope'=>$tokenData->token->scopes[0],
            //'expires_at'=>Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
            'status_code'=>200
        ],200);
        // if($user->role="adminstrator")
        // {
        //     $tokenData = $user->createToken('Personal Access Tokens', ['adminstrator']);
        // }else
        // {
        //     $tokenData = $user->createToken('Personal Access Tokens', ['manager']);
        // }
        //$token=$tokenData->token;
        // if($request->remember_me)
        // {
        //     $token->expires_at=Carbon::now()->addWeeks(1);
        // }
        // if($token->save())
        // {
           
        // }else
        // {
        //     return response()->json([
        //         'message'=>'Some error occured, plese try again',
        //         'status_code'=>500
        //     ],500);
        // }
    }
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        //$request->user()->currentAccessToken()->delete();
        return response()->json([
            'message'=>'Logout succesfully!!',
            'status_code'=>200
        ],200);
    }
    public function profile(Request $request)
    {
       if($request->user())
       {
           return response()->json($request->user(),200);
       }
        return response()->json([
            'message'=>'Not loggedin!',
            'status_code'=>200
        ],200);
    }
    public function resetPasswordRequest(Request $request)
    {
        $request->validate([
            'email'=>'required|email',  
        ]);
        $user=User::where('email',$request->email)->first();
        //dd($user);
        if(!$user)
        {
            // return response()->json([
            //     'message'=>'We have sent a verifitication code to your email address',
            //     'status_code'=>200
            // ],200);
            return response()->json([
                'message'=>'User not find',
                'status_code'=>500
            ],500);
        }else
        {
            $random=rand(111111,999999);
            $user->verification_code=$random;
            if($user->save())
            {
                $userData=array(
                    'email'=>$user->email,
                    'full_name'=>$user->name,
                    'random'=>$random
                );
                //$userData chứa full_name và random nên bên page reset_password có thể gọi đến fullname và random
                Mail::send('emails.reset_password',$userData, function ($message) use($userData){
                    $message->from('hoangminhcp10@gmail.com','Password Request');
                    $message->to($userData['email'], $userData['full_name']);
                    $message->subject('Reset Password Request (Laravel Vue)');
                });
                if(Mail::failures())
                {
                    return response()->json([
                        'message'=>'Some error occured, plese try again',
                        'status_code'=>500
                    ],500);
                }else
                {
                    return response()->json([
                        'message'=>'We have sent a verifitication code to your email address',
                        'status_code'=>200
                    ],200);
                }
            }else
            {
                return response()->json([
                    'message'=>'Some error occured, plese try again',
                    'status_code'=>500
                ],500);
            }
        }
    }
    public function resetPassword(Request $request)
    {
        $request->validate([
            'email'=>'required|email',  
            'verification_code'=>'required|integer',
            //'password'=>'required|confirmed|min:6',
        ]);
        $user=User::where('email',$request->email)->where('verification_code',$request->verification_code)->first();
        if(!$user)
        {
            return response()->json([
                'message'=>'User not found/invalid code',
                'status_code'=>401
            ],401);
        }else
        {
            $user->password=bcrypt(trim($request->password));
            $user->verification_code=Null;
            if($user->save())
            {
                
                return response()->json([
                    'message'=>'Password update succesfully',
                    'status_code'=>200
                ],200);
            }else
            {
                return response()->json([
                    'message'=>'Some error occured, plese try again',
                    'status_code'=>500
                ],500);
            }
        }
    }
}
