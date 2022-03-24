const app = {
    data() {
        return {
            nom: "Julien",
        }
    },

    mounted() {
        console.log("VUEJS")
    },

    methods: {

    },
}

Vue.createApp(app).mount("#app")