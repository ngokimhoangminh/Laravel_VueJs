<?php

namespace App;
use App\UserModel;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    public $timestamps = false; //set time to false
    //có thể insert vào
    protected $fillable = ['category_id','brand_id','name','image','product_des','product_status'];
    protected $primaryKey = 'id';
 	protected $table = 'products';

    public function brands(){
        return $this->belongsTo('App\Model\Brands','brand_id','id');
    }

    public function category(){
        return $this->belongsTo('App\Model\Category','category_id','id');
    }

    public function customer()
 	{
        return $this->belongsToMany('App\UserModel','App\Cart','product_id','user_id');
 	}
}
