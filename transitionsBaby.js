
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
                            resolve()
                        }
                    })

                    const nav = current.container.querySelector("div.sidebar")

                    timeline 
                        .to(nav, {opacity:0})

                })

            },
            enter({current, next, trigger}){
                return new Promise(resolve=>{
                    const timeline = gsap.timeline({
                        onComplete(){
                            resolve()
                        }
                    })

                    const navigation = next.container.querySelector("div.sidebar")

                    timeline 
                        .set(nav, {opacity:0})
                        .to(nav, {opacity:1})

                })

            }
        }
    ],
    views:[]
})