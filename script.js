var btmbutton = document.querySelectorAll(".footer .elem");
var matchInfo = document.querySelectorAll(".match");
var back = document.querySelector("#back-btn");
var navlinks = document.querySelectorAll(".navbar2 .nav-linksi");

btmbutton.forEach(function (elem) {
    elem.addEventListener("click", function () {
        var page = elem.getAttribute("data-page");
        window.location.href = `${page}.html`;
    })
})

matchInfo.forEach(function (match) {
    match.addEventListener("click", function () {
        var page = match.getAttribute("data-match-name");
        console.log(page);
        window.location.href = `match.html`;
    })
})

function remove() {
    navlinks.forEach(function (navlink) {
        navlink.classList.remove("selected");
        var nav = navlink.getAttribute("id");
        document.getElementById(`${nav}-page`).style.display = "none";
    })
}
remove();


navlinks.forEach(function (navlink) {
    navlink.addEventListener("click", function () {
        var id = navlink.getAttribute("id");
        remove();
        navlink.classList.add("selected");
        document.getElementById(id+"-page").style.display = "flex";
    })
})


back.addEventListener("click", function () {
    window.location.href = `index.html`;
})