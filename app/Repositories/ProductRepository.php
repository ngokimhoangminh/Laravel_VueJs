<?php

namespace App\Repositories;
use Illuminate\Http\Request;
use App\Product;

class ProductRepository
{
    protected $products;

    public function __construct(Product $products)
    {
        $this->products = $products;
    }
    public function findByBrandID($id)
    {
        return $this->products::where('brand_id',$id)->get();
    }
    public function findByCategoryID($id)
    {
        return $this->products::where('category_id',$id)->get();
    }
    public function delete($product)
    {
        return $product->delete();
    }

}
