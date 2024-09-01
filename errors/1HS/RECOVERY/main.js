//setup
const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)

//if serch params == ...
let param1 = urlParams.get('yt')
if (param1 == "ternitanos"){
  document.getElementById ("ytsound").innerHTML = "<audio autoplay loop><source src="./YTterni.wav" /></audio>"
}
