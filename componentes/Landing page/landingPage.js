Vue.component("landing-page", {
    template: `    <div>
                    <navBar></navBar>
                    <heroSection></heroSection>
                    <cards></cards>
                    <inspirationPreview/>
                    <blog/>
                    <recipes/>
                    <footerPart/>
                  </div>
`,
    components: {
        navBar,
        heroSection,
        cards, 
        inspirationPreview,
        blog,
        recipes,
        footerPart
    }
})

