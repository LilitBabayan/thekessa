<?php

namespace App\Http\Controllers;

use App\Contracts\ProductsInterface;
use App\Models\Product;
use App\Models\Rating;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * @var ProductsInterface
     */
    protected ProductsInterface $productsRepository;

    /**
     * @param ProductsInterface $productsRepository
     */
    public function __construct(ProductsInterface $productsRepository)
    {
        $this->productsRepository = $productsRepository;
    }

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $products = $this->productsRepository->getAll();
        return response()->json([
            'products' => $products
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function getProduct($id): JsonResponse
    {
        if (is_numeric($id)) {
            $product = $this->productsRepository->getById($id);

            if ($product) {
                return response()->json([
                    'product' => $product
                ]);
            }
            return response()->json([
                "message" => 'Something went wrong',
            ], 404);
        }
        return response()->json([
            "error" => 'Not Found',
        ], 422);

    }

    /**
     * @param $id
     * @param Request $request
     * @return JsonResponse
     */
    public function rateProduct($id, Request $request)
    {
        if (is_numeric($id)) {
            $product = $this->productsRepository->getById($id);
            if ($product) {
                $product->ratings()->updateOrCreate(
                    ['user_id' => auth()->id(),],
                    ['rate' => $request->rate]
                );
                return response()->json([
                    'success' => true
                ]);

            }
            return response()->json([
                "message" => 'Something went wrong',
            ], 404);
        }
        return response()->json([
            "error" => 'Not Found',
        ], 422);

    }
}
