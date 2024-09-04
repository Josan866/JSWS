// ooo Java Script from J´s Markt
//setup
const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)
let urlpar1;

urlpar1 = urlParams.get('atr')
if (urlpar1 == "wc") {
  document.getElementById("oooh").innerHTML = "Wrong Code";
  document.getElementById("ooop").innerHTML = "Retry";
  let test = document.getElementById("ooop");
  test.setAttribute("href", "./1HS/entercode");
}
else if (urlpar1 == "dlf") {
  document.getElementById("oooh").innerHTML = "Document downloaded";
  document.getElementById("ooop").innerHTML = "Back to Homepage";
  let test = document.getElementById("ooop");
  test.setAttribute("href", "./");
}
else if (urlpar1 == "dcs") {
  document.getElementById("oooh").innerHTML = "End Monolog downloaded";
  document.getElementById("ooop").innerHTML = "Try HorrorScape";
  let test = document.getElementById("ooop");
  test.setAttribute("href", "./1HS/");
}
else if (urlpar1 == "dlfa") {
  document.getElementById("oooh").innerHTML = "Document downloaded";
  document.getElementById("oooc").innerHTML = '<p class="oooh"><a href="./CAUTION/audio">Caution: Loud audio</a></p>';
  document.getElementById("ooop").innerHTML = "Back to Homepage";
  let test = document.getElementById("ooop");
  test.setAttribute("href", "./");
}
