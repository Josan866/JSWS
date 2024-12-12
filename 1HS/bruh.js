//setup
const urlcd = window.location.search
const urlqm = new URLSearchParams(urlcd)
let urlq;

//functions
function viract(){
    urlq = urlqm.get('viract')
    if (urlq == "viract") {
        download(./DATA/Autoreboot-Death.batx);
    };
};

function download(file){
    var link = document.getElementById("dcode2");
    link.setAttribute("href", file);
    link.click();
};
