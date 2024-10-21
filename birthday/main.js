//setup
const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)
let urlpar1;

//if serch params == ...
urlpar1 = urlParams.get('arg');
if (urlpar1 == "true"){
  document.getElementById ("argtrue").innerHTML = ""
};
