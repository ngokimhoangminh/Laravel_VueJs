<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    //
    public $timestamps = false; //set time to false
 
    protected $guarded=[];//cho bk không bảo vệ cái nào hết
    protected $primaryKey = 'id';
 	protected $table = 'carts';

}
