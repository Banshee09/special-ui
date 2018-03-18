// $(document).ready(function () {
//   $(".navbar-collapse li a").click(function (event) {
//     $(".navbar-collapse").collapse('hide');
//   });
// });

$(document).click(function (e) {
  if (!$(e.target).is('.nav-bar')) {
    $('.navbar-collapse').collapse('hide');
  }
});