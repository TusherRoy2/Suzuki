$(window).scroll(function () {
  if (100 < $(window).scrollTop()) {
    $(".scroll_top a i").css({
      display: "flex",
    });
  } else {
    $(".scroll_top a i").css({
      display: "none",
    });
  }
  1 < $(window).scrollTop()
    ? $(".nav").addClass("sticky")
    : $(".nav").removeClass("sticky");

  1 < $(window).scrollTop()
    ? $(".fix_2").addClass("sticky")
    : $(".fix_2").removeClass("sticky");
});

// !Owl Carousel Start

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: 3000,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    1300: {
      items: 1,
    },
  },
});


// !Isotop Function Start
$(document).ready(function (i) {
  setTimeout(function () {
    i(".filter-button-group").on("click", "button", function () {
      var t = i(this).attr("data-filter");
      n.isotope({ filter: t });
    });
    var n = i(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: !0,
      masonry: { columnWidth: ".grid-item" },
    });
  }, 1e3);
}),
  $(".portfolio-buttons button").on("click", function () {
    $(".portfolio-buttons button").removeClass("active"),
      $(this).addClass("active");
  });

  $(".fix_2 li a").on("click", function () {
    $(".fix_2 li a").removeClass("activee"),
      $(this).addClass("activee");
  });

  $(".fix_2_m li a").on("click", function () {
    $(".fix_2_m li a").removeClass("activee"),
      $(this).addClass("activee");
  });

  
