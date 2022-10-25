    // init Swiper:
    const swiper = new Swiper ('.swiper', {
        // Optional parameters
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: true,
          },
      
        // If we need pagination
/*        pagination: {
          el: '.swiper-pagination',
        },*/
      
        // Navigation arrows
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
    
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