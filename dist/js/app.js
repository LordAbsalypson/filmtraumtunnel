const swiper=new Swiper(".swiper",{loop:!0,grabCursor:!0,autoplay:{delay:4e3,disableOnInteraction:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"}});window.onload=function(){var n=document.title;document.addEventListener("visibilitychange",(function(t){var e=!document.hidden;document.title=e?n:"Komm zurück!!! 🎈"}))};