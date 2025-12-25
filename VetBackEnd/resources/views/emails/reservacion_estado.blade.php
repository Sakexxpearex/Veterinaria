<p>Hola {{ $reservacion->propietario->nombre }},</p>

<p>
Su reservación para <strong>{{ $reservacion->mascota->nombre }}</strong>
con fecha <strong>{{ $reservacion->fecha }}</strong> ha sido
<strong>{{ $estado }}</strong>.
</p>

<p>Saludos,<br>Veterinaria App</p>
