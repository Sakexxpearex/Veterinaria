<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
public function up()
{
    Schema::create('reservaciones', function (Blueprint $table) {
        $table->id();

        $table->unsignedBigInteger('mascota_id');
        $table->unsignedBigInteger('propietario_id');

        $table->dateTime('fecha');           // fecha y hora de la reserva
        $table->string('motivo');            // motivo de la consulta
        $table->string('estado')->default('pendiente'); // pendiente, completado, cancelado

        $table->timestamps();

        // Relaciones
        $table->foreign('mascota_id')->references('id')->on('mascotas')->onDelete('cascade');
        $table->foreign('propietario_id')->references('id')->on('propietarios')->onDelete('cascade');
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservaciones');
    }
};
