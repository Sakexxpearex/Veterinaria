<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
    Schema::create('tratamientos', function (Blueprint $table) {
        $table->id();

        $table->foreignId('mascota_id')->constrained()->onDelete('cascade');
        $table->foreignId('consulta_id')->nullable()->constrained()->onDelete('cascade');
        $table->foreignId('cirugia_id')->nullable()->constrained()->onDelete('cascade');

        $table->string('medicamento');
        $table->string('dosis')->nullable();
        $table->string('frecuencia')->nullable();
        $table->string('duracion')->nullable();
        $table->text('indicaciones')->nullable();

        $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tratamientos');
    }
};
