$(document).ready(function(){
  let albumBoxEL = document.querySelectorAll(".album-box");
  let albumAllSelect = document.querySelectorAll(".albums");
  const rankWrpperEl = document.querySelectorAll(".swiperChart__container");

  let swiper9 = new Swiper(".bannerSwiper", {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
  });

  for (let i = 0; i < albumAllSelect.length; i += 1) {
    let swiper2 = new Swiper(albumAllSelect[i], {
      cssMode: true,
      direction: "horizontal",
      slidesPerView: 6,
      // slidesPerView: auto,
      spaceBetween: 5,
      navigation: {
        nextEl: `.swiper-button-next.mainSwiper${i}`,
        prevEl: `.swiper-button-prev.mainSwiper${i}`,
      },
      // pagination: {
      //   el: ".swiper-pagination.chartBullet",
      // },
      mousewheel: true,
      keyboard: true,

      slideToClickedSlide: false,
    });
  }
  for (let i = 0; i < albumAllSelect.length; i += 1) {
    let swiper2 = new Swiper(albumAllSelect[i], {
      cssMode: true,
      direction: "horizontal",
      slidesPerView: 6,
      spaceBetween: 5,
      navigation: {
        nextEl: `.swiper-button-next.mainSwiper${i}`,
        prevEl: `.swiper-button-prev.mainSwiper${i}`,
      },
      // pagination: {
      //   el: ".swiper-pagination.chartBullet",
      // },
      mousewheel: true,
      keyboard: true,

      slideToClickedSlide: false,
    });
  }

  for (let i = 0; i < rankWrpperEl.length; i += 1) {
    let swiperChar0 = new Swiper(rankWrpperEl[i], {
      direction: 'horizontal',
      cssMode: true,
      slidesPerView: 5,
      spaceBetween: 50,
      navigation: {
        nextEl: `.swiper-button-next.chartBtn${i}`,
        prevEl: `.swiper-button-prev.chartBtn${i}`,
      },
      mousewheel: true,
      keyboard: true,
      slideToClickedSlide: false,
    });
  }

  for (let i = 0; i < albumBoxEL.length; i += 1) {
    let albumBoxTaget = albumBoxEL[i];
    albumBoxTaget.addEventListener('mouseover', (e) => {
      let eTarget = e.target;
      eTarget.classList.add("on");
    });
    albumBoxTaget.addEventListener('mouseout', (e) => {
      let eTarget = e.target;
      eTarget.classList.remove("on");
    });
  }
});
