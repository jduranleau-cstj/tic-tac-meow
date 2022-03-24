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

    public function ia() {
        $carres = json_decode($_GET["carres"]);

        $coups_possibles = [];

        foreach ($carres as $i => $carre) {
            if ($carre == "") {
                $coups_possibles[] = $i;
            }
        }

        $index_au_hasard = array_rand($coups_possibles);

        return response()->json([
            "tour_ia" => $coups_possibles[$index_au_hasard],
        ]);

        echo json_encode($resultat);
    }
}
