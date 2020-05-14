//old pink: #F1E9E2

//wave 1 (long)

//setting a blank array of points
let xs = []

//adding points to the array
for(let i = 0; i < 1300; i++){
    xs.push(i)
}

//set initial time to 0
let t = 0

//purpose: making the wave move
function animateBig(){
    //map each point to a specific place using sin waves
    let points = xs.map(x =>{

        // y = height from top + Math.sin(x/frequency) + amplitude
        let y = 33 + Math.sin( (x+t) / 15) * 15

        return [x,y]
    })
    
    //creates the text array of points we need 
    let path = "M" + points.map(p =>{
        return p[0] + "," + p[1]
    }).join(" L")

    //sets the attribute on the path element
    let waves = document.querySelectorAll("path.big-wave")
    
    waves.forEach(wave =>{
        wave.setAttribute("d", path)
    })
    
    //increasing time by 0.5
    t +=0.5

    //get the animation frame 
    requestAnimationFrame(animateBig)
}
//run function on load
animateBig()











//small wave (for name wave and other accents)

let qs = []
for(let i = 0; i<170; i++){
    qs.push(i)
}

function animateSmall(){
    //map each point to a specific place using sin waves
    let points = qs.map(x =>{

        // y = height from top + Math.sin(x/frequency) + amplitude
        let y = 10 + Math.sin( (x+t) / 6) * 6

        return [x,y]
    })
    
    //creates the text array of points we need 
    let path = "M" + points.map(p =>{
        return p[0] + "," + p[1]
    }).join(" L")

    //sets the attribute on the path element
    let smallWaves = document.querySelectorAll("path.small-wave")
    
    smallWaves.forEach(wave =>{
        wave.setAttribute("d", path)
    })
    
    //increasing time by 0.5
    t +=0.005

    //get the animation frame 
    requestAnimationFrame(animateSmall)
}

animateSmall()


//positioning the small wave under my name 
//positioning the "pronounce" text over my name

let name = document.querySelector("span.name")

let nameWave = document.querySelector('div.name-wave')
let pronounceText = document.querySelector('span.pronounce')

const placeElements = () =>{
    let nameX = name.getBoundingClientRect().left
    let nameY = name.getBoundingClientRect().bottom
    let nameYTop = name.getBoundingClientRect().top
    let nameW = name.getBoundingClientRect().width


    nameWave.style.top = nameY + `px`
    nameWave.style.left = nameX + `px`
    nameWave.style.width = nameW - 6 + `px`

    pronounceText.style.top = nameYTop - 50 + `px`
    pronounceText.style.left = nameX - (nameW /2.5) + `px`
}


placeElements()


name.addEventListener("mouseover", () =>{
    pronounceText.classList.add("visible")
})

name.addEventListener('mouseout', () => {
    pronounceText.classList.remove("visible")
})

window.addEventListener("resize", () =>{
    placeElements()

})