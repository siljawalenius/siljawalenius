const bodyTag = document.querySelector("body")
const projectTags = document.querySelectorAll("section.projects div.project-container")


let easing = t => 1-(--t)*t*t*t //taken from github 


//on page scroll, parallax things
// parallax is a ratio from middle dist. scrolled to middle point of anchor
document.addEventListener("scroll", function(){
    const pixels = window.pageYOffset
    const midView = pixels + window.innerHeight/2

    projectTags.forEach(project => {
        const topProject = project.offsetTop
        const midProject = topProject + (project.offsetHeight / 2)
        const distToSect = midView - midProject
        const title = project.querySelector("div.project-title")
        const speed = parseFloat(title.getAttribute("data-parallax"))

        const parAmount = distToSect * speed * 0.5
    
        // NOTE: THE VERTICAL TRANSLATE CODE WILL NOT WORK IF YOU EVER WANT TO PARRALAX THE THINGS IN X! 
        //YOU'RE GONNA HAVE TO REDO IT 
        title.style.transform = `translateY(${parAmount * -1}px)`
        
    })

    const record = document.querySelector(".record img")
    let rotation = pixels / 5
   // console.log(pixels)
    record.style.transform = `rotate(${rotation}deg)`

})

// on project hovers, translate the titles up by 10px 

projectTags.forEach(project => {
    const title = project.querySelector("div.project-title")
    let translateString
    const tile = project.querySelector(".tile-info a")

    //we have to do these transforms here instead of with classes
    //since theyre JS parallaxed elements 

    tile.addEventListener("mouseover", () => {

        //  NOTE: THIS CODE WILL NOT WORK IF YOU EVER WANT TO PARRALAX THE THINGS IN X! 
        //YOU'RE GONNA HAVE TO REDO IT 

        translateString = title.style.transform //this outputs a full property
        //get the number out of the property name 
        let commaNum = translateString.indexOf("(") + 1
        let inNum = translateString.substring(commaNum)
        inAmount = parseFloat(inNum)
        //inAmount = parseFloat(translateString.replace(/[^\d.]/g, ''))

        //curAmount = window.getComputedStyle(title).getPropertyValue('transform');

        //console.log(commaNum, bracketNum)
        console.log("In" + translateString)
        console.log("NuminNum  " + inNum)
        console.log("In" + inAmount)

        if( inAmount >= 0){
            title.style.transform = `translateY(${-10}px)`
        } 
        if (inAmount < 0){
            title.style.transform = `translateY(${(inAmount -10)}px)`
        }
        
    })

    tile.addEventListener('mouseout', () => {

        console.log("out" + inAmount)
        title.style.transform = `translateY(${inAmount}px)`
    })
    
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
