Vue.component("inspirations", {
    template: `    <div>
                    <navBar></navBar>
                    <heroInsp></heroInsp>
                    <books></books>
                    <movies></movies>
                    <testimonials></testimonials>
                    <footerPart></footerPart>
                  </div>
`,
    components: {
        navBar,
        heroInsp,
        books,
        movies,
        testimonials,
        footerPart
    }
})