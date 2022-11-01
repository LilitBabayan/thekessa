<?php

namespace App\Http\Controllers;

use App\Contracts\ProductsInterface;
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
        $product = $this->productsRepository->getById($id);
        return response()->json([
            'product' => $product
        ]);
    }
}
