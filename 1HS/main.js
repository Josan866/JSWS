//setup
const urlcd = window.location.search
const urlParams = new URLSearchParams(urlcd)
let urlpar1;

//functions / check if urlParams == ...
function checkcode(){ //  ./entercode check passwords
urlpar1 = urlParams.get('code');  // checking for search parameter
if (urlpar1 == 997589) {
    window.location = "./r3gisred";
}
else if (urlpar1 == 2602200912082024) {
    window.location = "./r3gisred?dog=7777666777777999";
}
else if (urlpar1 == 728658) {
    window.location = "../Test/Order";
}
else if (urlpar1 == "code-challenge@josh.de") {
    download('./DATA/encrypted.txt');
    window.location = "../outoforder?atr=dlf";
}
else if (urlpar1 == "bergungsalat") {
    download('./DATA/code.wav');
    window.location = "../outoforder?atr=dlfa";
}
else if (urlpar1 == "talasgnugreb") {
    download('./DATA/congratz.txt');
    window.location = "../outoforder?atr=dcs";
}
else if (urlpar1 == "CKBGU-josh-1use") {
    download('./DATA/audio_06.wav');
    window.location = "../outoforder?atr=dlfa&hint=SSTV";
}
else if (urlpar1 == "birthdayboy") {
    window.location = "../birthday";
}
else {window.location = "../outoforder?atr=wc";}
};


function download(file){
    var link = document.getElementById("dcode2");
    link.setAttribute("href", file);
    link.click();
};

function terni(){  //   ./r3gisred check if terni
urlpar1 = urlParams.get('dog');  // checking for search parameter
if (urlpar1 == 7777666777777999) {
    document.getElementById("dog1").innerHTML = "sorry";
    document.getElementById("dog2").innerHTML = "I´m sorry for your loss and i hope you get over it. You make awesome videos and i hope you continue. Kind reguards Josan866, marketing of J´s Markt Companies";
}};


function hscodeentr(){ //   ./entercode 
    window.location = "./entercode?scrt=728658";
};
