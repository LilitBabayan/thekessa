<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\JsonResponse;

class AdminController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function users(Request $request): JsonResponse
    {
        try {
            $users = User::select('id', 'first_name', 'last_name', 'email', 'is_admin')->skip($request->skip)->take(15)->get();
            $count = User::count();
            return response()->json([
                'users' => $users,
                'count' => $count
            ]);
        } catch (Exception $exception) {
            Log::error($exception);
            return response()->json([
                "success" => false,
            ]);

        }
    }
}
