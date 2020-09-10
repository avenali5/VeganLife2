let heroInsp = {
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
            text: "— Todo lo que podés hacer, yo lo puedo hacer <span>vegano</span>",
            imgHREF: "assets/icons/scrollicon.png"
        }
    }
}