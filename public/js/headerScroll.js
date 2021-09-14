$(function () {
    $(document).scroll(function () {
        var $nav = $(".headerContainer");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
});