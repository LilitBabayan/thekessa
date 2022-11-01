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
            [
                'name' => 'The Kessa scrub',
                'price' => '10000',
                'consistency' => 'Body glove,quartz',
                'description' => 'Handmade from silk, the Kessa glove has been crafted using a specific technique perfected over centuries.
The unique weave of the silks works to effortlessly sweep away dead skin and impurities by deeply exfoliating the body.
This natural skincare remedy aims to tackle dry skin, the removal of fake tan, blackheads, stretch marks and scarring.'
            ],
            [
                'name' => 'The Kessa scrub combo',
                'price' => '12000',
                'consistency' => 'Gloves,Roze quartz,scrub',
                'description' => 'Handmade from silk, the Kessa glove has been crafted using a specific technique perfected over centuries.
The unique weave of the silks works to effortlessly sweep away dead skin and impurities by deeply exfoliating the body.
This natural skincare remedy aims to tackle dry skin, the removal of fake tan, blackheads, stretch marks and scarring.'
            ],
        ];

        foreach ($products as $product) {
            $data = [
                'name' => $product['name'],
                'price' => $product['price'],
                'consistency' => $product['consistency'],
                'description' => $product['description'],
                'created_at' => now(),
                'updated_at' => now(),
            ];
            $dataForInsert[] = $data;
        }
        Product::insert($dataForInsert);

    }
}
