let heroBLOG = {
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
            text: "— <span>Abrazá</span> a una vaca.<br>Ordeñá una almendra",
            imgHREF: "assets/icons/scrollicon.png"
        }
    }
}