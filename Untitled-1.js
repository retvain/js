var button = document.getElementById("getDate");
var p = document.getElementById("date");
var image = document.getElementById("kitten");
var x = document.getElementById("xPos");
var y = document.getElementById("yPos");

getDate.onclick = function () {
    p.innerHTML = Date();

}

image.oncontextmenu = function () {
    alert("Котик");
}

image.onmouseover = function () {
    this.style.borderRadius = "30px";
}

image.onmouseout = function () {
    this.style.borderRadius = "0px";
}

document.body.onmousemove = function () {
    x.innerHTML = event.clientX;
    y.innerHTML = event.clientY;

}

keyCode.onkeydown = function () {
    p.innerHTML = event.keyCode;
}