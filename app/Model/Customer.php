<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    //
    public $timestamps = false; //set time to false
    //có thể insert vào
    protected $fillable = ['name_customer', 'phone_customer','address_customer','email_customer','city_customer','image_customer'];
    protected $primaryKey = 'id_customer';
 	protected $table = 'customer';
}
