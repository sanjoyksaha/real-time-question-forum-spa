<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = [];

    public function getRouteKeyName()
    {
        return "slug";
    }
    
    protected $with = ['questions'];

    public function questions()
    {
        return $this->hasMany(Question::class, 'category_id', 'id');
    }
}
