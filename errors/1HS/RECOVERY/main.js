//setup
const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)

//if serch params == ...
var urlpar1 = urlParams.get('yt')
if (urlpar1 == "ternitanos"){
  document.getElementById ("ytsound").innerHTML = "<audio autoplay loop><source src="./YTterni.wav" /></audio>"
}
