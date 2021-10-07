<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
class UserModel extends Model
{
    use Notifiable,HasApiTokens;
    //
    public $timestamps = false; //set time to false
    //có thể insert vào
    protected $primaryKey = 'id';
 	protected $table = 'user';
}
