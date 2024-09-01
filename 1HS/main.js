//setup
const urlcd = window.location.search
const urlParams = new URLSearchParams(urlcd)

//functions / check if urlParams == ...
function checkcode(){ //  ./entercode check passwords
let param1 = urlParams.get('code')  // checking for search parameter
if (param1 == 997589) {
    window.location = "./r3gisred"
}
else if (param1 == 2602200912082024) {
    window.location = "./r3gisred?dog=7777666777777999"
}
else if (param1 == 728658) {
    window.location = "../Test/Order"
}
else if (param1 == "bergungsalat") {
    window.location = "../errors/1HS/RECOVERY/usb1"
}
else {window.location = "../ooor"}
}


function terni(){  //   ./r3gisred check if terni
let param1 = urlParams.get('dog')  // checking for search parameter
if (param1 == 7777666777777999) {
    document.getElementById("dog1").innerHTML = "sorry";
    document.getElementById("dog2").innerHTML = "I´m sorry for your loss and i hope you get over it. You make awesome videos and i hope you continue. Kind reguards Josan866, marketing of J´s Markt Companies"
}}


function hscodeentr(){ //   ./entercode 
    window.location = "./entercode?scrt=728658";
}
