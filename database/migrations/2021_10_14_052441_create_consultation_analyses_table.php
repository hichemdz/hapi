<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultationAnalysesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consultation_analyses', function (Blueprint $table) {
            $table->foreignId('analysis_id')->constrained();
            $table->foreignId('consultation_id')->constrained();
            $table->primary('analysis_id','consultation_id');
            $table->text('conclusion')->nullable();
            $table->boolean('stutus')->default(true);
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
        Schema::dropIfExists('consultation_analyses');
    }
}
