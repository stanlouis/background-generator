const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");


console.log(css);
console.log(color1);
console.log(color2);

function setGradient() {
    body.style.background = `linear-gradient(to left, ${color1.value} , ${color2.value})`;
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);