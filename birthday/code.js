//setup
const urlcd = window.location.search
const urlParams = new URLSearchParams(urlcd)
let urlpar1;

//functions / check if urlParams == ...
function checkcode(){ //  ./entercode check passwords
  urlpar1 = urlParams.get('code');  // checking for search parameter
  if (urlpar1 == "birthdayboy") {
      window.location = "./";
  }
  else if (urlpar1 == "halloween") {
      window.location = "./invatation";
  }
  else {window.location = "../outoforder?origin=birth&atr=wc";
};};

function download(file){
    var link = document.getElementById("dcode2");
    link.setAttribute("href", file);
    link.click();
};
