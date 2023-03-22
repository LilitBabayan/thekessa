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
                'price' => '9990',
                'consistency' => 'Body glove, Roze quartz, scrub',
                'description' => 'Handmade from silk, the Kessa glove has been crafted using a specific technique perfected over centuries.
The unique weave of the silks works to effortlessly sweep away dead skin and impurities by deeply exfoliating the body.
This natural skincare remedy aims to tackle dry skin, the removal of fake tan, blackheads, stretch marks and scarring.'
            ],
            [
                'name' => 'The Kessa scrub combo',
                'price' => '12990',
                'consistency' => 'Face and body gloves,Roze quartz,scrub',
                'description' => 'Handmade from silk, the Kessa glove has been crafted using a specific technique perfected over centuries.
The unique weave of the silks works to effortlessly sweep away dead skin and impurities by deeply exfoliating the body.
This natural skincare remedy aims to tackle dry skin, the removal of fake tan, blackheads, stretch marks and scarring.'
            ],
            [
                'name' => 'Bubble scrub',
                'price' => '4900',
                'consistency' => 'Bubble scrub',
                'description' => 'Scrub leaves skin looking brighter and feeling smoother, improves the effectiveness of skincare products by aiding absorption,
                prevents clogged pores, helps your skin stay clear and breakout-free, increases collagen production to promote skin elasticity.'
            ],
            [
                'name' => 'Watermelon scrub',
                'price' => '4900',
                'consistency' => 'Watermelon scrub',
                'description' => 'Scrub leaves skin looking brighter and feeling smoother, improves the effectiveness of skincare products by aiding absorption,
                prevents clogged pores, helps your skin stay clear and breakout-free, increases collagen production to promote skin elasticity.'
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
