let advices = {
    template: `
            <div class="whole-advices-container max-width">
                <div class="advices-container">
                <h3 class="subtitle">YA LLEGASTE HASTA ACÁ, ES UN GRAN PASO!<br><br>ACÁ HAY ALGUNOS CONSEJOS</h3>
                    <div class="card-box">
                        
                       <div class="card max-width"
                            v-for="card in cards">
                                <img :src="card.href"/>
                                <div class="text-container">
                                    <h3 v-text="card.title"></h3>
                                    <p v-text="card.text"></p>
                                </div>    
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            cards: [
                card1 = {
                    title: "TOMALO CON CALMA",
                    text: "Mantené tu objetivo en mente, pero andá a tu ritmo. Haciendo cambios pequeños en tus comidas diarias es una de las mejores maneras para incluir comidas con bases vegetales en tu dieta. Podés empezar obviando la carne o los lácteos un día a la semana y seguir desde ahí.",
                    href: "CSS/images/HowToStart/takeitslow.png"
                },
                card2 = {
                    title:"HACELO CORRECTAMENTE",
                    text: "Asegurate que no te falte ningún nutriente escencial. Que seas vegano no implica que seas 100% saludable, ya que hay versiones veganas de casi cualquier comida chatarra que se te pueda ocurrir.",
                    href: "CSS/images/HowToStart/doitright.png"
                },
                card3 = {
                    title: "PROBÁ COSAS NUEVAS",
                    text: "Enfrentá a tus papilas gustativas con sabores diferentes y comidas nuevas. Dejar tu zona de confort gastronómica te va a llevar en un viaje increíble donde vas a descubrir nuevos y geniales platos. Hay miles de recetas veganas de todas partes del mundo esperándote.",
                    href: "CSS/images/HowToStart/newthings.png"
                },
                card4 = {
                    title: "RECORDÁ POR QUÉ",
                    text: "No olvides por qué elegiste un estilo de vida vegano, ni los beneficios que sentiste desde que comenzaste. Probablemente encuentres el veganismo más sencillo de lo que esperabas, pero si tenés un mal día relajate y repensá tus razones.",
                    href: "CSS/images/HowToStart/rememberwhy.png"
                },
                card5 = {
                    title: "NO TE RINDAS",
                    text: "Si creés en vos mismo, pronto ser vegano se va a transformar en tu naturaleza. Siempre va a haber más razones para mantener tu elección que para ir en contra de ellas. Eventualmente vas a encontrar un inmenso placer que no volverá a irse.",
                    href: "CSS/images/HowToStart/dontgiveup.png"
                },
                

            ]
        }
    }
}