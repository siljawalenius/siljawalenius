const pageBody = document.querySelector("body")

const wiper = document.createElement("div")
wiper.classList.add("wiper")
pageBody.appendChild(wiper)




barba.hooks.beforeEnter( ( data ) => {
    //loadCssJsFile("js", "app.js")
    //loadCssJsFile("js", "content.js")
    //loadCssJsFile("css", "z_projectstyles.css")
    //console.log("hi beforeEnter here")
    
    
    $.getScript("svg.js", () => {
        console.log("success - svg")
    })
    $.getScript("content.js", () =>{
        console.log("success - content")
    })
    $.getScript("app.js", () =>{
        console.log("success - app")
    })
    $(window).scrollTop(0);

    runContent()
    runApp()
    animateSvg()
        
})

barba.hooks.afterEnter( () => { //add a namespace on this for the index only
    console.log("after enter")
    
   animateSvg()
})



barba.use(barbaPrefetch)
barba.init({
    debug: true,
    transitions:[
        {
            name:"leftSwipe", 
            leave({current, next, trigger}){
                return new Promise(resolve => {
                    const timeline = gsap.timeline({
                        onComplete(){
                            current.container.remove()
                            resolve()
                        }
                    })

                    const proj = current.container.querySelector(".project-container")

                    timeline 
                    .set(wiper, {x:"-100%"})
                        .to(proj, {opacity:0.25, x: 700}, 0)
                        .to(wiper, {x:0})

                })

            },
            
            enter({current, next, trigger}){
                return new Promise(resolve=>{
                    const timeline = gsap.timeline({
                        onComplete(){
                            resolve()
                        }
                    })

                    
                    const proj = next.container.querySelector(".project-container")

                    timeline 
                        
                        .set(proj, {opacity:0.25, x:-700})
                        .to(proj, {opacity:1, x:0}, 0)
                        .to(wiper, {x:"100%"}, 1)

                })

            }
        }
    ],
    views:[],

})