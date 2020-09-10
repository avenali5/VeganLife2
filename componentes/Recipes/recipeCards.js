let breakfastRecipes = {
    template: 
    
    ` 
            <div class="whole-recipes-container max-width">
                <div class="recipes-container">
                    <h3 class="subtitle">DELEITATE CON NUESTRAS RECETAS SELECCIONADAS</h3>
                    <div class="tabs-btn-container">
                        <a class="tablink" @click="openPage('allRecipes','defaultOpen')" id="defaultOpen">TODAS</a>
                        <a class="tablink" @click="openPage('favRecipes','favouriteRec')" id="favouriteRec">FAVORITAS</a>
                    </div>
                        
                    
                    <div id="allRecipes" class="tabcontent all">
                        <h3 class="subtitle">DESAYUNOS</h3>
                        <div class="card-box">
                            <div class="card" v-for="recipe in recipes">
                                
                                <img :src="recipe.img" class="image-showcase"/>
                                <div class="text-container">
                                    <div class="star-container">
                                        <i :class="recipe.starClass" 
                                        @click="toggleFav(recipe)"></i>
                                    </div>
                                    <h3 v-text="recipe.name"></h3>
                                    <a class="main-button">VER RECETA</a>
                                </div>
                            </div>
                        </div>

                        <h3 class="subtitle">ALMUERZOS Y CENAS</h3>
                        <div class="card-box-two">
                            <div class="card" v-for="recipe in lunchRecipes">
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

                        <h3 class="subtitle">POSTRES</h3>
                        <div class="card-box-three">
                            <div class="card" v-for="recipe in dessertRecipes">
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
                        <p class="warn-message" v-show="favRecipes.length == 0">Aún no tenés recetas favoritas!</p>
                        <ul class="card-box">
                            <li class="card" v-for="recipe in favRecipes">
                                <img :src="recipe.img" class="image-showcase"/>
                                <div class="text-container">
                                    <div class="star-container">
                                        <i :class="recipe.starClass" 
                                        @click="popRecipe(recipe)"></i>
                                    </div>
                                    <h3 v-text="recipe.name"></h3>
                                    <a class="main-button">VER RECETA</a>
                                </div>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            //DESAYUNOS
            recipes: [
                recipe1 = {
                    img: "CSS/images/Recipes/bacon-n-avocado.jpg",
                    name: "Sandwich de 'panceta' y palta",
                    starClass:"far fa-star",                    
                },
                recipe = {
                    img: "CSS/images/Recipes/banana-bowl.jpg",
                    name: "Bowl de banana y cereales",
                    starClass: "far fa-star",                    
                },
                recipe = {
                    img: "CSS/images/Recipes/pancakes.jpg",
                    name: "Pancakes con arándanos y 'miel'",
                    starClass: "far fa-star",                    
                },
                recipe = {
                    img: "CSS/images/Recipes/smoothie.jpg",
                    name: "Smoothie de frutos rojos y yogur vegano",
                    starClass: "far fa-star",                    
                },
                recipe = {
                    img: "CSS/images/Recipes/protein-bowl.jpg",
                    name: "Bowl protéico variado",
                    starClass: "far fa-star",                    
                },
                recipe = {
                    img: "CSS/images/Recipes/waffles-n-sausage.jpg",
                    name: "Waffles con syrup y 'salchicha'",
                    starClass: "far fa-star",                    
                },
                recipe = {
                    img: "CSS/images/Recipes/tofu-n-hash-browns.jpg",
                    name: "Wok de tofu",
                    starClass: "far fa-star",
                }
            ],
            favRecipes: [],
            //ALMU Y CENA
            lunchRecipes: [
                recipe1 = {
                    img: "CSS/images/Recipes/fresh-leaves-salad.jpg",
                    name: "Ensalada de lentejas y vegetales",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/fried-rice-bowl.jpg",
                    name: "Arroz frito y vegetales",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/hummus-red-pepper-wrap.jpg",
                    name: "Wrap de hummus y ajíes",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/meatball-sandiwch.jpg",
                    name: "Sandwich de 'albóndigas",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/red-lentil-chili.jpg",
                    name: "Chili de lentejas rojas",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/tomato-soup.jpg",
                    name: "Sopa de tomate y albahaca",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/turk-sandwich.jpg",
                    name: "Sandwich turco de hojas verdes",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                }
            ],
            //POSTRES
            dessertRecipes: [
                recipe1 = {
                    img: "CSS/images/Recipes/cinnamon-rolls.jpg",
                    name: "Rolls de canela",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/iceream-coffee.jpg",
                    name: "Café de helado y crema vegana",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/oreo-n-cream-brownies.jpg",
                    name: "Brownies de oreo y chocolate",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/rainbow-cake.jpg",
                    name: "Torta arcoíris",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/peanut-butter-brownie.jpg",
                    name: "Brownies de manteca de maní",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/red-velvet-cake.jpeg",
                    name: "Torta Red Velvet",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                },
                recipe = {
                    img: "CSS/images/Recipes/tiramisu.jpg",
                    name: "Tiramisu italiano",
                    btn: "VER RECETA",
                    starClass: "far fa-star",
                }
            ],
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
            
            if(value.fav){
                localStorage.setItem("recipe", JSON.stringify(value))
                let data = JSON.parse(localStorage.getItem("recipe"))
                return this.favRecipes.push(data)
            }
            
        },
        //SACAR LA RECETA DE FAVORITAS
        popRecipe(value) {
            value.fav = !value.fav;
            value.fav ? value.starClass = "fas fa-star" : value.starClass = "far fa-star"
            //eliminar receta especifica
            if(!value.fav){
                let index = this.favRecipes.indexOf(value)
                if(index > -1){
                    this.favRecipes.splice(index,1)
                }
        }
    },
}
}
 