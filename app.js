//dragability
//cardTags, containers are consts
//draggies is a let
//card array is a let

const runDraggies = () => {
  cardTags = document.querySelectorAll(".draggable");
  cardContainer = document.querySelector(".card-container");
  draggies = [];
  cardArray = [];

  // first, we need to center all the cards on the page
  //then, init draggabilly

  cardTags.forEach((card) => {
    //creating an array to pull indexes of elements more easily
    cardArray.push(card);
    let sectionHeight = cardContainer.getBoundingClientRect().height / 2.5;

    let distFromTop = sectionHeight + 30 * cardArray.indexOf(card);
    //console.log(cardArray, distFromTop)

    card.style.left = "50%";
    card.style.transform = "translate(-50%, -50%)";
    card.style.top = distFromTop + `px`;

    let draggie = new Draggabilly(card, {
      containment: cardContainer,
    });
    draggies.push(draggie);
  });
};

const isIndex = () => {
  if (document.querySelector("body").classList.contains("index")) {
  return true;
  } else {
    return false;
  }
};


let contactSection = document.querySelector("section.contact");

        
  //polygon
  function setup() {
    createCanvas(450, 450);
    contactSection.appendChild(canvas);
    // console.log(contactSection);
  }

  function draw() {
    background("transparent");
    push();
    noStroke();
    translate(width * 0.5, height * 0.5);
    fill("#E2EEF1");
    rotate(frameCount / -200.0);
    polygon(0, 0, 170, 6);
    pop();
  }

  function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
