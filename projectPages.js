//grab previous and next div tags
const prevTags = document.querySelectorAll(".back-next .previous")
const nextTags = document.querySelectorAll(".back-next .next")

//use forEach on each section to grab titles and arrows



const moveTags = (tags) =>{

    tags.forEach(tag => {

    const title = tag.querySelector("span.title")
    const arrow = tag.querySelector(".arrow-container")
    const pageLink = tag.querySelector("a")
    let arrowSide
    let titleSide

    if (tags == prevTags){
        arrowSide = arrow.getBoundingClientRect().left;
        titleSide = title.getBoundingClientRect().left;
        //console.log ("running on previous!")
    } else if (tags == nextTags){
        arrowSide = arrow.getBoundingClientRect().right;
        titleSide = title.getBoundingClientRect().right;
       // console.log("running on next!")
        //console.log ( arrowSide, titleSide)
    } else {
        arrowSide = 0
        titleSide = 0
        console.log("error finding arrow and side locations")
    }

    //on mouseOver, translate the arrow  currentcorner - wordcorner for left
    //or, wordCorner - currentCorner for right
    pageLink.addEventListener("mouseover", () => {
        let difference
        difference = titleSide - arrowSide
        arrow.style.transform = `translateX(${difference}px)`
      
     })
 
     pageLink.addEventListener("mouseleave", () => {
         arrow.style.transform = `translateX(0px)`
      })

    })

}

moveTags(prevTags)
moveTags(nextTags)