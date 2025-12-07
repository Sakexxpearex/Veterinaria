<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Consulta extends Model
{
    protected $fillable = [
        'mascota_id', 'fecha', 'motivo', 'diagnostico', 'observaciones'
    ];

    public function mascota()
    {
        return $this->belongsTo(Mascota::class);
    }

    public function tratamientos()
    {
        return $this->hasMany(Tratamiento::class);
    }
}
