let blogCards = {
    template:`
            <div class="whole-cards-container blog-max-width">
                <h3 class="subtitle">MIRÁ ESTOS INCREÍBLES BLOGS ESCRITOS POR PERSONAS COMO VOS</h3>
                <div class="cards-container">
                    <div class="card" v-for="blog in blogs" data-tilt data-tilt-max="4" data-tilt-glare>
                        <img :src="blog.img"/>
                        <div class="text-container">
                            <h3>{{ blog.title | titleCase}}</h3>
                            <p>{{ blog.text | cutText }}</p>
                            <p class="author">por {{ blog.author }}</p>
                            <a class="main-button">LEER BLOG</a>
                        </div>
                    </div>
                </div>
                <!--caca-->
                    <div class="load-more-container">
                        <a class="load secondary-button" @click="seeMore">CARGAR MÁS</a>
                        <div class="loader-div" @animationend="loadMore"></div>
                    </div>
                
                <div class="second-cards">
                    <div class="card" v-for="blog in moreBlogs" data-tilt data-tilt-max="4" data-tilt-glare>
                        <img :src="blog.img"/>
                        <div class="text-container">
                            <h3>{{ blog.title | titleCase}}</h3>
                            <p>{{ blog.text | cutText }}</p>
                            <p class="author">por {{ blog.author }}</p>
                            <a class="main-button">LEER BLOG</a>
                        </div>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            blogs: [
                blog = {
                    img:"CSS/images/Blogs/blog1.png",
                    title:"Cinco Maneras Con Las Cuales Vos Podés Cambiar el mundo para los animales en 2020",
                    text:"La crueldad inflijida en animales de granja es terrible, pero vos podés ser parte del movimiento que termine el abuso. Acá hay cinco formas y hábitos con los que podés beneficiar a los animales.",
                    author: "Hugh Adams"
                },
                blog = {
                    img:"CSS/images/Blogs/blog2.png",
                    title:"6 nuevos increíbles productos a base de plantas de los que no habías escuchado.",
                    text:"En nuestro rápidamente cambiante mundo, es difícil mantenerse siempre en la cima",
                    author: "Angus Johnson"
                },
                blog = {
                    img:"CSS/images/Blogs/blog3.png",
                    title:"5 hoteles completamente veganos para visitar cuando sea seguro viajar denuevo",
                    text:"Si sos como yo, pasar tanto tiempo en casa escrolleando te debe estar volviendo loco.",
                    author:"Walter Cook"
                },
                blog = {
                    img:"CSS/images/Blogs/blog4.png",
                    title:"Influencer vegana obtiene más de 2 millones de seguidores en Tik Tok en menos de cinco semanas",
                    text:"Conocida por su carismática personalidad y sus deliciosas recetas, Tabitha Brown está disfrutando de una exitosa carrera",
                    author:"Finn Davis"
                },
                blog = {
                    img:"CSS/images/Blogs/blog5.png",
                    title:"13 películas animal-friendly para mantener a tu familia entretenida este fin de semana",
                    text:"Quedarse en casa al final de la semana no significa renunciar a la diversión! Estás 13 películas te ayudarán a pasar un hermoso ",
                    author:"Tate Bennett"
                },
                blog = {
                    img: "CSS/images/Blogs/blog6.png",
                    title: "9 'hacks' veganos para tus restaurantes de comida rápida favoritos",
                    text: "Aceptémoslo, a veces queremos comenzar nuestro día con un bowl de avena y otras veces queremos simplemente devorar un buen plato",
                    author: "Dexter Richard"
                }
            ],
            moreBlogs: [
                blog = {
                    img: "CSS/images/Blogs/blog7.png",
                    title: "KFC Está Oficialmente Probando Pollo Frito Vegano",
                    text: "Finalmente está pasando! Esta semana, Kentucky Fried Chicken va a comenzar a implementar pollo frito que combina 'carne' de Beyond Meat con sus especias secretas.",
                    author: "Hugh Adams"
                },
                blog = {
                    img: "CSS/images/Blogs/blog8.png",
                    title: "Starbucks agrega cold brew de crema irlandesa a la lista de bebidas vegan-friendly",
                    text: "Disponible por tiempo limitado en muchos países alrededor del mundo, la nueva crema irlandesa vegana está disponible! ",
                    author: "Angus Johnson"
                },
                blog = {
                    img: "CSS/images/Blogs/blog9.png",
                    title: "Esta Compañía Láctea Acaba de Sacar a La Venta Un Queso de Base Vegetal ",
                    text: "Whitehhall Specialties acaba de lanzar al mercado una nueva serie de quesos exclusivamente veganos, incluyendo Gouda, mozzarella y parmesano",
                    author: "Walter Cook"
                },
                blog = {
                    img: "CSS/images/Blogs/blog10.png",
                    title: "Monster Debuta Con Bebida Energética a Base de Leche de Trigo. Organizan Una Fiesta Vegana",
                    text: "La última bebida energética de Monster es completamente vegana- una mezcla de cremosa leche de trigo y café.",
                    author: "Finn Davis"
                },
                blog = {
                    img: "CSS/images/Blogs/blog11.png",
                    title: "5 Franquicias Veganas Para Motivarte a Emprender",
                    text: "Seamos honestos, la mayoría de nosotros ha soñado con manejar nuestro propio restaurante vegano. Ahora ese sueño puede hacerse realidad.",
                    author: "Tate Bennett"
                },
                blog = {
                    img: "CSS/images/Blogs/blog12.png",
                    title: "8 Nuevos Productos Libres de Lactosa Que Desearías Haber Conocido Antes",
                    text: "Desde cremas y yogur hasta helado y queso, los productos libres de lactosa están en boca de todos! Más y más creaciones ingeniosas están saliendo a la venta.",
                    author: "Dexter Richard"
                }
            ],
        }
    },
    methods: {
        seeMore(){
            document.querySelector('.load').style.display = "none"
            document.querySelector('.loader-div').style.display = "flex"
        },
        loadMore(){
            document.querySelector('.load-more-container').style.display = "none"
            document.querySelector('.second-cards').style.display = "flex"
        },
    },
    filters: {
        cutText(value){
            return `${value.substring(0,80)}...`
        },
        titleCase(value) {
            let splitStr = value.toLowerCase().split(' ');

            for (let i = 0; i < splitStr.length; i++) {
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            
            return splitStr.join(' ');
        }
    }
}