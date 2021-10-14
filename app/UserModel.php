<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
class UserModel extends Model
{
    use Notifiable;
    //
    public $timestamps = false; //set time to false
    protected $guarded=[];
    //có thể insert vào
    protected $primaryKey = 'id';
 	protected $table = 'user';

    public function product()
 	{
        return $this->belongsToMany('App\Product','App\Cart','user_id','product_id');
 	}
}
