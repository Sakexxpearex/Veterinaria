<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Propietario extends Model
{
    protected $fillable = ['nombre', 'email', 'telefono'];

    public function mascota()
    {
        return $this->hasMany(Mascota::class);
    }

    public function reservacion()
    {
        return $this->hasMany(Reservacion::class);
    }
}

