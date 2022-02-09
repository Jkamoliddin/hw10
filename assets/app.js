let input = document.getElementById("input");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let output = document.getElementById("output");

let user = {};

window.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        user.name = input.value;
        user.age = input2.value;
        user.hobby = input3.value;
        user.school = input4.value;
        user.work = input5.value;
        output.innerHTML = `Имя: ${user.name} <br> Возраст: ${user.age} <br> Хобби: ${user.hobby} <br> Школа: ${user.school} <br> Работа: ${user.work} <br>`;
        input.value = "";
        input2.value = "";
    }
});
