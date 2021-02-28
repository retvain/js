document.write("<h1>js</h1>");

let showdate = document.createElement(("button"));
let hidedate = document.createElement(("button"));
let enter = document.createElement("br");
let time = document.createElement("p");

showdate.innerText = "Показать дату";
hidedate.innerText = "Скрыть дату";

document.body.appendChild(showdate);
document.body.appendChild(time);



function showingdate ()
{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    time.innerHTML = h + " : " + m + " : " + s;
    setTimeout(showingdate, 1000);
}

showdate.onclick = showingdate;


/*function showmydate ()
{
    let mydate = new Date();
    let h = Date.getHours;
    let m = Date.getMinutes;
    let s = Date.getSeconds;

    time.innerHTML = h + " : " + m + " : " + s;
}

function hidemaydate ()
{
    clearInterval(timerON);
    clearTimeout(timerON);
}*/

/*let timerON = setInterval(showmydate, 1000);
clearInterval(timerON);*/


/*showdate.onclick = setInterval(showmydate, 1000);

hidedate.onclick = hidemaydate;*/

