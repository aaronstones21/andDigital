<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable= [
        'name',
        'file_path',
        'gender',
        'description',
        'quantity',
        'cost'
    ];
    use HasFactory;
}
