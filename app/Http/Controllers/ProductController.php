<?php

namespace App\Http\Controllers;

use App\Contracts\ProductsInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * @var
     */
    protected $productsRepository;

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
    public function index()
    {
        $products = $this->productsRepository->getAll();
        return response()->json([
            'products' => $products
        ]);
    }
}
