const pageBody = document.querySelector("body")
const wiper = document.createElement("div")
wiper.classList.add("wiper")
pageBody.appendChild(wiper)

//declaring all global vars here to avoid them being double declared
let xPoints, cardTags, t, cardContainer, draggies, cardArray, qs, contactSection



//barba.hooks.beforeEnter( ( data ) => {
    //loadCssJsFile("js", "app.js")
    //loadCssJsFile("js", "content.js")
    //loadCssJsFile("css", "z_projectstyles.css")
    //console.log("hi beforeEnter here")

   // console.log("running before enter")
    
   
        
//})

//barba.hooks.afterEnter( () => { //add a namespace on this for the index only
   // console.log("after enter")
    
   //animateSvg()
//})


//once our scripts are run on the page, the global vars remain. SO we need to clean up all the old vars after each run 
const doCleanup = (globalVars) => {
    globalVars.forEach(globalVar => {
        //console.log(globalVar)
        delete globalVar
        console.log("success")
    })
}

const functionWasRun = false;


barba.use(barbaPrefetch)
barba.init({
    debug: true,
    transitions:[
        {
            name:"rightSwipe", 
            custom({current,next,trigger}){
                return (trigger.classList && trigger.classList.contains("right")) || trigger === "right"
            }, 
            leave({current, next, trigger}){
                return new Promise(resolve => {
                    const timeline = gsap.timeline({
                        onComplete(){
                            current.container.remove()
                            resolve()
                        }
                    })

                    const proj = current.container.querySelector(".project-container")

                    if (trigger.classList.contains("blue")){
                        wiper.style.backgroundColor = "var(--blue)"
                    } else if (trigger.classList.contains("pink")){
                        wiper.style.backgroundColor = "var(--pink)"
                    } else if (trigger.classList.contains("green")){
                        wiper.style.backgroundColor = "var(--green)"
                    } else if (trigger.classList.contains("yellow")){
                        wiper.style.backgroundColor = "var(--yellow)"
                    } else{
                        wiper.style.backgroundColor = "var(--lightgrey)"
                    }

                    timeline 
                    .set(wiper, {x:"-100%"})
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
        },{
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

                    if (trigger.classList.contains("blue")){
                        wiper.style.backgroundColor = "var(--blue)"
                    } else if (trigger.classList.contains("pink")){
                        wiper.style.backgroundColor = "var(--pink)"
                    } else if (trigger.classList.contains("green")){
                        wiper.style.backgroundColor = "var(--green)"
                    } else if (trigger.classList.contains("yellow")){
                        wiper.style.backgroundColor = "var(--yellow)"
                    } else{
                        wiper.style.backgroundColor = "var(--lightgrey)"
                    }

                    timeline 
                    .set(wiper, {x:"100%"})
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
                        .to(wiper, {x:"-100%"}, 1)

                })

            }

        }
        
    ],
    views:[{
            namespace: "index", 
            beforeEnter(data){

                $.getScript("p5.min.js", () =>{
                })
                $.getScript("app.js", () =>{
                })

                $.getScript("svg.js", () => {
                    //console.log("success - svg")
                    animateBig()
                    animateSmall()
                    placeElements()
                })
                $.getScript("content.js", () =>{
                    //console.log("success - content")
                    runContent()
                })
               
                $(window).scrollTop(0);

            },
            afterLeave(data){
                $.getScript("svg.js", () => {
                    window.cancelAnimationFrame(animateBig)
                    window.cancelAnimationFrame(animateSmall)

                })
            }
            
        },{
            namespace: "project",
            beforeEnter(data){
                console.log('project:beforeEnter');
                $.getScript("svg.js", () => {
                    console.log("success - svg")
                    animateBig()
                })
                $.getScript("projectPages.js", () => {
                    console.log("success - projectPages")
                })


                $(window).scrollTop(0);
                
            }
        }
    ],

})





