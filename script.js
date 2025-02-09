var btmbutton = document.querySelectorAll(".footer .elem");
var matchInfo = document.querySelectorAll(".match");
var back = document.querySelector("#back-btn");

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

back.addEventListener("click", function () {
    window.location.href = `index.html`;
})