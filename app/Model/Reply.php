<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Reply extends Model
{
    protected$fillable = ['user_id', 'question_id', 'body'];
    // protected $gaurded = [];

    protected static function boot()
    {
        parent::boot();

        static::creating(function($reply){
            $reply->user_id = auth()->id();
        });
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function likes()
    {
        return $this->hasMany(Like::class);
    }
}
