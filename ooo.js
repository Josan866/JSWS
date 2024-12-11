// ooo Java Script from J´s Markt
//setup
const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)
let urlpar1;

urlpar1 = urlParams.get('atr')
if (urlpar1 == "wc") {
  document.getElementById("oooh").innerHTML = "Wrong Code";
  document.getElementById("ooop").innerHTML = "Retry";
  document.getElementById("ooot").innerHTML = "Invalide Code";
  urlpar1 = urlParams.get('origin')
  if (urlpar1 == "birth") { //birthday edition
    let test = document.getElementById("ooop");
    test.setAttribute("href", "./birthday/code");
  }
  else if (urlpar1 == "secret") { //1HS secret codes
    let test = document.getElementById("ooop");
    test.setAttribute("href", "./1HS/entercode?secret=true");
  }
  else if (urlpar1 == "horscp") { //1HS
    let test = document.getElementById("ooop");
    test.setAttribute("href", "./1HS/entercode?scrt=728658");
  }
  else {
    window.location = "./outoforder";
  };
}
else if (urlpar1 == "dlf") { //down-load finished
  document.getElementById("oooh").innerHTML = "Document downloaded";
  document.getElementById("ooop").innerHTML = "Back to Homepage";
  document.getElementById("ooot").innerHTML = "Downloaded";
  let test = document.getElementById("ooop");
  test.setAttribute("href", "./");
}
else if (urlpar1 == "dcs") { //download celebration script
  document.getElementById("oooh").innerHTML = "End Monolog downloaded";
  document.getElementById("ooop").innerHTML = "Try HorrorScape";
  document.getElementById("ooot").innerHTML = "Downloaded";
  let test = document.getElementById("ooop");
  test.setAttribute("href", "./1HS/");
}
else if (urlpar1 == "dlfa") { //down-load finished audio
  document.getElementById("oooh").innerHTML = "Document downloaded";
  document.getElementById("oooc").innerHTML = '<h2 class="oooh"><a href="./CAUTION/audio">Caution: Loud audio</a></h2>';
  document.getElementById("ooop").innerHTML = "Back to Homepage";
  document.getElementById("ooot").innerHTML = "Downloaded";
  let test = document.getElementById("ooop");
  test.setAttribute("href", "./");
} 
else {};
