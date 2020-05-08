const lastSection = document.querySelector("section.contact")
//

function setup(){
    let cnavas = createCanvas(450, 450)
    lastSection.appendChild(canvas)
   // console.log(lastSection)
}

function draw(){
    background("#ffffff")
    push();
    noStroke();
    translate(width * 0.5, height * 0.5);
    fill("#E2EEF1")
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