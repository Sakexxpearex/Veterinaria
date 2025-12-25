<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservacion extends Model
{

    protected $table = 'reservaciones';
    protected $fillable = [
        'mascota_id',
        'propietario_id',
        'fecha',
        'motivo',
        'estado'
    ];
    public function mascota()
    {
        return $this->belongsTo(Mascota::class);
    }

    public function propietario()
    {
        return $this->belongsTo(Propietario::class);
    }
}
