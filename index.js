
      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        breakpoints:{
          350: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          450:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }
        
      });
      var swiper2 = new Swiper(".mySwiper2", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        breakpoints:{
          350: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          450:{
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }
      });