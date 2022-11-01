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
        $products = Product::all();
        foreach ($products as $product) {
            for ($a = 1; $a <= 4; $a++) {
                $data = [
                    'product_id' => $product['id'],
                    'url' => '/images/products/' . Str::slug($product['name'] . ' ' . $a) . '.png',
                    'created_at' => now(),
                    'updated_at' => now(),
                ];

                $product->images()->insert($data);
            }

        }
    }

}
