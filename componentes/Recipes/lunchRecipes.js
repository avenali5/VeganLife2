let lunchRecipes = {
    template: `
            <div class="whole-lunch-container max-width">
                <div class="lunch-container">
                        
                    <h3 class="subtitle">ALMUERZOS Y CENAS</h3>
                    <div id="allRecipes" class="tabcontent all">
                        <div class="card-box">
                            <div class="card" v-for="recipe in recipes">
                                <div class="card-background"></div>
                                <img :src="recipe.img" class="image-showcase"/>
                                

                                <div class="text-container">
                                <div class="star-container">
                                    <i :class="recipe.starClass" 
                                    @click="toggleFav(recipe)"></i>
                                </div>

                                    <h3 v-text="recipe.name"></h3>
                                    <a v-text="recipe.btn" class="main-button"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="favRecipes" class="tabcontent favs">
                        <p class="warn-message" v-show="favBreakfast.length == 0">Aún no tenés recetas favoritas!</p>
                        <div class="card-box">
                            <div class="card" v-for="recipe in favBreakfast">
                                <div :id="recipe.id" class="card-background"></div>
                                <img :src="recipe.img" class="image-showcase"/>
                                

                                <div class="text-container">
                                <div class="star-container">
                                    <i :class="recipe.starClass" 
                                    @click="popRecipe(recipe)"></i>
                                </div>

                                    <h3 v-text="recipe.name"></h3>
                                    <a v-text="recipe.btn" class="main-button"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            recipes: [
                recipe1 = {
                    img: "CSS/images/Recipes/fruit bowl 1.png",
                    name: "Panqueques esponjosos con miel vegana",
                    btn: "VER RECETA",
                    fav:false,
                    starClass:"far fa-star",                    
                },
                recipe = {
                    img: "CSS/images/Recipes/basil toast.png",
                    name: "Tostadas de mayonesa vegana y albahaca",
                    btn: "VER RECETA",
                    fav: false,
                    starClass: "far fa-star",                    
                },
                recipe = {
                    img: "CSS/images/Recipes/avocado rice toast.png",
                    name: "Tostada de arroz con palta y granas",
                    btn: "VER RECETA",
                    fav: false,
                    starClass: "far fa-star",                    
                },
                recipe = {
                    img: "CSS/images/Recipes/smoothie.png",
                    name: "Smoothie de frutos rojos y yogur vegano",
                    btn: "VER RECETA",
                    fav: false,
                    starClass: "far fa-star",                    
                },
                recipe = {
                    img: "CSS/images/Recipes/pancakes.png",
                    name: "Panqueques esponjosos con miel vegana",
                    btn: "VER RECETA",
                    fav: false,
                    starClass: "far fa-star",                    
                },
                recipe = {
                    img: "CSS/images/Recipes/bacon sandwich.png",
                    name: "Sandwich de 'panceta' con hojas verdes",
                    btn: "VER RECETA",
                    fav: false,
                    starClass: "far fa-star",                    
                }
            ],
            favBreakfast: [],
        }
    },
    methods: {
        //NAVEGACION E/ PESTAÑAS 
        openPage(pageName, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            // Show the specific tab content
            document.getElementById(pageName).style.display = "block";

            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.borderBottom = "";
            }

            document.getElementById(tabName).style.borderBottom = "4px solid var(--main-color)";
        },
        //METER LA RECETA EN FAVORITAS
        toggleFav(value) {
            value.fav = !value.fav
            value.fav ? value.starClass = "fas fa-star" : value.starClass = "far fa-star"
            //let receta = document.getElementById(value)
            if(value.fav){return this.favBreakfast.push(value)}
        },
        //SACAR LA RECETA DE FAVORITAS
        popRecipe(value) {
            value.fav = !value.fav;
            value.fav ? value.starClass = "fas fa-star" : value.starClass = "far fa-star"
            //let receta = document.getElementById(value)
            if(!value.fav){return this.favBreakfast.pop(value)}
        }
    },
    computed: {
        //CAMBIAR ESTRELLA SEGUN ESTADO
        favStatus(value) {
            return recipe.fav ? 'fas fa-star' : 'far fa-star'
        },
        
    },
}
