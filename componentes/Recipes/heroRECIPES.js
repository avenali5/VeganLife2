let heroRECIPES = {
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
            text: "— El único arrepentimiento  de hacerse <span>vegano</span>, es no hacerlo antes",
            imgHREF: "assets/icons/scrollicon.png"
        }
    }
}