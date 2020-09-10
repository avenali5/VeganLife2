let footerPart = {
    template: `
        <div class="footer-container">
          <div class="footer-flex footer-max-width">
            <div class="stay-connected">
                <h4 v-text="stayConnected.title"></h4>
                <input :placeholder="stayConnected.inputPlaceholder" />
                <a class="main-button footer-btn" v-text="stayConnected.button"></a>
                <p v-text="stayConnected.subtext"></p>

                <div class="social-nets"></div>

            </div>

            <div class="about-us">
                <h4 v-text="aboutUs.title"></h4>
                <p v-text="aboutUs.text"></p>
            </div>

            <div class="navigate">
                <h4 v-text="navigate.title"></h4>
                <div class="lists">
                    <ul>
                        <li v-for="link in navigate.firstNav" v-text="link" ></li>
                    </ul>
                    <ul>
                        <li v-for="link in navigate.secondNav" v-text="link"></li>
                    </ul>
                </div>
            </div>
        </div>
            <div class="extra-info max-width">
                <hr>
                   <div class="links-container">
                        <h4 v-for="option in extraInfo.legalInfo" v-text="option"></h4>
                   </div> 
                <hr>
            </div>
                  
        
        
        </div>
    
    `,
    data(){
        return {
            stayConnected: {
                title: "MANTEN CONTACTO",
                inputPlaceholder: "INSERTA TU EMAIL",
                button: "SUSCRIBIRSE",
                subtext: "ENVIANDO TU EMAIL ACEPTÁS SUSCRIBIRTE A NUESTRO NEWSLETTER SEMANAL"
            },
            aboutUs: {
                title: "COMPROMETIDOS A AYUDAR",
                text: "VEGANLIFE es un orgulloso miembro de la comunidad vegana. Nos enfocamos en comunicar nuestras ideas y promover un planeta más justo para hacer una diferencia ambiental y social."
            },
            navigate: {
                title: "NAVEGAR",
                firstNav: [
                    "VOLVER AL TOP",
                    "CÓMO EMPEZAR",
                    "RAZONES"
                ],
                secondNav: [
                    "BLOG",
                    "RECETAS",
                    "FAQ"
                ]
            },
            extraInfo: {
                legalInfo: [
                    "POLÍTICA DE PRIVACIDAD",
                    "SITEMAP",
                    "2020 VEGANLIFE"
                ]
            }
        }
    }
}