let movies = {
    template: `
            <div class="whole-movies-container max-width">
                    <div class="movies-container">
                        <h3>PELÍCULAS Y DOCUMENTALES</h3>
                       <div class="gallery-container">
                            <div class="movies-items items">
                                <div class="movie" v-for="movie in movies">
                                    <img class="cover" :src="movie.img"/>
                                    <button class="watch-button" :href="movie.link">
                                        <img :src="movie.netflix">VER EN NETFLIX
                                    </button>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
    `,
    data() {
        return {
            movies: [
                movie1 = {
                    img: "CSS/images/Inspirations/movie1.jpg",
                    link: "https://www.netflix.com/watch/80033772?trackId=13752289&tctx=0%2C0%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2C%2C",
                    netflix: "./assets/icons/netflix.svg"
                },
                movie2 = {
                    img: "CSS/images/Inspirations/movie2.jpg",
                    link: "https://www.netflix.com/watch/80174177?trackId=13752289&tctx=0%2C1%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2Cunknown%2C",
                    netflix: "./assets/icons/netflix.svg"
                },
                movie3 = {
                    img: "CSS/images/Inspirations/movie3.jpg",
                    link: "https://www.netflix.com/watch/81157840?trackId=13752289&tctx=0%2C2%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2Cunknown%2C",
                    netflix: "./assets/icons/netflix.svg"
                },
                movie4 = {
                    img: "CSS/images/Inspirations/movie4.jpg",
                    link: "https://www.netflix.com/watch/80091936?trackId=13752289&tctx=0%2C8%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2Cunknown%2C",
                    netflix: "./assets/icons/netflix.svg"
                },
                movie5 = {
                    img: "CSS/images/Inspirations/movie5.jpg",
                    link: "https://www.netflix.com/watch/80146284?trackId=13752289&tctx=0%2C4%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2Cunknown%2C",
                    netflix: "./assets/icons/netflix.svg"
                },
                movie6 = {
                    img: "CSS/images/Inspirations/movie6.jpg",
                    link: "https://www.netflix.com/watch/81002391?trackId=13752289&tctx=0%2C9%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2Cf52244cebd0d1a4dcfaa90ae2b4dd7326ed22cff%3Ac349e3af8ce44ef56675e2e9b93103bc80493d37%2Cunknown%2C",
                    netflix: "./assets/icons/netflix.svg"
                }
            ]
        }
    }
}
