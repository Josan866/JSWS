//setup
const urlcd = window.location.search
const urlqm = new URLSearchParams(urlcd)
let urlq;

//functions / check if urlParams == ...
function checkcode(){ //  ./entercode check passwords
urlq = urlqm.get('code');  // checking for search parameter
wccheck = urlqm.get('wc')
    
if (urlq == 190) {
    window.location = "./r3gisred";
}
else if (urlq == "Code"){
    window.location = "./entercode?secret=true&wc=1"
}
else if (urlq == "incorrect" && wccheck == 1){
    window.location = "./entercode?secret=true&wc=2"
}
    else if (urlq == "again" && wccheck == 2){
    window.location = "./entercode?secret=true&wc=3"
}
        else if (urlq == "again later"  && wccheck == 3){
    window.location = "./bruh"
}
else {window.location = "../outoforder?origin=secret&atr=wc";}
};


function download(file){
    var link = document.getElementById("dcode2");
    link.setAttribute("href", file);
    link.click();
};
