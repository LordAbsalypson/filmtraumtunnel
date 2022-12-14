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
