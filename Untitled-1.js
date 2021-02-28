document.write("<h1>js</h1>");

let showdate = document.createElement(("button"));
let hidedate = document.createElement(("button"));
let enter = document.createElement("br");
let time = document.createElement("p");

showdate.innerText = "Показать дату";
hidedate.innerText = "Скрыть дату";

document.body.appendChild(showdate);
document.body.appendChild(hidedate);
document.body.appendChild(time);


//let timerID = setTimeout(showingdate, 1000);
function showingdate ()
{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    time.innerHTML = h + " : " + m + " : " + s;
    let timerID = setTimeout(showingdate, 1000);
    hidedate.onclick = function () {
        clearInterval(timerID);
        timerID = null;
        time.innerHTML = null;
    }
}

showdate.onclick = showingdate;


