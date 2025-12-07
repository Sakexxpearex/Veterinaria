<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cirugia extends Model
{
    protected $fillable = [
        'mascota_id', 'fecha', 'tipo', 'descripcion', 'complicaciones'
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
