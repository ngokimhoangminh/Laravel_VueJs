<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admins', function () {
    return view('admin.welcome');
});

// Route::get('/{any}', function () {
//     return view('client.dashboard');
// })->where('any','.*');

Route::get('/', function () {
    return view('client.dashboard');
    
});



// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
