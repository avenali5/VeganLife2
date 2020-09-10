
let books = {
    template: `
            <div class="whole-books-container max-width">
                    <div class="books-container">
                        <h3>LIBROS</h3>
                       <div class="gallery-container">
                            <div class="books-items items">
                                <div class="book" v-for="book in books">
                                    <img class="cover" :src="book.img"/>
                                    <button class="buy-button" :href="book.link">
                                        <img :src="book.amazon">{{ btn.toUpperCase() }}
                                    </button>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
    `,
    data() {
        return {
            books: [
                book1={
                    img: "CSS/images/Inspirations/book1_.jpg",
                    link:"https://www.amazon.com/-/es/Yoga-Veganism-Enlightenment-Sharon-Gannon/dp/1683839226/ref=sr_1_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=veganism+books&qid=1597947965&sr=8-2",
                    amazon: "./assets/icons/amazon.svg"
                },
                book2= {
                    img: "CSS/images/Inspirations/book2.jpg",
                    link: "https://www.amazon.com/-/es/Plea-Animals-Philosophical-Evolutionary-Imperative/dp/1611804744/ref=sr_1_4?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=veganism+books&qid=1597947965&sr=8-4",
                    amazon: "./assets/icons/amazon.svg"
                },
                book3= {
                    img: "CSS/images/Inspirations/book3.jpg",
                    link: "https://www.amazon.com/-/es/Vegan-Starter-Kit-Everything-Plant-Based/dp/1538747405/ref=sr_1_6?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=veganism+books&qid=1597947965&sr=8-6",
                    amazon: "./assets/icons/amazon.svg"
                },
                book4= {
                    img: "CSS/images/Inspirations/book4.jpg",
                    link: "https://www.amazon.com/-/es/Minimalist-Vegan-Simple-Manifesto-Compassion/dp/0648241092/ref=sr_1_8?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=veganism+books&qid=1597947965&sr=8-8",
                    amazon: "./assets/icons/amazon.svg"
                },
                book5= {
                    img: "CSS/images/Inspirations/book5.jpg",
                    link: "https://www.amazon.com/-/es/Eat-Like-You-Care-Examination/dp/1492386510/ref=sr_1_9?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=veganism+books&qid=1597947965&sr=8-9",
                    amazon: "./assets/icons/amazon.svg"
                },
                book6= {
                    img: "CSS/images/Inspirations/book6.jpg",
                    link: "https://www.amazon.com/-/es/Joyful-Vegan-World-Wants-Dairy/dp/1948836467/ref=sr_1_10?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=veganism+books&qid=1597947965&sr=8-10",
                    amazon: "./assets/icons/amazon.svg"
                }
            ],
            btn: "comprar en amazon"
        }
    },
    methods: {
        toUppercase(){
            let btn = document.getElementsByClassName("buy-button")
            let BTN = btn.toUpperCase()
            return BTN
        }
    }
}
