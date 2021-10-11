<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //
    public $timestamps = false; //set time to false
    //có thể insert vào
    protected $fillable = ['name','image'];
    protected $primaryKey = 'id';
 	protected $table = 'categories';

    public function product(){
        return $this->hasMany('App\Product');
    }
    public function nhieuthuonghieu(){
        return $this->belongsToMany('App\Model\Brands','App\Product','category_id','brand_id');
    }
}
