<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public function questions()
    {
        return $this->hasMany(Question::class, 'category_id', 'id');
    }
}
