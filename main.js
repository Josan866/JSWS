/*comment*/
//comment roww

//setup
const URLpar = window.location.search
const urlParams = new URLSearchParams(URLpar)

//if serch params == ...
let param1 = urlParams.get('WoInPr')
if (param1 == "workinntprogress"){
  document.getElementById ("wip").innerHTML = "" ;
}

let param1 = urlParams.get('yt')
if (param1 == "ternitanos") {
  document.getElementById ("YT").innerHTML = "This is a demo of my websites! more comming soon! and TerniTanos has a litle surprize..." ;
}
