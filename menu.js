$(document).ready(function(){

    $(".burger-nav").on("click", function(){

        $("ul.nav-links").toggleClass("open");

    });

});


// function toggleClass(){
//     let menu = document.querySelectorAll(ul.nav-links);
//     menu.classList.toggle("toggleCls");
// }