<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'category_id', 'user_id', 'title', 'slug', 'body',
    ];

    //protected $guarded = [];
    public $timestamp = true;

    public function getRouteKeyName()
    {
        return "slug";
    }

    protected $with = ['replies'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class)->latest();
    }

    public function getPathAttribute()
    {
        //return asset("/api/qustion/$this->slug");
        return ("/question/$this->slug");
    }
}
