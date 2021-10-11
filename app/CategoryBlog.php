<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CategoryBlog extends Model
{
    //
    public $timestamps = false; //set time to false
    //có thể insert vào
    protected $guarded=[];//cho bk không bảo vệ cái nào hết
    protected $primaryKey = 'id';
 	protected $table = 'category_blogs';
}
