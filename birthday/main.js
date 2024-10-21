//setup
const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)
let urlpar1;

//if serch params == ...
urlpar1 = urlParams.get('arg');
if (urlpar1 == "true"){
  document.getElementById ("argtrue").innerHTML = 'Well, didn´t fool you... then we´ll proceed... <a href="./code?info=wow you found out">click here</a>'
  document.getElementById ("secret").innerHTML = ''
};
