Vue.component("faqs", {
    template: `    <div>
                        <navBar></navBar>
                        <questions></questions>
                        <footerPart></footerPart>
                  </div>
`,
    components: {
        navBar,
        questions,
        footerPart
    }
})