<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mascota extends Model
{
    protected $fillable = [
        'propietario_id',
        'nombre',
        'especie',
        'raza',
        'edad',
    ];

    public function Propietario()
    {
        return $this->belongsTo(Propietario::class);
    }

    public function Reservacion()
    {
        return $this->hasMany(Reservacion::class);
    }
}
