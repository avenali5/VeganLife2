let inspirationPreview = {
    template: `<div class="whole-inspirations-container ">
                <div class="inspirations-container max-width">
                    
                    <img src="CSS/images/LandingPage/preview-inspirations.png" class="image-container"></img>
                    <div class="text-container">
                        <p v-html="textContainer.text">

                        </p>
                        
                        <a class="main-button" :href="textContainer.href" v-text="textContainer.button"></a>
                    </div>
                </div>
               </div> 
    
    
    `,
    data() {
        return {
            textContainer: {
                text: 'Desde que soy vegana, he notado que aunque el mundo parezca un lugar más extraño,  estoy mucho más felíz y estoy extremadamente encantada de haber encontrado al veganismo y simplemente ser justa con los animales.<br><br><span>- Vera Cristofani</span><span class="quotes">"</span>',
                button: "MÁS INSPIRACIONES",
                href:"inspirations.html",
            }
        }
    }
}




