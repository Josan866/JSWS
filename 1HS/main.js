//start
const urlser = window.location.search
const urlParams = new URLSearchParams(urlser)

//functions
function checkcode(){ //  ./entercode check passwords
const param1 = urlParams.get('code')
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


function hscodeentr(){ //   ./entercode 
    window.location = "./entercode?scrt=728658";
}
