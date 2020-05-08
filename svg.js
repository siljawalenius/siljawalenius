//old pink: #F1E9E2

//setting a blank array of points
let xs = []

//adding points to the array
for(let i = 0; i < 1300; i++){
    xs.push(i)
}

//set initial time to 0
let t = 0

//purpose: making the wave move
function animate(){
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
    let waves = document.querySelectorAll("path")
    
    waves.forEach(wave =>{
        wave.setAttribute("d", path)
    })
    
    

    //increasing time by 0.5
    t +=0.5

    //get the animation frame 
    requestAnimationFrame(animate)
}
//run function on load
animate()