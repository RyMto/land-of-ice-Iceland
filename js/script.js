$(function () {
  $('.slider').slick({
    autoplay: true,
    arrows: false,
    swipe: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    dots: false,
  });
});

$(function () {
  $('.natureScrollSlider1').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 5,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});

$(function () {
  $('.natureScrollSlider2').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    arrows: false,
    swipe: false,
    slidesToShow: 5,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    rtl: true,
  });
});

// star
window.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelector(".stars");
  const createStar = () => {
    const starEl = document.createElement("span");
    starEl.className = "star";
    const minSize = 1;
    const maxSize = 2;
    const size = Math.random() * (maxSize - minSize) + minSize;
    starEl.style.width = `${size}px`;
    starEl.style.height = `${size}px`;
    starEl.style.left = `${Math.random() * 100}%`;
    starEl.style.top = `${Math.random() * 100}%`;
    starEl.style.animationDelay = `${Math.random() * 10}s`;
    stars.appendChild(starEl);
  };

  for (let i = 0; i <= 500; i++) {
    createStar();
  }
});

// link
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 2000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// Aurora
function EachTextAnimeControl() {
  $('.eachTextAnimeAurora').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

$(window).scroll(function () {
  EachTextAnimeControl();
});

$(window).on('load', function () {
  var element = $(".eachTextAnimeAurora");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });
  EachTextAnimeControl();
});

// under
function fadeAnime() {

  $('.fadeInTriggerUnderText').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });
}

$(window).scroll(function () {
  fadeAnime();
});

$(window).on('load', function () {
  fadeAnime();
});