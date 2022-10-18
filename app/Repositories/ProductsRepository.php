<?php

namespace App\Repositories;

use App\Contracts\ProductsInterface;
use App\Models\Product;

class ProductsRepository implements ProductsInterface
{

    /**
     * @var Product
     */
    protected $model;

    /**
     * @param Product $model
     */
    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|mixed
     */
    public function getAll()
    {
        return $this->model->with('images')->get();
    }

}
