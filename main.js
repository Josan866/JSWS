/*comment*/
//comment roww

//setup
const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)

//if serch params == ...
var urlpar1 = urlParams.get('atribute')
if (urlpar1 == "workinntprogress"){
  document.getElementById ("wip").innerHTML = ""
}

var urlpar1 = urlParams.get('yt')
if (urlpar1 == "ternitanos") {
  document.getElementById ("YT").innerHTML = "This is a demo of my websites! more comming soon! and TerniTanos has a litle surprize..."
}
