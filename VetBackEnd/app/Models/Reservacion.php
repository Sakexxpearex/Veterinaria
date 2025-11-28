<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservacion extends Model
{
    protected $fillable = [
        'mascota_id',
        'propietario_id',
        'fecha',
        'motivo',
        'estado'
    ];
    public function Mascota()
    {
        return $this->belongsTo(Mascota::class);
    }

    public function Propietario()
    {
        return $this->belongsTo(Propietario::class);
    }
}
