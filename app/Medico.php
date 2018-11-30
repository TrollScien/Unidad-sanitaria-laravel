<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Medico extends Model
{
    public $additional_attributes = ['full_name'];

    public function getFullNameAttribute()
    {
        return "{$this->doc} {$this->nombre_medico}";
    }
}
