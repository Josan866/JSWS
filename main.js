/*comment*/
//comment roww

const URLpar = window.location.search
const urlParams = new URLSearchParams(URLpar)
const param1 = urlParams.get('yt')
if (param1 == "ternitanos") {
  document.getElementById ("YT").innerHTML = "This is a demo of my websites! more comming soon! and TerniTanos has a litle surprize..."
}
