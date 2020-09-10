let heroSection = {
    template: `
            <div class="hero-container ">
    
                <div class="info-container max-width">
                    <h2>
                        <span v-text="friendsSpan"></span><br>
                        <span v-text="foodSpan"></span>
                    </h2>
                    <p v-html="subTitle"></p>
                    <a class="main-button" :href="CTA.howToStart" v-text="CTA.text"></a>
                </div>
            </div>
`,
    data() {
        return {
            friendsSpan: "AMIGOS",
            foodSpan: "NO COMIDA",
            subTitle: "Una vida diferente es posible.<br>Sé parte del cambio.<br>Vive bajo una mejor ética.",
            CTA: {
                text: "CÓMO EMPEZAR",
                howToStart: "howToStart.html"
            }
        }
    },
}


