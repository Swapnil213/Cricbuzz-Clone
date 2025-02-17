var btmbutton = document.querySelectorAll(".footer .elem");
// var matchInfo = document.querySelectorAll(".match");
var matchesCon = document.querySelector(".matchesContainer .matches");
var matchData = [
    { tour: "Eng Tour of India 2024-25", matchNo: "3rd ODI", winTeam: "Ind", loseTeam: "Eng", winScore: 356, loseScore: 214, winPlayedOvers: 50, losePlayedOvers: 34.2, result: "India won by 142 runs" },
    { tour: "Pakistan ODI Tri Series 2025", matchNo: "final", winTeam: "NZ", loseTeam: "PAK", winScore: 243 - 5, loseScore: 242, winPlayedOvers: 45.2, losePlayedOvers: 49.3, result: "New Zealand won by 5 wkts" },
    { tour: "Ireland Tour of Zimbabwe 2025", matchNo: "1st ODI", winTeam: "ZIM", loseTeam: "IRE", winScore: 299 - 5, loseScore: 250, winPlayedOvers: 50, losePlayedOvers: 46, result: "Zimbabwe won by 49 runs" },
    { tour: "Australia Tour of Sri lanka 2025", matchNo: "2nd ODI", winTeam: "SL", loseTeam: "AUS", winScore: 281 - 4, loseScore: 107, winPlayedOvers: 50, losePlayedOvers: 24.2, result: "Sri Lanka won by 174 runs" }
]

var back = document.querySelector("#back-btn");
var navlinks = document.querySelectorAll(".navbar2 .nav-linksi");


btmbutton.forEach(function (elem) {
    elem.addEventListener("click", function () {
        var page = elem.getAttribute("data-page");
        window.location.href = `${page}.html`;
    })
})

function gotoMatchInfo(){
    window.location.href = `match.html`;
}


function changeContent(id) {
    var selectednav = document.getElementById(id);
    navlinks.forEach(function (navlink) { 
        navlink.classList.remove("selected");
        var content = navlink.getAttribute("id");
        document.getElementById(`${content}-page`).style.display = "none";
    })
    selectednav.classList.add("selected");
    document.getElementById(`${id}-page`).style.display = "flex";
}

function backToMain(){
    window.location.href = "index.html";
}

function mainFunction() {
    var matchClutter = ""

    matchData.forEach(function (match) {
        matchClutter += `<div data-match-name="${match.tour}" onclick="gotoMatchInfo()" class="match">
                        <div class="headline">
                            <h2>Match ${match.matchNo}</h2>
                            <div id="circle"></div>
                            <h2>${match.tour}</h2>
                        </div>
                        <div class="scorecard">
                            <div class="score win">
                                <div class="left">
                                    <img src="images/perth-scorchers.webp">
                                    <h2>${match.winTeam}</h2>
                                </div>
                                <div class="right">
                                    <h2>${match.winScore}(${match.winPlayedOvers})</h2>
                                </div>
                            </div>

                            <div class="score">
                                <div class="left">
                                    <img src="images/melbourne-renegades.webp">
                                    <h2>${match.loseTeam}</h2>
                                </div>
                                <div class="right">
                                    <h2>${match.loseScore}(${match.losePlayedOvers})</h2>
                                </div>
                            </div>
                        </div>
                        <div class="result">
                            <h2>${match.result}</h2>
                        </div>
                        <div class="bottom">
                            <h2>fantasy</h2>
                            <h2>table</h2>
                            <h2>schedule</h2>
                        </div>
                    </div>`
    })
    matchesCon.innerHTML = matchClutter;
}
