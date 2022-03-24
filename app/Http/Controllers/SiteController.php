<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index() {
        return view("index");
    }

    public function jeu() {
        return view("jeu");
    }

    public function fin() {
        return view("fin");
    }
}
