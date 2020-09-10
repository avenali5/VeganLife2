Vue.component('blogs', {
    template: `<div>
                <navBar></navBar>
                <heroBLOG></heroBLOG>
                <blogCards></blogCards>
                <footerPart></footerPart>
               </div> 
    `,
    components:{
        navBar,
        heroBLOG,
        blogCards,
        footerPart
    }
})