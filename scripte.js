window.addEventListener('scroll', ()=> {
                document.getElementById("nav").classList.add("scrolled");
            });


window.onscroll = function () {
                if (window.pageYOffset <= 10) {
                  document.getElementById("nav").classList.remove("scrolled");
                }
                
            };

var menu = document.getElementById("bar");
var itmes = document.getElementById("navbar");

itmes.style.right = "-360px";

menu.onclick = function () {
    if(itmes.style.right == "-360px") {
        itmes.style.right = "0";
       }else {
           itmes.style.right = "-360px";
       }
}

function activ1() {
    document.getElementById("h").classList.add("active");
    document.getElementById("s").classList.remove("active");
    document.getElementById("p").classList.remove("active");
    document.getElementById("c").classList.remove("active");
}

function activ2 () {
    document.getElementById("s").classList.add("active");
    document.getElementById("h").classList.remove("active");
    document.getElementById("p").classList.remove("active");
    document.getElementById("c").classList.remove("active");
}

function activ3 () {
    document.getElementById("p").classList.add("active");
    document.getElementById("s").classList.remove("active");
    document.getElementById("h").classList.remove("active");
    document.getElementById("c").classList.remove("active");
}

function activ4 () {
    document.getElementById("c").classList.add("active");
    document.getElementById("s").classList.remove("active");
    document.getElementById("p").classList.remove("active");
    document.getElementById("p").classList.remove("active");
}
