const pageBody = document.querySelector("body");
const wiper = document.createElement("div");
wiper.classList.add("wiper");
pageBody.appendChild(wiper);

//grab previous and next div tags
prevTags = document.querySelectorAll(".back-next .previous");
nextTags = document.querySelectorAll(".back-next .next");

//declaring all global vars here to avoid them being double declared
let xPoints, cardTags, cardContainer, draggies, cardArray, qs;

console.log("🤟🏼🚀🌙hand coded with love by @siljawalenius 🌙🚀🤟🏼")

barba.use(barbaPrefetch);
barba.init({
  debug: false,
  transitions: [
    {
      name: "rightSwipe",
      custom({ current, next, trigger }) {
        return (
          (trigger.classList && trigger.classList.contains("right")) ||
          trigger === "right"
        );
      },
      leave({ current, next, trigger }) {
        return new Promise((resolve) => {
          const timeline = gsap.timeline({
            onComplete() {
              current.container.remove();
              resolve();
            },
          });

          if (trigger.classList.contains("blue")) {
            wiper.style.backgroundColor = "var(--blue)";
          } else if (trigger.classList.contains("pink")) {
            wiper.style.backgroundColor = "var(--pink)";
          } else if (trigger.classList.contains("green")) {
            wiper.style.backgroundColor = "var(--green)";
          } else if (trigger.classList.contains("yellow")) {
            wiper.style.backgroundColor = "var(--yellow)";
          } else {
            wiper.style.backgroundColor = "var(--lightgrey)";
          }

          timeline.set(wiper, { x: "-100%" }).to(wiper, { x: 0 });
        });
      },

      enter({ current, next, trigger }) {
        return new Promise((resolve) => {
          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            },
          });

          const proj = next.container.querySelector(".project-container");

          timeline

            .set(proj, { opacity: 0.25, x: -700 })
            .to(proj, { opacity: 1, x: 0 }, 0)
            .to(wiper, { x: "100%" }, 1);
        });
      }
    },
    {
      name: "leftSwipe",
      leave({ current, next, trigger }) {
        return new Promise((resolve) => {
          const timeline = gsap.timeline({
            onComplete() {
              current.container.remove();
              resolve();
            },
          });

          const proj = current.container.querySelector(".project-container");

          if (trigger.classList.contains("blue")) {
            wiper.style.backgroundColor = "var(--blue)";
          } else if (trigger.classList.contains("pink")) {
            wiper.style.backgroundColor = "var(--pink)";
          } else if (trigger.classList.contains("green")) {
            wiper.style.backgroundColor = "var(--green)";
          } else if (trigger.classList.contains("yellow")) {
            wiper.style.backgroundColor = "var(--yellow)";
          } else {
            wiper.style.backgroundColor = "var(--lightgrey)";
          }

          timeline.set(wiper, { x: "100%" }).to(wiper, { x: 0 });
        });
      },

      enter({ current, next, trigger }) {
        return new Promise((resolve) => {
          const timeline = gsap.timeline({
            onComplete() {
              resolve();
            },
          });
          const proj = next.container.querySelector(".project-container");

          timeline

            .set(proj, { opacity: 0.25, x: -700 })
            .to(proj, { opacity: 1, x: 0 }, 0)
            .to(wiper, { x: "-100%" }, 1);
        });
      },
    },
  ],
  views: [
    {
      namespace: "index",
      beforeEnter(data) {
        destroyAnimations();
        runContent();
        runDraggies();
        runBigWaves();
        runSmallWaves();
        placeElements();
        drawIndexShapes();
        

        window.addEventListener("resize", () => {
          placeElements();
        });

        document
          .querySelector("span.name")
          .addEventListener("mouseover", () => {
            //console.log("mouseover!")
            document.querySelector("span.pronounce").classList.add("visible");
          });
        document.querySelector("span.name").addEventListener("mouseout", () => {
          document.querySelector("span.pronounce").classList.remove("visible");
        });

        window.scroll(0,0)
      },
      afterLeave(data) {
        destroyAnimations();

        window.removeEventListener("resize", () => {
          placeElements();
        });
      },
    },
    {
      namespace: "project",
      beforeEnter(data) {
        //console.log("project:beforeEnter");
        destroyAnimations();
        runBigWaves();
        let prevTags = document.querySelectorAll(".back-next .previous");
        let nextTags = document.querySelectorAll(".back-next .next");
        moveTags(prevTags);
        moveTags(nextTags);
        window.scroll(0,0)
      },
    },
    {
      namespace: "sketchbook",
      beforeEnter(data) {
        runContentfulOnLoad();
        destroyAnimations();
        runBigWaves();
        window.scroll(0,0)
      },
    },
  ]
});
