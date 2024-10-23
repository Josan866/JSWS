//setup
const urlcd = window.location.search
const urlParams = new URLSearchParams(urlcd)
let urlpar1;

//functions / check if urlParams == ...
function checkcode(){ //  ./entercode check passwords
urlpar1 = urlParams.get('code');  // checking for search parameter
if (urlpar1 == 190) {
    window.location = "./r3gisred";
}
else {window.location = "../outoforder?atr=wc";}
};


function download(file){
    var link = document.getElementById("dcode2");
    link.setAttribute("href", file);
    link.click();
};
