<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Trabajadore extends Model
{

    protected $primaryKey = 'cedula';

    public $incrementing = false;

    public $additional_attributes = ['full_name'];

    public function getFullNameAttribute()
    {
        return "{$this->cedula} {$this->nombre}";
    }
}
