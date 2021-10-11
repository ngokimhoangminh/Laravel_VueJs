<?php

use Illuminate\Database\Seeder;
use App\User;
class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'name' =>'HoangMinh',
            'email' => 'hoangminhcp10@gmail.com',
            'password' => bcrypt('123456'),
            'role' => 'administrator'
        ]);
    }
}
