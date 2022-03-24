const possibilites = [
    // lignes horizontales
    [0,1,2],
    [3,4,5],
    [6,7,8],

    // lignes verticales
    [0,3,6],
    [1,4,7],
    [2,5,8],

    // diagonales
    [0,4,8],
    [2,4,6],
]

const app = {
    data() {
        return {
            symbole_joueur: "x",
            tour_joueur: "x",
            en_cours_de_jeu: true,
            carres: [
                "", "", "",
                "", "", "",
                "", "", "",
            ],
        }
    },

    mounted() {
        if (Math.random() > 0.5) {
            this.tour_joueur = "o"
            this.faireJouerIA()
        }
    },

    methods: {
        clickCarre(i) {
            if (this.estJouable(i)) {
                this.carres[i] = this.symbole_joueur
                this.verifierFin()

                if (this.en_cours_de_jeu) {
                    this.changerTour()
                    setTimeout(this.faireJouerIA, 1000 + Math.random() * 000)
                }
            }            
        },

        verifierFin() {
            // match null
            // Si aucun coups possibles

            for (let ligne of possibilites) {
                let somme = this.carres[ligne[0]] + this.carres[ligne[1]] + this.carres[ligne[2]]
                if (somme == "xxx") {
                    console.log("Le gagnant est X")
                    this.en_cours_de_jeu = false
                    return
                }
                if (somme == "ooo") {
                    console.log("Le gagnant est O")
                    this.en_cours_de_jeu = false
                    return
                }
            }

            let coups_possibles = this.carres.filter(carre => {
                return carre == ""
            })

            if (coups_possibles.length == 0) {
                console.log("Match nul")
                this.en_cours_de_jeu = false
            }
        },

        /**
         * Alterne le tour entre les deux joueurs
         * Si c'est au tour "x", ou change tour_joueur pour "o"
         * Si c'est au tour "o", ou change tour_joueur pour "x"
         */
        changerTour() {
            this.tour_joueur = (this.tour_joueur == "x") 
                    ? "o" // vrai
                    : "x" // faux/else
        },

        faireJouerIA() {
            const url = "ia"
            // "http://127.0.0.1:8000/ia"

            const params_get = "?carres=" + JSON.stringify(this.carres)

            const options = {
                method: "GET",
                cors: true,
            }

            fetch(url + params_get, options).then(resp => resp.json()).then(data => {
                this.carres[data.tour_ia] = this.tour_joueur
                this.verifierFin()
                this.changerTour()
            })
        },

        estJouable(i) {
            if (this.en_cours_de_jeu == false) {
                return false
            }

            if (this.tour_joueur != this.symbole_joueur) {
                return false
            }

            if (this.carres[i] == "") {
                return true
            } else {
                return false
            }
        },
    },
}

Vue.createApp(app).mount("#app")