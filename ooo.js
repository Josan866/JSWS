// ooo Java Script from J´s Markt

// oooh ooop

//setup
const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)
let urlpar1;

urlpar1 = urlParams.get('atr')
if (urlpar1 == "wc") {
  document.getElementById("oooh").innerHTML = "Wrong Code";
  document.getElementById("ooop").innerHTML = "Retry";
  let test; test = getElementById("ooop");
  test.setAttribute("href", "./1HS/entercode");
}
else if (urlpar1 == "dlf") {
  document.getElementById("oooh").innerHTML = "Document downloaded";
  document.getElementById("ooop").innerHTML = "To Homepage";
  let test; test = getElementById("ooop");
  test.setAttribute("href", "./");
}
