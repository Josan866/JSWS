//setup
const urlcd = window.location.search
const urlParams = new URLSearchParams(urlcd)
let urlpar1;

//urlpar1 = urlParams.get('code'); checking for search parameter


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
