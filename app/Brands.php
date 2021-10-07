<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brands extends Model
{
    //
    public $timestamps = false; //set time to false
    //có thể insert vào
    protected $fillable = ['name', 'description','status'];//cho phép những thằng nào cập nhật
    protected $guarded=[];//cho bk không bảo vệ cái nào hết
    protected $primaryKey = 'id';
 	protected $table = 'brands';

    public function product(){
        return $this->hasMany('App\Product');
    }
    public function nhieudanhmuc(){
        return $this->belongsToMany('App\Category','App\Product','brand_id','category_id');
    }
}
