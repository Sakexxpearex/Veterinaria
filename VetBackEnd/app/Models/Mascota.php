<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mascota extends Model
{
    protected $fillable = [
        'propietario_id', 'nombre', 'especie', 'raza', 'sexo', 'edad', 'peso'
    ];

    public function propietario()
    {
        return $this->belongsTo(Propietario::class);
    }

    public function reservaciones()
    {
        return $this->hasMany(Reservacion::class);
    }

    public function consultas()
    {
        return $this->hasMany(Consulta::class);
    }

    public function cirugias()
    {
        return $this->hasMany(Cirugia::class);
    }

    public function tratamientos()
    {
        return $this->hasMany(Tratamiento::class);
    }
}
