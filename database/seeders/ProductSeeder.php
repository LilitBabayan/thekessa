<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dataForInsert = [];

        $products = [
            ['name' => 'The Kessa scrub', 'price' => '10000'],
            ['name' => 'The Kessa scrub combo', 'price' => '12000'],
        ];

        foreach ($products as $product) {
            $data = [
                'name' => $product['name'],
                'price' => $product['price'],
                'created_at' => now(),
                'updated_at' => now(),
            ];
            $dataForInsert[] = $data;
        }
        Product::insert($dataForInsert);

    }
}
