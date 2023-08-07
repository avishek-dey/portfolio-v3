// toggle dark mode
    
  const modeToggle = document.getElementById('mode-toggle');

  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  

  const modeToggleBtn = document.getElementById('mode-toggle');
  let isDarkMode = false;
  
  function toggleMode() {
    // Toggle the isDarkMode flag
    isDarkMode = !isDarkMode;
  
    // Add or remove the appropriate CSS class based on the isDarkMode flag
    if (isDarkMode) {
      modeToggleBtn.classList.add('dark-mode-icon');
      modeToggleBtn.classList.add('ri-sun-line');
      modeToggleBtn.classList.remove('light-mode-icon');
      modeToggleBtn.classList.remove('ri-moon-line');
    } else {
      modeToggleBtn.classList.add('light-mode-icon');
      modeToggleBtn.classList.add('ri-moon-line');
      modeToggleBtn.classList.remove('dark-mode-icon');
      modeToggleBtn.classList.remove('ri-sun-line');
    }
    
    // Add a class to trigger the transition
    modeToggleBtn.classList.add('transition');

    // Remove the transition class after a short delay to allow the transition to occur
    setTimeout(() => {
        modeToggleBtn.classList.remove('transition');
    }, 400); // Adjust the delay value to match your CSS transition duration
   
  }

const cursorSmall = document.querySelector('.cursor');
const positionElement = (e)=> {
  const mouseY = e.clientY -5;
  const mouseX = e.clientX -28;

  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', positionElement)

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function onScroll() {
  const heading = document.querySelector('.animate-heading');

  if (isInViewport(heading)) {
    heading.classList.add('show-animation');
  }
}

// Attach the onScroll function to the scroll event
window.addEventListener('scroll', onScroll);

// gsap animation

let tl = gsap.timeline()
function time (){
  var a = 0
  setInterval(function(){
    a = a + Math.floor(Math.random()*20)
    if(a<100){
      document.querySelector("#loading-screen h5").innerHTML = a + "%" 
    }
    else{
      a = 100
      document.querySelector("#loading-screen h5").innerHTML = a + "%"
    }
  },150)
}
time()

// gsap.to("#section-3 #text",{
//   fontWeight:"100",
//   transform: "translateX(-250%)",
//   scrollTrigger:{
//     trigger:"#section-3",
//     scroller:"body",
//     // markers:true,
//     scrub:1,
//     start:"top -10%",
//     end: "top -100%",
//     pin:true,
//   }
// })


tl.to("#loading-screen h5",{
 delay: 0.5,
 duration:1,
 onStart: time(),
 })

tl.to("#loading-screen",{
 top:"-120vh",
 duration:.5,
  })

tl.from("#heading",{
 scale: 100,
 delay:-1,
 opacity:0,
 duration:1,
 onComplete:time(),

})

tl.to("#ribbon",{
// scale:2,
duration:2,
transform: "translateX(-100%)",
// scrollTrigger:{
//   trigger:"#ribbon",
//   scoller:"body",
//   markers: true,
//   start:"top 80%",
//   end: "top 60%",
//   scrub:10,
//   pin:true,
// }
})


// tl.to("#section-5 #h2",{
//   transform: "translateX(-10%)",
//   duration:1,
//   scrollTrigger:{
//     trigger:"#h2",
//     scroller:"body",
//     // markers:true,
//     scrubs:1,
//     start:"top 60%",
//     end: "top 40%",
//     // pin:true,
//   }

// } )




const speed = 100;

let target = document.querySelector(".news_gsap");
let original_html = target.innerHTML;
let new_html = "<div class='ticker-items'>" + original_html + "</div>";
target.innerHTML = new_html;
target.innerHTML += new_html;

let tickerWidth = document.querySelector(".ticker-items").offsetWidth;
let initDuration = tickerWidth / speed;

gsap.to(".ticker-items", {
  duration: initDuration,
  xPercent: -100,
  ease: "none",
  repeat: -1
});


// gallery aniamtion

const slides = document.querySelectorAll('.slide');
let active = document.querySelector('.slide.active');

slides.forEach((slide) => {
  slide.onclick = () => {
    active.classList.remove('active');
    active = slide;
    slide.classList.add('active');
  }
})




