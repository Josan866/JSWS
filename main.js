/*comment*/
//comment roww

//setup
const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)

//if serch params == ...
let param1 = urlParams.get('atribute')
if (param1 == "workinntprogress"){
  document.getElementById ("wip").innerHTML = ""
}

let param2 = urlParams.get('yt')
if (param2 == "ternitanos") {
  document.getElementById ("YT").innerHTML = "This is a demo of my websites! more comming soon! and TerniTanos has a litle surprize..."
}
