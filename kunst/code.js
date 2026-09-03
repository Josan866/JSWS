const inputFeld = document.getElementById('code');
let trys = 0;

inputFeld.addEventListener('input', (event) => {
    const aktuellerWert = event.target.value;
    inputFeld.setAttribute("value",aktuellerWert);
});

function submit(){
    const code = document.getElementById("code").getAttribute("value");
    trys += 1;

    switch (code) {
        case "dreamer":
            correct(code, "site")
            break;
        default:
            incorrect(code);
            break;
    }
}

function correct(code, site){
    console.log(site);
    document.getElementById("input").innerHTML = "<span>Correct Password: \"" + code + "\"</span>";
    document.getElementById("load").innerHTML = "Loading<span id=\"loads\"></span>"
    setInterval(function(){
        if (document.getElementById("loads").innerHTML.length >= 3) {
            document.getElementById("loads").innerHTML = "";
        } else {
            document.getElementById("loads").innerHTML = document.getElementById("loads").innerHTML + ".";
        }
    }, 200)
}

function incorrect(code){
    if (trys >= 3) {
        document.getElementById("text").innerHTML = "<span>Using username \"Olli\".<br>Olli@administrator's password: </span><br>"
        trys = 0;
    } else {
        document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + "<br>";
    }
    console.log("WRONG");
    document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + "<span style=\"color:var(--hack-text-error)\">Incorrect Password: \"" + code + "\"</span><br><span>Using username \"Olli\".<br>Olli@administrator's password: </span>";
}
