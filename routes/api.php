<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api'], function () {
    
    Route::group(['prefix' => 'auth'], function () {
        Route::post('register','AuthController@register');
        Route::post('login','AuthController@login');
        Route::post('reset-password-request','AuthController@resetPasswordRequest');
        Route::post('reset-password','AuthController@resetPassword');
    
        Route::group(['middleware' => 'auth:api'], function () {
            Route::get('logout','AuthController@logout');
            Route::get('profile','AuthController@profile');
        });
    });
    
    // Route::group(['middleware' => 'is_admin'], function () {
        
    // });
    
    Route::group(['prefix' => 'category'], function () {
        Route::resource('categories','CategoryController');
    });

    Route::resource('customers','CustomerController');

    Route::group(['prefix' => 'brand'], function () {
        Route::resource('brands','BrandsController');
        Route::post('unactive','BrandsController@unactive')->name('brand.unactive');
        Route::post('active','BrandsController@active')->name('brand.active');
    });
    Route::group(['prefix' => 'categoryBlog'], function () {
        Route::resource('categoryBlog','CategoryBlogController');
    });
    Route::group(['prefix' => 'product'], function () {
        Route::resource('products','ProductController');
        Route::post('unactive','ProductController@unactive')->name('product.unactive');
        Route::post('active','ProductController@active')->name('product.active');
    }); 
     
    Route::group(['prefix' => 'home'], function () {
        Route::get('products','HomeController@getProducts');
    });

    Route::group(['prefix' => 'user'], function () {
        Route::post('signup','UserController@signup');
        Route::post('login','UserController@login');
    });  

});






