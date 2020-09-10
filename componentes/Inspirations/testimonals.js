let testimonials = {
    template: `
                <div class="whole-testimonials-container max-width">
                    <div class="testimonials-container">
                        <h3>TESTIMONIOS DE CELEBRIDADES</h3>
                       <div class="gallery-container">
                            <div class="testimonials-items items">
                                <div class="card" v-for="celeb in celebs">
                                    <img :src="celeb.img"/>
                                    <div class="text-container">
                                        <h4 v-text="celeb.name"></h4>
                                        <p> "{{ celeb.text }}" </p>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
    `,
    data() {
        return {
            celebs: [
                celeb1 = {
                    img: "https://pbs.twimg.com/profile_images/3770322266/9f2bab575977596baeeb1d6d471aad0a.jpeg",
                    name: "Portia de Rossi",
                    text: "Siempre pensé que ser vegana iba a ser difícil, pero genuinamente no extraño la carne ni los lácteos. Me siento más felíz, como si estuviera contribuyendo a hacer un mundo menos violento."
                },
                celeb2 = {
                    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmh-IcB86Rs1YiKUh_8p4n42mhdPLm17u3eg&usqp=CAU",
                    name:"James Cameron",
                    text: "Vas a ser más sano, vas a vivir más, vas a lucir mejor. Vas a ser más esbelto. Vas a irradiar salud. Vas a tener una mejor vida sexual. Todo eso produce alejarse de la carne y los lácteos."
                },
                celeb3 = {
                    img: "https://www.stylist.co.uk/images/app/uploads/2020/01/27113053/ariana-grande-2020-grammys-crop-1589450012-1274x1274.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
                    name: "Ariana Grande",
                    text: "Amo a los animales más que a las personas, fuera de broma. Pero realmente creo en las dietas basadas en plantas, dietas que pueden expandir tu vida y hacerte una persona mucho más felíz."
                },
                celeb4 = {
                    img: "https://www.stylist.co.uk/images/app/uploads/2020/02/03002623/joaquin-phoenix1-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
                    name: "Joaquin Pheonix",
                    text: "Le dijimos a nuestra madre, '¿Por qué no nos dijiste que de ahí venía la carne?' Y ella no sabía qué decir. Tengo guardado en la memoria este sentimiento de ella llorando desconsolada."
                },
                celeb5 = {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBr5IA-Gyn3ek-MHDenTfV3yYxhnCHmnQwPw&usqp=CAU",
                    name: "Venus Williams", 
                    text: "Fui diagnosticada con una enfermedad autoinmune, y quería mantener mi performance. Una vez que empecé con una dieta vegana, me enamoré del concepto de alimentar tu cuerpo de la mejor manera."
                },
                celeb6 = {
                    img: "https://d26oc3sg82pgk3.cloudfront.net/files/media/edit/image/28356/square_thumb%402x.jpg",
                    name: "Woody Harrelson",
                    text: "Elegí en un principio ser vegano por los derechos de los animales, pero desde entonces estoy convencido que el veganismo no es solo la forma más compasiva de vivir, sino la más saludable."
                }
            ]
        }
    },
}