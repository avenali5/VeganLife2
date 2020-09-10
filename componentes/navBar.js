let navBar = {
    template: `<div class="whole-header-container">
                <header class="nav-max-width">
                  
                    <div class="logo">
                        <a href="index.html">
                            <img :src="logoImg">
                        </a>
                    </div>
                    <nav>
                        <div class="burguerMenu">
                            <img :src="burguerMenu" @click="toggleMenu"/>
                        </div>
                        <div class="list">
                            <div class="listItem">
                                <a href="howToStart.html">CÓMO EMPEZAR</a>
                            </div><hr>

                            <div class="listItem">
                                <a href="inspirations.html">INSPIRACIONES</a>
                            </div><hr>

                            <div class="listItem">
                                <a href="blogs.html">BLOGS</a>
                            </div><hr>

                            <div class="listItem">
                                <a href="recipes.html">RECETAS</a>
                            </div><hr>

                            <div class="listItem">
                                <a href="faq.html">FAQ</a>
                            </div>
                        </div>    
                    </nav>
                </header>
              </div>  
    
    `,
    data() {
        return {
            logoImg: "assets/icons/mainLogo.png",
            burguerMenu: "assets/icons/burguerMenu.svg"
        }
    },
    methods: {
        toggleMenu() {
                const list = document.querySelector("header .list")
                list.classList.toggle("open")
        }
    }
}
