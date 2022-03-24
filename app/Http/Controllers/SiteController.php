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

        if (in_array(4, $coups_possibles)) {
            $resultat = 4;
        } else {
            $index_au_hasard = array_rand($coups_possibles);
            $resultat = $coups_possibles[$index_au_hasard];
        }


        return response()->json([
            "tour_ia" => $resultat,
        ]);
    }
}
