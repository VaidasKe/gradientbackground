var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function getRandomHexColor() {
    const hexDigits = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexDigits[Math.floor(Math.random() * 16)];
    }
    return color;
 }
 
 color1.addEventListener("input", setGradient);
 color2.addEventListener("input", setGradient);
 
 random.addEventListener("click", function() {
    var colorOne = getRandomHexColor();
    var colorTwo = getRandomHexColor();
    body.style.background = "linear-gradient(to right, " + colorOne + ", " + colorTwo + ")";
    css.textContent = body.style.background + ";";
 });