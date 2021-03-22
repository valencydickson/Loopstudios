$(document).ready(function () {
  let toggler = $(".toggler-icon img");

  toggler.click(function () {
    $(".navigation").toggleClass("nav-bg");

    //change img src attritube of toggler icon
    if ($(".navigation").hasClass("nav-bg")) {
      toggler.attr("src", "images/icon-close.svg");
    } else {
      toggler.attr("src", "images/icon-hamburger.svg");
    }
  });

  if ($(window).width() < 768) {
    $(".card-container:nth-child(1) .card img").attr(
      "src",
      "images/mobile/image-deep-earth.jpg"
    );

    $(".card-container:nth-child(2) .card img").attr(
      "src",
      "images/mobile/image-night-arcade.jpg"
    );

    $(".card-container:nth-child(3) .card img").attr(
      "src",
      "images/mobile/image-soccer-team.jpg"
    );

    $(".card-container:nth-child(4) .card img").attr(
      "src",
      "images/mobile/image-grid.jpg"
    );

    $(".card-container:nth-child(5) .card img").attr(
      "src",
      "images/mobile/image-from-above.jpg"
    );

    $(".card-container:nth-child(6) .card img").attr(
      "src",
      "images/mobile/image-pocket-borealis.jpg"
    );

    $(".card-container:nth-child(7) .card img").attr(
      "src",
      "images/mobile/image-curiosity.jpg"
    );

    $(".card-container:nth-child(8) .card img").attr(
      "src",
      "images/mobile/image-fisheye.jpg"
    );
    $(".footer-social").insertAfter(".bottom-nav");
  }
});
