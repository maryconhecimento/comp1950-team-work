/*
Author: Pin-Chen, Chen
*/
window.onload = function () {
    $("nav>ul>li").click(function() {
     $(this)
         .parent()
         .find(".hide")
         .slideToggle();
    });
}