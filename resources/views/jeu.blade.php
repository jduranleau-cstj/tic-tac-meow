<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    </head>
    <body>
        @verbatim
        <div id="app" v-cloak>
            <div class="conteneur-grille">
                <div 
                    class="carre"
                    v-for="(carre, i) of carres"
                    @click="clickCarre(i)"
                    :class="{ jouable: estJouable(i) }"
                    >{{ carre }}</div>
            </div>
        </div>
        @endverbatim

        <script src="https://unpkg.com/vue@3"></script>
        <script src="js/main.js"></script>
    </body>
</html>