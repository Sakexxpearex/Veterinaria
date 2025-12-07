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
    Schema::create('cirugias', function (Blueprint $table) {
        $table->id();

        $table->foreignId('mascota_id')->constrained()->onDelete('cascade');

        $table->date('fecha');
        $table->string('tipo');
        $table->text('descripcion')->nullable();
        $table->text('complicaciones')->nullable();

        $table->timestamps();
});

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cirugias');
    }
};
