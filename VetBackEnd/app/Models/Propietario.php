<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Propietario extends Model
{
    protected $fillable = ['nombre', 'email', 'telefono'];

    public function mascotas()
    {
        return $this->hasMany(Mascota::class);
    }

    public function reservaciones()
    {
        return $this->hasMany(Reservacion::class);
    }
}

