  $(document).ready(function(){
  $(".menuImgDiv").click(function() {
    $(".menuBarDiv").slideToggle(0, function() {
      $(this).toggleClass("nav-expanded").css('display','');
    });
    $(".bodyRightDiv").slideToggle(0, function() {
      $(this).toggleClass("nav-non-expanded").css('display','');
    });
  });
});