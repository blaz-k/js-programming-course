console.log("exo5")

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let result = document.getElementById("sum-el")

function add(){
    console.log(num1 + num2)
    let added = num1 + num2;
    result.textContent = "SUM" + ": " + added
}


function subtract(){
    console.log(num1 - num2)
    let subtracted = num1 - num2;
    result.textContent =  "SUM" + ": " + subtracted
}

function divide(){
    console.log(num1 / num2)
    let divided = num1 / num2;
    result.textContent =  "SUM" + ": " + divided
}

function multiply(){
    console.log(num1 * num2)
    let multiplied = num1 * num2
    result.textContent = "SUM" + ": " + multiplied
}