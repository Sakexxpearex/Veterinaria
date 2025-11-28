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
    Schema::create('mascotas', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('propietario_id');
        $table->string('nombre');
        $table->string('especie'); // perro, gato, etc.
        $table->string('raza')->nullable();
        $table->integer('edad')->nullable();
        $table->timestamps();

        // Relación con owners
        $table->foreign('propietario_id')->references('id')->on('propietarios')->onDelete('cascade');
    });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mascotas');
    }
};
