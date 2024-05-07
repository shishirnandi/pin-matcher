

function generateInput() {

    let input1 =  document.querySelector("#generateInput");

    let newPin = Math.floor(Math.random()*10000);

    input1.value = newPin;

    
}

let btn11 = document.querySelector(".generateDiv");


btn11.addEventListener("click", generateInput );




// ////////////////////////////////////////

function getNumber1() {

    let inputBox1 = document.querySelector("#pinInput");

    inputBox1.value += "1";
}

let a1 = document.querySelector("#a1");

a1.addEventListener("click", getNumber1);

// //////////////////////////////////////


////////////////////////////////////////

function getNumber2() {

    let inputBox1 = document.querySelector("#pinInput");

    inputBox1.value +=  "2";
}

let a2 = document.querySelector("#a2");

a2.addEventListener("click", getNumber2);

// //////////////////////////////////////


// ////////////////////////////////////////

function getNumber3() {

    let inputBox1 = document.querySelector("#pinInput");

    inputBox1.value += "3";
}

let a3 = document.querySelector("#a3");

a3.addEventListener("click", getNumber3);

// // //////////////////////////////////////


/ ////////////////////////////////////////

function getNumber4() {

    let inputBox1 = document.querySelector("#pinInput");

    inputBox1.value += "4";
}

let a4 = document.querySelector("#a4");

a4.addEventListener("click", getNumber4);

// // //////////////////////////////////////


/ ////////////////////////////////////////

function getNumber5() {

    let inputBox1 = document.querySelector("#pinInput");

    inputBox1.value += "5";
}

let a5 = document.querySelector("#a5");

a5.addEventListener("click", getNumber5);

// // //////////////////////////////////////



/ ////////////////////////////////////////

function getNumber6() {

    let inputBox1 = document.querySelector("#pinInput");

    inputBox1.value += "6";
}

let a6 = document.querySelector("#a6");

a6.addEventListener("click", getNumber6);

// // //////////////////////////////////////



/ ////////////////////////////////////////

function getNumber7() {

    let inputBox1 = document.querySelector("#pinInput");

    inputBox1.value += "7";
}

let a7 = document.querySelector("#a7");

a7.addEventListener("click", getNumber7);

// // //////////////////////////////////////



/ ////////////////////////////////////////

function getNumber8() {

    let inputBox1 = document.querySelector("#pinInput");

    inputBox1.value += "8";
}

let a8 = document.querySelector("#a8");

a8.addEventListener("click", getNumber8);

// // //////////////////////////////////////



/ ////////////////////////////////////////

function getNumber9() {

    let inputBox1 = document.querySelector("#pinInput");

    inputBox1.value += "9";
}

let a9 = document.querySelector("#a9");

a9.addEventListener("click", getNumber9);

// // //////////////////////////////////////



/ ////////////////////////////////////////

function getNumber10() {

    let inputBox1 = document.querySelector("#pinInput");

    let currenntInput = inputBox1.value;

    inputBox1.value = currenntInput.slice(0, -1);
}

let a10 = document.querySelector("#a10");

a10.addEventListener("click", getNumber10);

// // //////////////////////////////////////


/ ////////////////////////////////////////

function getNumber0() {

    let inputBox1 = document.querySelector("#pinInput");

    inputBox1.value += "0";
}

let a0 = document.querySelector("#a0");

a0.addEventListener("click", getNumber0);

// // //////////////////////////////////////
/ ////////////////////////////////////////

function getNumberC() {

    let inputBox1 = document.querySelector("#pinInput");

    inputBox1.value = "";
}

let aC = document.querySelector("#aC");

aC.addEventListener("click", getNumberC);

// // //////////////////////////////////////





function matching() {
    let inputBox1 = document.querySelector("#generateInput");
    let inputBox2 = document.querySelector("#pinInput");
    let textEle = document.querySelector("#h2");

    if (inputBox1.value === inputBox2.value) {
        textEle.innerText = "Your code is Correct. Mia Khalifa is Waiting for You";
    } else{

        textEle.innerText = "You have entered a wrong code . Keep Musterbating";
    }
}

let button = document.querySelector("#btn");
button.addEventListener("click", matching);
