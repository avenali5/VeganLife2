Vue.component("how-to-start", {
    template: `    <div>
                    <navBar></navBar>
                    <heroHTS></heroHTS>
                    <advices></advices>
                    <footerPart></footerPart>
                  </div>
`,
    components: {
        navBar,
        heroHTS,
        advices,
        footerPart
    }
})