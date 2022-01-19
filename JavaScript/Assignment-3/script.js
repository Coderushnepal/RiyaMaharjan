// Random Balloon Generator

var main = document.createElement("div");
main.className = "mainContainer";
main.style.width = "800px";
main.style.margin = "50px auto";

//Generate Balloon Button
var button = document.createElement("button");
button.className = "btn";
button.textContent = "Generate Balloons";
button.style.fontSize = "18px";
button.style.padding = "18px 28px";
button.style.backgroundColor = "#1E3F66";
button.style.color = "#ffffff";
button.style.borderRadius = "16px";
button.style.marginBottom = "20px";
button.style.border = "none";
button.addEventListener("mouseover", function (event) {
    button.style.padding = "18px 30px";
    button.style.transitionDuration = ".3s";
    button.style.backgroundColor = "#2E5984";
});
button.addEventListener("mouseout", function (event) {
    button.style.padding = "18px 28px";
    button.style.transitionDuration = ".3s";
    button.style.backgroundColor = "#1E3F66";
});

main.appendChild(button);

//Frame - Balloon Container
var frame = document.createElement("div");
frame.style.width = "800px";
frame.style.height = "400px";
frame.style.position = "relative";
frame.style.border = "1px solid #909090";
frame.style.margin = "0px";
frame.style.backgroundColor = "#ffffff";
main.appendChild(frame);
document.body.appendChild(main);

//Create Balloons
button.addEventListener("click", function (event) {
    var balloon = document.createElement("div");
    balloon.style.width = "20px";
    balloon.style.height = "20px";
    balloon.style.borderRadius = "50%";
    balloon.style.backgroundColor = "#528AAE";
    balloon.style.position = "absolute";
    var x = "780" * Math.random();
    var y = "380" * Math.random();
    balloon.style.left = x + "px";
    balloon.style.top = y + "px";
    frame.appendChild(balloon);
});
