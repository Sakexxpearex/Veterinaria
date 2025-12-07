<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tratamiento extends Model
{
    protected $fillable = [
        'mascota_id',
        'consulta_id',
        'cirugia_id',
        'medicamento',
        'dosis',
        'frecuencia',
        'duracion',
        'indicaciones'
    ];

    public function mascota()
    {
        return $this->belongsTo(Mascota::class);
    }

    public function consulta()
    {
        return $this->belongsTo(Consulta::class);
    }

    public function cirugia()
    {
        return $this->belongsTo(Cirugia::class);
    }
}
