const bodyTag = document.querySelector("body")
const projectTags = document.querySelectorAll("section.projects div.project-container")

let easing = t => 1-(--t)*t*t*t //taken from github 


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
const shortNouns = ['cyclist', 'runner', 'yogi', 'gemini', 'creative','coder', 'hippie', 'techie', 'psychic', 'kayaker']
const longNouns = ['chalamet fan', 'coffee addict', 'rock climber', 'student', 'photographer', 'designer', 'circus performer', 'camper', 'art nerd', 'wanabe surfer', 'optimist']
const shortWord = document.querySelector('span.shortword')
const longWord = document.querySelector('span.longword')
//see in old.js for the prev. 

//storing trigger buttons to control what to do 
const upButtonShort = document.querySelector('div.uparrow.short')
const downButtonShort = document.querySelector('div.downarrow.short')
const upButtonLong = document.querySelector('div.uparrow.long')
const downButtonLong = document.querySelector('div.downarrow.long')



let startSlots = (array, word) => {
    //starting condition 
    const mid = Math.floor(array.length / 2) 
    const startWord = document.createTextNode(array[mid])
    word.appendChild(startWord) //adding initial word to the span 
    // console.log(word.innerHTML) //checking to make sure we good
}

//click event for UP button 
upButtonShort.addEventListener("click", () => {
    animateUp(shortWord, shortNouns)
})

upButtonLong.addEventListener("click", () => {
    animateUp(longWord, longNouns)
})

downButtonShort.addEventListener("click", () => {
    animateDown(shortWord, shortNouns)
})

downButtonLong.addEventListener("click", () => {
    animateDown(longWord, longNouns)
})


const advanceSlot = (wordList, wordSpan) => {
    //console.log("slot advances")
    //get index of currently displayed word 
    let curWord = wordSpan.textContent; 
    let curPosition = wordList.indexOf(curWord)
    let nextPosition = curPosition + 1
    if (nextPosition >= wordList.length){
        nextPosition = 0
     }
    //console.log(curPosition, nextPosition)

    //create new text node
    word = document.createTextNode(wordList[nextPosition])

    //replace existing text node with new text node 
    wordSpan.replaceChild(word, wordSpan.childNodes[0])

}


const decreaseSlot = (wordList, wordSpan) => {
    let curWord = wordSpan.textContent; 
    let curPosition = wordList.indexOf(curWord)
    let nextPosition = curPosition - 1
    if (nextPosition < 0){
        nextPosition = wordList.length - 1 
    }
        //create new text node
        word = document.createTextNode(wordList[nextPosition])

        //replace existing text node with new text node 
        wordSpan.replaceChild(word, wordSpan.childNodes[0])
    
}

const animateDown = (word, wordList) =>{

    word.style.transform = 'translate(0, 100%)'
    setTimeout(()=>{ decreaseSlot(wordList, word)}, 300)
    setTimeout( () => {word.style.opacity = '0'}, 300)
    setTimeout( () => {word.style.transform = 'translate(0, -100%)'}, 300)
    setTimeout( () => {word.style.opacity = '1'}, 460)
    setTimeout( () => {word.style.transform = 'translate(0, 0)'}, 460)
}


const animateUp = (word, wordList) => {
    word.style.transform = 'translate(0, -100%)'

    setTimeout( ()=>{ advanceSlot(wordList, word)}, 300)
    setTimeout( () => {word.style.opacity = '0'}, 300)
    setTimeout( () => {word.style.transform = 'translate(0, 100%)'}, 300)
    setTimeout( () => {word.style.opacity = '1'}, 450)
    setTimeout( () => {word.style.transform = 'translate(0, 0)'}, 450)
}





startSlots(shortNouns, shortWord)
startSlots(longNouns, longWord)
