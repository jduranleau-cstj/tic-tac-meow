const app = {
    data() {
        return {
            symbole_joueur: "x",
            tour_joueur: "x",
            carres: [
                "", "", "",
                "", "", "",
                "", "", "",
            ],
        }
    },

    mounted() {
        console.log("VUEJS")
    },

    methods: {
        clickCarre(i) {
            if (this.estJouable(i)) {
                this.carres[i] = this.symbole_joueur

                this.tour_joueur = (this.tour_joueur == "x") 
                    ? "o" // vrai
                    : "x" // faux/else

            }            
        },

        estJouable(i) {
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