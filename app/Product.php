<?php

namespace App;

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
        return $this->belongsTo('App\Brands','brand_id','id');
    }

    public function category(){
        return $this->belongsTo('App\Category','category_id','id');
    }
}
