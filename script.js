// Load saved data when page opens
let history = [];
let hp = 10;
let resources = 5;
window.onload = function() {

    document.querySelectorAll("input, textarea, select").forEach(field => {

        let savedValue = localStorage.getItem(field.id);

        if (savedValue !== null) {
            field.value = savedValue;
        }

        field.addEventListener("input", function() {
            localStorage.setItem(field.id, field.value);
        });

    });
drawHearts();
drawResources();
};


// Roll 2d6
function rollDice() {

let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;

let total = die1 + die2;

    const symbols = [
    "",
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
];
  let rollEntry =
symbols[die1] +
symbols[die2] +
" → " +
total;

history.unshift(rollEntry);

if (history.length > 10) {
history.pop();
}

let result = document.getElementById("rollResult");

result.innerHTML =
"<div class='dice-row'>" +
symbols[die1] +
" + " +
symbols[die2] +
" =" +
"</div>" +
"<div class='total-number'>" +
total +
"</div>";

if (total <= 6) {

    result.style.color = "#a86d6d";
    result.innerHTML += "<br>Failure";

}
else if (total <= 9) {

    result.style.color = "#7d93a6";
    result.innerHTML += "<br>success w/ cost";

}
else {

    result.style.color = "#5f8a6b";
    result.innerHTML += "<br>Success";
}
document.getElementById("rollHistory").innerHTML =
    history.join("<br>");
}
function drawHearts() {

let html = "";

for (let i = 1; i <= 10; i++) {

    if (i <= hp)
        html += `<span onclick="setHP(${i})">❤️</span>`;
    else
        html += `<span onclick="setHP(${i})">🤍</span>`;

}

document.getElementById("hpContainer").innerHTML = html;

}

    function setHP(value) {

        hp = value;

        drawHearts();
}
function drawResources() {

    let html = "";

    for (let i = 1; i <= 5; i++) {

    if (i <= resources)
        html += `<span onclick="setResources(${i})">⭐</span>`;
    else
        html += `<span onclick="setResources(${i})">☆</span>`;

}

document.getElementById("resourceContainer").innerHTML = html;

}

function setResources(value) {

resources = value;

drawResources();

}
