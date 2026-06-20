// Load saved data when page opens
let history = [];
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

};


// Roll 2d6
function rollDice() {

let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;

let total = die1 + die2;

    history.unshift(total);

if (history.length > 10) {
    history.pop();
}
const symbols = [
    "",
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
];

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

    result.style.color = "red";
    result.innerHTML += "<br>Failure";

}
else if (total <= 9) {

    result.style.color = "goldenrod";
    result.innerHTML += "<br>success w/ cost";

}
else {

    result.style.color = "green";
    result.innerHTML += "<br>Success";
}
document.getElementById("rollHistory").innerHTML =
    history.join("<br>");
}

