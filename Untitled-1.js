$(document).ready(function () {

    let validName = false;
    let validEmail = false;

    $('#name').click(function (){
        $('#name').val("");

    });
    $('#email').click(function (){
        $('#email').val("");

    });

    $("form").submit(function (event) {
        event.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();

        if (name == "") {

        } else {
            validName = true;
        }
        console.log(validName);

        if (email == "") {

        } else {
            validEmail = true;
        }
        console.log(validEmail);
    })

});



/*
$("button").click(function (){
    $(".text").fadeToggle();
});
*/


//=========== Тест jquery =============================================
//$("p").css("color", "red");
/*$("img[src='http://placekitten.com/g/100/100']").after("Котик");
$("img[src='http://placekitten.com/g/100/100']").click(function ()
{
   $(this).animate({
       "opacity": "0.4"
   }, 2000);
});*/
//======================================================================
//=========== Тест валидации формы =====================================
/*let sendButton = document.getElementById("sendButton");
sendButton.onclick = function validation (event) {
    let userName = document.getElementById("userName");
    let userPassword = document.getElementById("userPassword");

    if (!userName.value) {
        event.preventDefault();
        userName.style.border = "1px solid red";
        return false;
    }
    if (!userPassword.value) {
        event.preventDefault();
        userPassword.style.border = "1px solid red";
        return false;
    }
}*/
//======================================================================
//======== Часы на JS с функцией показа и скрытия ======================
/*let showdate = document.createElement(("button"));
let hidedate = document.createElement(("button"));
let enter = document.createElement("br");
let time = document.createElement("p");

showdate.innerText = "Показать часы";
hidedate.innerText = "Скрыть часы";

document.body.appendChild(showdate);
document.body.appendChild(hidedate);
document.body.appendChild(time);

function showingdate ()
{
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if (h<10){
        h = "0" + h;
    }
    if (s<10){
        s = "0" + s;
    }
    if (m<10){
        m = "0" + m;
    }
    time.innerHTML = h + " : " + m + " : " + s;
    let timerID = setTimeout(showingdate, 1000);
    hidedate.onclick = function () {
        clearInterval(timerID);
        timerID = null;
        time.innerHTML = null;
    }
}

showdate.onclick = showingdate;*/
//===================================================================

