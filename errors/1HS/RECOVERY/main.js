//setup
const "URLpar" = window.location.search
const urlParams = new URLSearchParams("URLpar")

//if serch params == ...
let param1 = urlParams.get('yt')
if (param1 == "ternitanos"){
  document.getElementById ("ytsound").innerHTML = "<audio autoplay loop><source src="./YTterni.wav" /></audio>"
}
