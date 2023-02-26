<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe;


class OrderController extends Controller
{
    public function createOrder(Request $request)
    {
        Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $charge = Stripe\Charge::create([
            "amount" => $request->totalAmount * 100,
            "currency" => "usd",
            "source" => $request->stripeToken,
            "description" => "Making test payment."
        ]);
        dd($charge->id);
    }
}
