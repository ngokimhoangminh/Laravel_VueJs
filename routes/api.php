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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

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
Route::resource('customers','CustomerController');

Route::group(['prefix' => 'category'], function () {
    Route::resource('categories','CategoryController');
});
Route::group(['prefix' => 'brand'], function () {
    Route::resource('brands','BrandsController');
    Route::post('unactive','BrandsController@unactive')->name('brand.unactive');
    Route::post('active','BrandsController@active')->name('brand.active');
});
Route::group(['prefix' => 'categoryBlog'], function () {
    Route::resource('categoryBlog','CategoryBlogController');
});
Route::group(['prefix' => 'product'], function () {
    Route::get('get-categires','ProductController@categories')->name('product.get-categires.list');
    Route::get('get-brands','ProductController@brands')->name('product.get-brands.list');
    Route::resource('products','ProductController');
    Route::post('unactive','ProductController@unactive')->name('product.unactive');
    Route::post('active','ProductController@active')->name('product.active');
    Route::post('filter','ProductController@filter')->name('product.filter');
}); 
 
Route::group(['prefix' => 'user'], function () {
    Route::post('signup','UserController@signup');
    Route::post('login','UserController@login');
});




