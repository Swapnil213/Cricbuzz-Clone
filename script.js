var btmbutton = document.querySelectorAll(".footer .elem");

btmbutton.forEach(function (elem) {
    elem.addEventListener("click", function () {
        var page = elem.getAttribute("data-page");
        window.location.href = `${page}.html`;
    })
})