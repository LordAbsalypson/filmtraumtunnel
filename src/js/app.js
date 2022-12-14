        // init Swiper:
        const swiper = new Swiper('.swiper', {
          // Optional parameters
          loop: true,
          grabCursor: true,
          speed: 800,
          // autoplay: {
          //   delay: 2500,
          // },
          pauseOnMouseEnter: true,
        });

//title change

    window.onload = function() {

        var pageTitle = document.title;
        var attentionMessage = 'Komm zurück!!! 🎈';

        document.addEventListener('visibilitychange', function(e) {
            var isPageActive = !document.hidden;

            if(!isPageActive){
                document.title = attentionMessage;
            }else {
                document.title = pageTitle;
            }
        });
    };

    // lottie
LottieInteractivity.create({
  player: "#burgerMenu",
  mode:"cursor",
  speed:1,
  direction:-1,
  actions: [
      {
          type: "toggle",
      }
  ]
});

// nav
const burgerMenu = document.querySelector(".navbar-toggler");

burgerMenu.addEventListener("click", function(){
  let navOpen = document.querySelector('.navbar-menu');
  navOpen.classList.toggle('open')
  document.body.classList.toggle('nav-open')

});


  
let navbar = document.querySelector('.navbar');
let navbarWidth = navbar.offsetWidth;
let docWidth = document.documentElement.clientWidth;
let left = (docWidth - navbarWidth) * .5;

navbar.style.setProperty('--left', left + "px");

document.addEventListener('resize', () => {
  navbarWidth = navbar.offsetWidth;
  docWidth = document.offsetWidth;
  left = (docWidth - navbarWidth) * .5;
  navbar.style.setProperty('--left', navbarWidth * .5 + "px");
})

// nav hide on scroll
var lastScrollTop = window.pageYOffset; // This Varibale will store the top position

navbar = document.querySelector('#navbar'); // Get The NavBar

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
 var scrollTop = window.pageYOffset;
 //This line will get the location on scroll
 
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    navbar.classList.add('scrolled');
  //set the value to the negetive of height of navbar 
  } else{
    navbar.classList.remove('scrolled')
  }
  
  lastScrollTop = scrollTop; //New Position Stored
});