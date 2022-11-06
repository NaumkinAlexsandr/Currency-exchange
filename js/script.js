$(function () {
  $('a[href^="#"]').click(function () {
    var target = $(this).attr("href");
    if ($(window).width() < 1024) {
      $("html, body").animate(
        { scrollTop: $(target).offset().top - 145 },
        1000
      );
      return false;
    } else {
      $("html, body").animate({ scrollTop: $(target).offset().top - 97 }, 1000);
      return false;
    }
  });
});
