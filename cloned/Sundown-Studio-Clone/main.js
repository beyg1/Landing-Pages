
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
  smooth = true;
}

requestAnimationFrame(raf)

let main = document.querySelector("#main")
let textCon = document.querySelector(".section-3-content")
let elemants =document.querySelectorAll(".projects-showcase")
let fixImage = document.querySelector(".fixed-image")
let showImage = document.querySelector(".projects-showcase-image")

// Effect For Showing Image When Hovering On Projects-Showcase

function HoverEffect() {

textCon.addEventListener("mouseenter", function(){
    fixImage.style.display = "block"
})

textCon.addEventListener("mouseleave", function(){
    fixImage.style.display = "none"
})

elemants.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        let image = e.getAttribute("data-image")
        fixImage.style.backgroundImage = `url(${image})`
    })
})

}


let button1 = document.querySelector('.hello1')
let button2 = document.querySelector('.hello2')
let button3 = document.querySelector('.hello3')
let line = document.querySelector('.line')
let right = document.querySelector('#right')
let para = document.querySelector('.para')

// Effect For Changing Image And Paragraph When Clicking on Each Button

function ImageChanger(){
    button1.addEventListener('click', function(){
        line.style.top = (0) + "%";
        button1.style.color = "white";
        button2.style.color = "#504A45";
        button3.style.color = "#504A45";
        let bgimage1 = button1.getAttribute("data-bgimage");
        right.style.backgroundImage = `url(${bgimage1})`;
        para.innerHTML = "Our \nteam works with our clients to refine an idea \n and concept into an executable design. We create \n a final design that encompasses the brand \n narrative to bring stories to life and provide end- \n to-end design solutions from concept, design, and <br> architectural drawings to 3D renderings."
        let opacity = 0;
      let fadeIn = setInterval(() => { // Fade In Effect
         if (opacity >= 1) {
            clearInterval(fadeIn);
         }
         para.style.opacity = opacity;
         right.style.opacity = opacity;
         opacity += 0.02;
      }, 10);
    
    })
    
    button2.addEventListener('click', function(){
        line.style.top = (33.33333333333) + "%";
        button1.style.color = "#504A45";
        button2.style.color = "white";
        button3.style.color = "#504A45";
        let bgimage2 = button2.getAttribute("data-bgimage");
        right.style.backgroundImage = `url(${bgimage2})`;
        para.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
        let opacity = 0;
      let fadeIn = setInterval(() => {
         if (opacity >= 1) {
            clearInterval(fadeIn);
         }
         para.style.opacity = opacity;
         right.style.opacity = opacity;
         opacity += 0.02;
      }, 10);

    })
    
    button3.addEventListener('click', function(){
        line.style.top = (66.66666667) + "%";
        button1.style.color = "#504A45";
        button2.style.color = "#504A45";
        button3.style.color = "white";
        let bgimage3 = button3.getAttribute("data-bgimage");
        right.style.backgroundImage = `url(${bgimage3})`;
        para.innerHTML = ("We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.")
        let opacity = 0;
      let fadeIn = setInterval(() => {
         if (opacity >= 1) {
            clearInterval(fadeIn);
         }
         para.style.opacity = opacity;
         right.style.opacity = opacity;
         opacity += 0.02;
      }, 10);
    
    })
}


let menu = document.querySelector(".menu");
let menuOverlay = document.querySelector(".menu-overlay");
let logo = document.querySelector(".logo")
let switcher = 0;

// menu effect for mobile screen

menu.addEventListener("click", function(){
  
  if (switcher == 0) {
    menuOverlay.style.top = 0;
    logo.style.opacity = 0;
    switcher = 1;
  } else {
    menuOverlay.style.top = "-100%";
    menuOverlay.smooth = true;
    logo.style.opacity = 1;
    switcher = 0;
  }
})



ImageChanger()
HoverEffect()
