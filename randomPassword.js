let passwordEl = document.getElementById("password-el");
let passLenEl = document.getElementById("passLen-el");
let passElement1 = document.getElementById("pass1");
let passElement2 = document.getElementById("pass2");
let passElement3 = document.getElementById("pass3");
let passElement4 = document.getElementById("pass4");


passElement1.value = "";  // The value property sets or returns the value of the value attribute of a password field.
passElement2.value = "";
passElement3.value = "";
passElement4.value = "";


let passLen = passLenEl.value;

let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
             "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
             "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
             "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
             "&", "£", "$", "%", "^", "*", "@", "+", "-", "=", "?", "!", "(", ")",
             "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let password = "";

passwordEl.addEventListener("click", function() {
    fourPass()
})

passLenEl.addEventListener("change", function() {
    refresh()
})

function generatePassword() {
    let randNum = 0;
    let randChar = "";
    let randStr = "";
    for (let i = 0; i < passLen; i++) {
        randNum = Math.floor( Math.random() * 76);
        randChar = chars[randNum];
        randStr += randChar;
    }
    return randStr;
}

function fourPass() {
    let passString1 = generatePassword();
    let passString2 = generatePassword();
    let passString3 = generatePassword();
    let passString4 = generatePassword();
    
    passElement1.value = passString1;
    passElement2.value = passString2;
    passElement3.value = passString3;
    passElement4.value = passString4;
}

function refresh() {
    passLen = passLenEl.value;
}
