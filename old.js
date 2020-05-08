let addWordsToTag = (array, wordList, slot) => {
    console.log(slot)
    //find the middle word in the list to begin the slot 
    const mid = Math.floor(array.length/ 2 )

    //add all words in the array to the page 
    for (let i = 0; i < array.length; i++){
        //create a blank span element and a textNode element
        let word = document.createElement("SPAN")
        let text = document.createTextNode(array[i])

        //add a hidden class to all words 
        //for the middle word, add a class of "inSlot"
        if(i == mid){
            word.classList.add("inSlot")
            //word.parentNode.removeChild(word)
            slot.appendChild(word)
            
        } else {
            word.classList.add("hidden")
        }

        //add text to spans and spans to div 
        word.appendChild(text)
        wordList.appendChild(word)
    }
}


span.hidden{
	display:block;
	opacity:0;
	height:52px;

	font-size: 48px;
	font-weight:600;
	text-align:center;

	transition:opacity 0.2 ease
}

span.inSlot{
	opacity:1
	
}
