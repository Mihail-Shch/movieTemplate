const slide = document.querySelectorAll('.swiper-slide');


slide.forEach(function(item) {
    item.addEventListener("click", function() {
      if (! item.classList.contains("slide-active")) {
          item.classList.add("slide-active")
      } else {
          item.classList.remove("slide-active")
      }
    })
});

var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 7,
    spaceBetween: 30,
    touchRatio: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

var swiper = new Swiper('.swiper-container2', {
    loop: true,
    slidesPerView: 5,
    touchRatio: 0,
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
      },
});
