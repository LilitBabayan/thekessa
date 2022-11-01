<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = [
        'name',
        'price',
        'consistency',
        'description'
    ];

    /**
     * @var string
     */
    protected $table = 'products';

    /**
     * @return HasMany
     */
    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
