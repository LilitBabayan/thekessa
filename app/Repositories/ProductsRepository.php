<?php

namespace App\Repositories;

use App\Contracts\ProductsInterface;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

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
        return $this->model->with(['images'])
            ->withCount(['ratings as avgrating' => function ($query) {
                $query->select(DB::raw('avg(rate)'));
            },])
            ->withCount('ratings')
            ->get();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function getById($id)
    {
        return $this->model->where('id', $id)->with(['images'])
            ->withCount(['ratings as avgrating' => function ($query) {
                $query->select(DB::raw('avg(rate)'));
            },])
            ->withCount('ratings')->first();
    }

}
