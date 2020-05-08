const bodyTag = document.querySelector("body")
const projectTags = document.querySelectorAll("section.projects div.project-container")

let easing = t => 1-(--t)*t*t*t //taken from github 

console.log("hi rik look in the content.js file")

//on page scroll, parallax things
// parallax is a ratio from middle dist. scrolled to middle point of anchor
document.addEventListener("scroll", function(){
    const topView = window.pageYOffset
    const midView = topView + window.innerHeight/2

    projectTags.forEach(project => {
        const topProject = project.offsetTop
        const midProject = topProject + (project.offsetHeight / 2)
        const distToSect = midView - midProject
        const title = project.querySelector("div.project-title")
        const speed = parseFloat(title.getAttribute("data-parallax"))

        const parAmount = distToSect * speed * 0.5
    
        title.style.transform = `translate(0, ${parAmount * -1}px)`
        
    })

    const record = document.querySelector(".record img")
    let pixels = window.pageYOffset
    let rotation = pixels / 5
   // console.log(pixels)
    record.style.transform = `rotate(${rotation}deg)`

})



//for hero section slot machine type of deal

const shortNouns = ['coder', 'runner', 'yogi', 'gemini', 'cyclist', 'hippie', 'techie', 'hipster', 'psychic']
const longNouns = ['designer', 'coffee addict', 'rock climber', 'student', 'photographer', 'chalamet fan', 'circus performer', 'whitewater kayaker', 'camper', 'art nerd', 'wanabe surfer', 'optimist']
//const shortList = bodyTag.querySelector('div.shortword')
//const longList = bodyTag.querySelector('div.longword')
const shortSlot = bodyTag.querySelector('div.shortslot')
const longSlot = bodyTag.querySelector('div.longslot')
const shortWord = document.querySelector('span.shortword')
const longWord = document.querySelector('span.longword')
//see in old.js for the prev. 

let runSlots = (array, word) => {
    //starting condition 
    const mid = Math.floor(array.length / 2) 
    const startWord = document.createTextNode(array[mid])
    word.appendChild(startWord)

    //storing trigger buttons to control what to do 
    const upButtonShort = document.querySelector('button.up1')
    const downButtonShort = document.querySelector('button.down1')
    const upButtonLong = document.querySelector('button.up2')
    const downButtonLong = document.querySelector('button.down2')

    upButtonShort.addEventListener("click", () => {
        console.log(upButtonShort)
        advanceSlot(shortNouns, shortWord)
    }
        
    )

}

const advanceSlot = (wordList, wordSpan, mid) => {
    console.log("stop firing so much")





}




runSlots(shortNouns, shortSlot)
runSlots(longNouns, longSlot)
