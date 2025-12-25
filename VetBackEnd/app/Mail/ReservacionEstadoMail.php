<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Bus\Queueable;

class ReservacionEstadoMail extends Mailable
{
    use Queueable, SerializesModels;

    public $reservacion;
    public $estado;

    public function __construct($reservacion, $estado)
    {
        $this->reservacion = $reservacion;
        $this->estado = $estado;
    }

    public function build()
    {
        return $this
            ->subject('Estado de su reservación')
            ->view('emails.reservacion_estado');
    }
}
