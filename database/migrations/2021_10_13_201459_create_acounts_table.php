<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAcountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('acounts', function (Blueprint $table) {
            $table->foreignId('id')->constrained('hospitals');
            $table->primary('id');
            $table->foreignId('id_type')->constrained('acounttypes');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('address');
            $table->enum('gender',['male','female']);
            $table->string('email')->unique();
            $table->string('password');
            $table->string('photo')->nullable();
            $table->string('bio')->nullable();
            $table->date('birthday')->nullable();
            $table->boolean('is_login')->default(false);
            $table->boolean('is_active')->default(true);
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
        Schema::dropIfExists('acounts');
    }
}
