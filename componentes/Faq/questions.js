let questions = {
    template: `
            <div class="whole-faq-container">
                <h3 class="subtitle">ESTAMOS ACÁ PARA AYUDARTE</h3>
                <div class="faqs-container max-width">
                    <div class="card" v-for="question in questions">
                        <h4> ¿{{ question.key }} </h4>
                        <p v-html="question.answer"></p>
                    </div>
                </div>
                <h3 class="subtitle">NO PUDIMOS RESOLVER TU INQUIETUD? <span>ESCRIBINOS</span></h3>
            </div>
    `,
    data() {
        return {
            questions: [
                question = {
                    key:"Qué tan difícil es realmente ser vegano?",
                    answer:"Casi todos los veganos a los que preguntes te dirán que la transición fue mucho más fácil de lo que esperaban. Si bien volverse vegano puede parecer difícil en este momento, sin duda te sorprenderá lo fácil que es."
                },
                question = {
                    key: "De dónde sacan los veganos la vitamina B-12?",
                    answer: "No hay ningún tema relacionado con el veganismo que genere tanta confusión y consejos inexactos, por lo que es importante obtener información confiable sobre la B-12 y seguir las recomendaciones."
                },
                question = {
                    key: "Cómo se si un alimento es 100% vegano?",
                    answer: "La mayoría de los países requieren que todos los productos alimenticios lleven etiquetas de ingredientes, por lo que generalmente solo es cuestión de verificar la etiqueta. Por supuesto, necesitará saber cuáles de estos ingredientes provienen de animales, pero es una tarea fácil."
                },
                question = {
                    key: "Puedo ser vegano si tengo alergias?",
                    answer: "Absolutamente. Innumerables personas se han vuelto veganas a pesar de tener alergias o sensibilidades a alimentos como nueces, granos o soja. En general, no es más difícil evitar estos alimentos como vegano que como omnívoro."
                },
                question = {
                    key: "Los veganos reciben suficiente proteína?",
                    answer: "Si bien muchos alimentos contienen poca o ninguna proteína, hay muchos alimentos veganos deliciosos que son ricos en este nutriente clave. Incluir alimentos como frijoles, nueces y tofu con la mayoría de las comidas aumentará en gran medida su ingesta total de proteínas."
                },
                question = {
                    key: "La cerveza, el vino y los destilados son veganos?",
                    answer: "La mayoría de las cervezas y licores destilados son veganos y muchos vinos también lo son. Barnivore.com es el recurso definitivo para comprobar el estado vegano de varias marcas de cerveza y vino."
                },
                question = {
                    key: "Debería hacer el cambio gradualmente?",
                    answer: "Si está sumamente comprometido, ciertamente puede hacer la transición de la noche a la mañana: miles de personas lo han logrado con éxito. Pero obviamente es más fácil tomarse su tiempo, familiarizarse con la mayor cantidad posible de alimentos veganos y eliminar los alimentos de origen animal poco a poco a medida que se sienta listo."
    
                },
                question = {
                    key: "Y si necesito medicina que proviene de animales?",
                    answer: "Puede haber alternativas disponibles. A veces, el medicamento que necesita será vegano, pero solo estará disponible en cápsulas de gelatina. En estos casos, puede pedirle a su médico que le recete el medicamento para que lo coloque en cápsulas veganas en su 'farmacia de compuestos' local."
                },
            ]
        }
    }
}