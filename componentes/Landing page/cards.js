let cards = {
    template: `
               <div class="reasons-container max-width">
                        <div class="subtitle">
                            <h3>ACÁ HAY ALGUNAS RAZONES PARA SER <span>VEGANO</span></h3>
                            <img src="assets/icons/arrow.svg"/>
                        </div>
                                <div class="main-reasons">
                                    <div class="card" v-for="card in firstCards" data-tilt data-tilt-max="7" data-tilt-glare>
                                        <img :src="card.icon"/>
                                        <h5 v-text="card.title"></h5>
                                        <p v-text="card.text"></p>
                                    </div>
                                </div> 
                        <div class="subtitle">
                            <h3>SIENDO <span>VEGANO</span> HOY, VAS A ESTAR COMBATIENDO A ESTAS INDUSTRIAS ABUSIVAS</h3>
                            <img src="assets/icons/arrow.svg"/>
                        </div>
                                <div class="abusive-industries">
                                    <div class="card" v-for="card in secondCards" data-tilt data-tilt-max="7" data-tilt-glare>
                                        <img :src="card.icon"/>
                                        <h5 v-text="card.title"></h5>
                                        <p v-text="card.text"></p>
                                    </div>
                            
                            </div>
                            
                    


                </div>
    `,
    data(){
        return {
            firstCards: [
                card1 = {
                    icon:"./assets/icons/world.png",
                    title: "PARA AYUDAR AL PLANETA",
                    text: "Para combatir al cambio climático, es mucho más eficiente y económico comer plantas a comer animales, debido que la ganadería es uno de los mayores causantes del cambio climático.",
                },
                card2 = {
                    icon:"assets/icons/pig.png",
                    title: "PARA SALVAR ANIMALES",
                    text: "Más de 200 millones de animales son asesinados por día en el mundo para ser comida – sólo terrestres. Incluídos animales salvajes y la pesca, llegamos a un total de 3 billones de animales diarios.",
                },
                card3 = {
                    icon: "assets/icons/bananas.png",
                    title: "PARA COMER MÁS SANO",
                    text: " Las dietas veganas están relacionadas con una baja presion arterial y reducido colesterol, así también como bajos casos de enfermedades cardíacas, diabetes y algunos tipos de cáncer. "
                }
            ],
            secondCards : [
                card1 = {
                    icon: "./assets/icons/bee.png",
                    title: "INDUSTRIA DE LA MIEL",
                    text: "La miel es fabricada por abejas para abejas, y su salud puede verse sacrificada cuando se las fuerza. De esta manera, buscamos terminar no solo la crueldad, también su explotación.",
                },
                card2 = {
                    icon: "assets/icons/chicken egg.png",
                    title: "INDUSTRIA DE LOS HUEVOS",
                    text: "Todas las gallinas son enviadas al matadero luego de un año de producción de huevos, a pesar de tener un promedio natural de vida de 7 años. Acabando en carnes procesadas.",
                },
                card3 = {
                    icon: "assets/icons/milk.png",
                    title: "INDUSTRIA DE LOS LÁCTEOS",
                    text: "Para que produzcan leche para el consumo humano, las vacas son obligadas y forzadas a tener crías incesantemente, por lo general mediante inseminación artificial. "
                }
            ],
        }
    }
}