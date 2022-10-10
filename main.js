$(function () {
  $("header").addClass("fadein-active02");

  $(".catch-copy").addClass("fadein-active01");

  $(".img-wrap img:nth-child(n+2)").hide();
  setInterval(function () {
    $(".img-wrap img:first-child").fadeOut(2000);
    $(".img-wrap img:nth-child(2)").fadeIn(2000);
    $(".img-wrap img:first-child").appendTo(".img-wrap");
  }, 4000);

  $(window).scroll(function () {
    $(".fadein-scroll").each(function () {
      const elemPos = $(this).offset().top,
        windowHeight = $(window).height();
      scroll = $(window).scrollTop();

      if (scroll > elemPos - windowHeight) {
        $(this).addClass("fadein-active01");
      }

      if (
        scroll > elemPos + $(this).height() ||
        scroll < elemPos - windowHeight
      ) {
        $(this).removeClass("fadein-active01");
      }
    });
  });
});
