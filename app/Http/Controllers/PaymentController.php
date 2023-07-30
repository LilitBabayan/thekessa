<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PaymentController extends Controller
{
    public function success(Request $request)
    {
        Log::info('success', [$request->all()]);
    }

    public function fail(Request $request)
    {
        Log::info('fail', [$request->all()]);
    }

    public function getResult(Request $request)
    {
        Log::info('result', [$request->all()]);
    }
}
