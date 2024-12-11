/*comment*/
//comment roww

//setup
const urlpar = window.location.search
const urlParams = new URLSearchParams(urlpar)
let urlpar1;

//if serch params == ...
urlpar1 = urlParams.get('atr'); //atribute
if (urlpar1 == "workinntprogress"){
  document.getElementById ("wip").innerHTML = ""
};

urlpar1 = urlParams.get('yt'); //YouTube
if (urlpar1 == "ternitanos") {
  document.getElementById ("YT").innerHTML = "This is a demo of my websites! more comming soon! and TerniTanos has a litle surprize..."
};
