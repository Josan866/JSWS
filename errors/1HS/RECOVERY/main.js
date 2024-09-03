//setup
const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)
let urlpar1;

//if serch params == ...
urlpar1 = urlParams.get('yt');
if (urlpar1 == "ternitanos"){
  document.getElementById ("ytsound").innerHTML = "<audio autoplay loop><source src="./YTterni.wav" /></audio>"
};
