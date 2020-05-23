//dragability
//cardTags, containers are consts
//draggies is a let
//card array is a let
const twoPi = Math.PI * 2;

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

let contactSection = document.querySelector("section.contact");

const indexShape = (sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(450, 450);

    contactSection.appendChild(sketch.canvas);
  };

  sketch.draw = () => {
    sketch.background("transparent");
    sketch.push();
    sketch.noStroke();
    sketch.translate(sketch.width * 0.5, sketch.height * 0.5);
    sketch.fill("#E2EEF1");
    sketch.rotate(sketch.frameCount / -200.0);
    polygon(0, 0, 170, 6, sketch);
    sketch.pop();
  };
};

//save as a global (is there a better way to do this?)
let drawIndexShape; 


//remove all shapes when you leave the page
let removeShapes = () => {
  drawIndexShape.remove();
};

//draw all shapes on index load
const drawIndexShapes = () => {
  if (document.querySelector("body").classList.contains("index")) {
    contactSection = document.querySelector("section.contact");
    //console.log(contactSection);

    //this line actually draws the shape
    drawIndexShape = new p5(indexShape);

    //console.log("drawn");
    return true;
  } else {
    return false;
  }
};

//instantiated polygon function
function polygon(x, y, radius, npoints, sketch) {
  let angle = sketch.TWO_PI / npoints;
  sketch.beginShape();
  for (let a = 0; a < sketch.TWO_PI; a += angle) {
    let sx = x + sketch.cos(a) * radius;
    let sy = y + sketch.sin(a) * radius;
    sketch.vertex(sx, sy);
  }
  sketch.endShape(sketch.CLOSE);
}
