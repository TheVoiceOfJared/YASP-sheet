// Load saved data when page opens
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

```
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

let result = document.getElementById("rollResult");

result.innerHTML =
    symbols[die1] +
    " + " +
    symbols[die2] +
    " = " +
    total;

if (total <= 6) {

    result.style.color = "red";
    result.innerHTML += "<br>Miss";

}
else if (total <= 9) {

    result.style.color = "goldenrod";
    result.innerHTML += "<br>Mixed Success";

}
else {

    result.style.color = "green";
    result.innerHTML += "<br>Strong Success";

}
```

}

