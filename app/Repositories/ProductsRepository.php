<?php

namespace App\Repositories;

use App\Contracts\ProductsInterface;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

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
     * @return Builder[]|Collection|mixed
     */
    public function getAll()
    {
        return $this->model->with('images')->get();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getById($id)
    {
        return $this->model->where('id', $id)->with('images')->first();
    }

}
