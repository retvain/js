$(document).ready(function () {

    $('#1_form').on('submit', function (event) {
        event.preventDefault();

        let arraySize,
            findValue,
            stepsValue = 0;

        arraySize = parseInt($('#1_arraySize').val());
        findValue = parseInt($('#1_findPosition').val());
        let summa = arraySize + findValue;

        function generateArray(n) {
            let array = [];
            let random = 0;
            for (let count = 1; count <= n; count++) {
                random = (Math.floor(Math.random() * n)).toString();
                array.push(count);
            }

            return array;
        }


        let arrayForBinary = generateArray(arraySize);
        let low = 0;
        let high = arrayForBinary.length;
        let position = 'Not found';
        let found = false;
        let mid;

        function binary_search(findValue) {
            while (found === false && low <= high ){
               stepsValue +=1;
               mid = Math.floor((low+high)/2);
               if (arrayForBinary[mid] == findValue) {
                   found = true;
                   position = mid;
               } else if (arrayForBinary[mid] > findValue) {
                   high = mid - 1;
               } else {
                   low = mid + 1;
               }
            }
            return [position.toString(), stepsValue.toString(), arrayForBinary];

        }

        $('#1_result').text('Result: ' + binary_search(findValue)[0]);
        $('#1_steps').text('Steps: ' + binary_search(findValue)[1]);
        $('#1_array').text('Array: ' + binary_search(findValue)[2]);
    })
});


// console.log(generateArray(3));

// document.querySelector('button').onclick = execFirstAlgorithm;

// function execFirstAlgorithm ()
// {
//     console.log(document.querySelector('#1_arraySize').value);
// }


/*let foo = {
    age: 33,
    name: "mikhail",
    birthday: {
        day: 7,
        year: 1987
    },
    sayName: function () {
        console.log("Меня зовут " + this.name);
    }

}
let Man = {
    "name 1": 123,

}*/

// let user = {
//     name: "Mikhail",
//     age: 30
// };

// let key = prompt("Что вы хотите узнать о пользователе?");

// console.log(key);
// console.log(user[key]);


/*function makeArmy() {
    let shooters = [];


    for(let i = 0; i < 10; i++) {
        let shooter = function() { // shooter function

            alert( i ); // should show its number
        };
        shooters.push(shooter);

    }

    return shooters;
}


let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...*/


//================Jquery Validation==============================
/*$(document).ready(function () {

    let validName = false;
    let validEmail = false;


    $('form').submit(function (event) {
        event.preventDefault();
        $('#name').addClass("is-valid");
        $('#email').addClass("is-valid");

        let name = $("#name").val();
        let email = $("#email").val();

        if (name == "") {
        $('#name').addClass("is-invalid");
        } else {
            $('#name').addClass("is-valid");
            validName = true;
        }
        console.log(validName);

        if (email == "") {
            $('#email').addClass("is-invalid");
        } else {
            $('#email').addClass("is-valid");
            validEmail = true;
        }
        console.log(validEmail);
        if (validName == true && validEmail == true) {
            $(this).unbind('submit').submit();
        }

    })

});*/

//================================================================
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

