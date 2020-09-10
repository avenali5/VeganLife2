let heroHTS = {
    template://html 
    `
            <div class="hero-container">
                <div class="info-container">
                    <h2 v-html="text" class="max-width"></h2>
                    <img :src="imgHREF"/>
                </div>
            </div>
    `,
    data() {
        return {
            text: "— No me preguntes a mí por qué soy <span>vegano</span>, preguntate a vos mismo por qué no lo sos",
            imgHREF: "assets/icons/scrollicon.png" 
        }
    }
}