<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Propietario extends Model
{
    protected $fillable = [
        'nombre',
        'email',
        'telefono',
    ];

     public function Mascotas()
    {
        return $this->hasMany(Mascota::class);
    }
}
