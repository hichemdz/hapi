<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultaionSurgeriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultaion_surgeries', function (Blueprint $table) {
            $table->foreignId('consultation_id')->constrained();
            $table->foreignId('surgery_id')->constrained();
            $table->primary('consultation_id','surgery_id'); 
            $table->text('conclusion')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('consultaion_surgeries');
    }
}
