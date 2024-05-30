//Задача 1
// let elemS = document.getElementById("name");
// let elemS2 = document.getElementById("email");
// let elemS3 = document.getElementById("message");
// let P = document.getElementById("error-message");
// function validateForm(){
//     if(elemS.value == "" && elemS2.value == "" && elemS3.value == ""){
//         P.innerHTML = "ПОЧЕМУ В СТРОЧКАХ ПУСТО?!?!?!?!!??!"
//         console.log("1")
//     }
//     else if(elemS2.value.includes("@") && elemS.value != "" && elemS3.value != ""){
//         P.innerHTML = "Всё норм"
//         console.log("2")
//     }
//     else if(elemS2.value.includes("@") && elemS.value == "" && elemS3.value == ""){
//         P.innerHTML = "Заполни остальные строчки!!!!!!"
//         console.log("3")
//     }
//     else{
//         P.innerHTML = "AAAAAAAAAAAAAAAAAAAAAAAAAAA"
//         console.log("4")
//     }
// }


//Задача 2
// let elemS = document.getElementById("filterInput")
// let element = document.querySelectorAll("#List li");
// function Naitii(){
//     // element.style.display = 'none'
//     console.log(element);
//     element.forEach(item =>{
//         if(item.textContent.includes(elemS.value)){
//             item.style.display = ''
//         }
//         else{
//             item.style.display = 'none'
//         }
//     })
// }

//Задача 3
// let element = document.getElementById("body")
// function toggleTheme(){
//     if(element.getAttribute("class") == "light-mode"){
//         element.setAttribute("class","dark-mode");
//     }
//     else{
//         element.setAttribute("class","light-mode");
//     }
// }

//Задача 4
// var r = 0;
// function nextImage(){
//     r = +r + +1;
//     setImage();
// }
// function prevImage(){
//     r = +r - +1;
//     setImage();
// }
// function setImage(){
//     let IMG = document.getElementById("galleryImage");
//     if(r==0){
//         IMG.setAttribute("src","img/catit.jpg");
//     }
//     else if(r==1){
//         IMG.setAttribute("src","img/cat.jpg");
//     }
//     else if(r==2){
//         IMG.setAttribute("src","img/cute.jpg");

//     }
//     else if(r < 0 || r > 2){
//         r = 0
//     }
// }

//Задача 5
// function resetImage(){
//     let IMG = document.getElementById("hoverImage");
//     IMG.setAttribute("src","img/cat.jpg");
// }
// function changeImage(){
//     let IMG = document.getElementById("hoverImage");
//     IMG.setAttribute("src","img/cute.jpg");
// }

//Задача 6
// function addOptions(){
//     let element = document.createElement("option")
//     let Ob = document.getElementById("dropdown")
//     element.innerHTML = "челик"
//     Ob.appendChild(element)
// }

//Задача 7
// let random = Math.floor(Math.random() * (10 - 0) + 0);
// let elemS = document.getElementById("guessInput");
// let result = document.getElementById("result")
// function checkGuess(){
//     if(random == Number(elemS.value)){
//         result.innerHTML = "УГАДАЛ!!!! " + random
//     }
//     else{
//         result.innerHTML = "НЕ УГАДАЛ!!!! " + random
//     }
// }

//Задача 8
// let element = document.getElementById("text")
// function toggleText(){
//     if (element.hidden) {
//         element.hidden = false
//     }
//     else{
//         element.hidden = true
//     }
// }

//Задача 9
// function DATA(){
//     const vrema = new Date();
//     let element = document.getElementById("dateTime");
//     element.innerHTML = vrema;
// }
// setInterval(DATA,1000);

//Задача 10
// let elemN1 = document.getElementById("number1")
// let elemN2 = document.getElementById("number2")
// let result = document.getElementById("result")
// let res;
// let element = document.querySelectorAll("#operation option");
// let operation = document.getElementById("operation")


// function calculate(){
//     console.log(operation.value)
//     if(operation.value == "add"){
//         console.log("работает?");
//         res = Number(elemN1.value) + Number(elemN2.value)
//         result.innerHTML = res
//     }
//     else if(operation.value == "subtract"){
//         console.log("yt работает?");
//         res = Number(elemN1.value) - Number(elemN2.value)
//         result.innerHTML = res
//     }
//     else if(operation.value == "multiply"){
//         console.log("yt работает?");
//         res = Number(elemN1.value) * Number(elemN2.value)
//         result.innerHTML = res
//     }
//     else if(operation.value == "divide"){
//         console.log("yt работает?");
//         res = Number(elemN1.value) / Number(elemN2.value)
//         result.innerHTML = res
//     }
// }