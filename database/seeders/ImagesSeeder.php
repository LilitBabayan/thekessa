<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dataForInsert = [];

        $products = Product::all();
        foreach ($products as $product) {
            $data = [
                'product_id' => $product['id'],
                'path' => Str::slug($product['name']) . '.png',
                'created_at' => now(),
                'updated_at' => now(),
            ];
            $dataForInsert[] = $data;
        }
        Image::insert($dataForInsert);
    }

}
