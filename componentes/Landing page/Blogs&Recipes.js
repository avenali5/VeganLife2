let blog = {
    template: 
    
    `
        <div class="whole-blog-container max-width">
            <div class="blog-container">
                <img src="CSS/images/LandingPage/preview-blog.png" class="image-container"></img>
                <div class="blog-text-container">
                    <h3 v-text="infoContainer.title"></h3>
                    <p> {{ infoContainer.subtitle | cutText }} </p>
                    <div class="buttons-container">
                        <a  class="main-button read"
                            :href="infoContainer.readBlog.href" 
                            v-text="infoContainer.readBlog.text"></a>
                        <a  class="secondary-button"
                            href="blogs.html" 
                            v-text="infoContainer.moreBlogs.text"></a>
                    </div>
                </div>
            </div>
        </div>
    
    `,
    data() {
        return {
            infoContainer: {
                title: "Cinco maneras con las cuales vos podés cambiar el mundo para los animales en 2020",
                subtitle:"La crueldad inflijida en animales de granja es terrible, pero vos podés ser parte del movimiento que termine el abuso. Acá hay cinco formas y hábitos con los que podés beneficiar a los animales.",
                readBlog: {
                    text: "LEER BLOG",
                },
                moreBlogs: {
                    text:"MÁS BLOGS",
                }
            }
        }
    },
    filters: {
        cutText (value) {
            return  `${value.substring(0,125)}...`
        }
    }
}


let recipes = {
    template: `
    <div class="whole-recipes-container max-width">
        <div class="recipes-container">
            <div class="gallery-container">
                <div class="image">
                </div>
                <div class="image">
                </div>
                <div class="image">
                </div>
                <div class="image">
                </div>
                <div class="image">
                </div>
                <div class="image">
                </div>
            </div>

            <div class="recipes-info-container">
                 <h3 v-text="infoContainer.title"></h3>
                 <p v-text="infoContainer.subtitle"></p>
                 <div class="button-container">
                    <a  class="main-button"
                        href="recipes.html" 
                        v-text="infoContainer.moreRecipes.text"></a> 
                </div> 
            </div>          
        </div>
    </div>
    `,
    data() {
        return {
            infoContainer: {
                title: "Miles de opciones gastronómicas!",
                subtitle: "Prepare recetas deliciosas, sustentables, libres de sufrimiento animal, y absurdamente fáciles de hacer",
                moreRecipes: {
                    text: "MÁS RECETAS",
                },
            }
        }
    }
}