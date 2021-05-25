<?php

use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

Route::get('/', [TestController::class, ['index']]);

Route::any('{slug}', function () {
    return view('welcome');
});
