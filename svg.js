//setting a blank array of points
//all of these vars are declared in transitionsBaby, to avoid them being double/triple declared
let bigAF, smallAF
let t = 0;

function runBigWaves() {
  xPoints = [];

  //adding points to the array
  for (let i = 0; i < 1300; i++) {
    xPoints.push(i);
  }
  //set initial time to 0 - also declared in transitionsBaby
 
  //purpose: making the wave move
  function animateBig() {
    //map each point to a specific place using sin waves
    let points = xPoints.map((x) => {
      // y = height from top + Math.sin(x/frequency) + amplitude
      //for phone styles

       //desktop
       let y = 33 + Math.sin((x + t) / 15) * 15;

       //mobile
      if (window.innerWidth <= 600){
        y = 33 + Math.sin((x + t) / 10) * 15;
      }
      
      return [x, y];
    });

    //creates the text array of points we need
    let path =
      "M" +
      points
        .map((p) => {
          return p[0] + "," + p[1];
        })
        .join(" L");

    //sets the attribute on the path element
    let waves = document.querySelectorAll("path.big-wave");

    waves.forEach((wave) => {
      wave.setAttribute("d", path)
    });

    //increasing time by 0.5
    t += 0.5;

    //get the animation frame
    //requestAnimationFrame(animateBig);
    bigAF = requestAnimationFrame(animateBig)
  }
  animateBig();
}

runBigWaves();





//small wave (for name wave and other accents)

function runSmallWaves() {
  qs = [];
  for (let i = 0; i < 170; i++) {
    qs.push(i);
  }

  //PURPOSE: moves small wave
  function animateSmall() {
    //map each point to a specific place using sin waves
    let points = qs.map((x) => {
      // y = height from top + Math.sin(x/frequency) + amplitude
      let y = 10 + Math.sin((x + t) / 6) * 6;
      if (window.innerWidth <= 600){
        y = 3 + Math.sin((x + t) / 3) * 1.5;
      }
      
      return [x, y];
      console.log(y)
    });

    //creates the text array of points we need
    let path =
      "M" +
      points
        .map((p) => {
          return p[0] + "," + p[1];
        })
        .join(" L");

    //sets the attribute on the path element
    let smallWaves = document.querySelectorAll("path.small-wave");

    smallWaves.forEach((wave) => {
      wave.setAttribute("d", path)
    });

    //increasing time by 0.005
    t += 0.005;

    //get the animation frame
    smallAF = requestAnimationFrame(animateSmall);
    
  }
  animateSmall();
}

runSmallWaves()



destroyAnimations = () => {
  document.querySelectorAll("path.big-wave").forEach((wave) => {
    wave.removeAttribute("d");
  });

  document.querySelectorAll("path.small-wave").forEach((wave) => {
    wave.removeAttribute("d");
  });
    cancelAnimationFrame(bigAF)
    cancelAnimationFrame(smallAF)
};

//positioning the small wave under my name
//positioning the "pronounce" text over my name

placeElements = () => {
  let name = document.querySelector("span.name");

  let nameWave = document.querySelector("div.name-wave");
  let pronounceText = document.querySelector("span.pronounce");

  let nameX = name.getBoundingClientRect().left;
  let nameY = name.getBoundingClientRect().bottom;
  let nameYTop = name.getBoundingClientRect().top;
  let nameW = name.getBoundingClientRect().width;


  if (window.innerWidth > 600){
    //for desktop styles
    pronounceText.style.top = nameYTop - 50 + `px`;
    pronounceText.style.left = nameX - nameW / 2.5 + `px`;
  
  } else {
    //for phone styles
    pronounceText.style.top = nameYTop - 30 + `px`;
    pronounceText.style.left = nameX - nameW / 1.1 + `px`;
  }

  nameWave.style.top = window.pageYOffset + nameY + `px`;
  nameWave.style.left = nameX + `px`;
  nameWave.style.width = nameW - 6 + `px`;

  if (nameY === 0 || nameX === 0) {
    nameWave.style.top = `380px`;
    nameWave.style.left = `398.7px`;
    nameWave.style.width = `103.25px`;

    pronounceText.style.top = `270px`;
    pronounceText.style.left = `357.43px`;
  }

  //add event listener to name on mobile 

  
    name.addEventListener("click", function (){
      pronounceText.classList.add("visible")

      // set opacity back to 0 after 3s

      setTimeout( function (){
        pronounceText.classList.remove("visible")
      }, 3000)

    })

  

 
};
