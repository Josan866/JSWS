const hack_p = "hack_bg"; // hack_bg html ID
const line_height = 18;   // höhe einer Textzeile
const time = 3;           // in Sekunden
const time_to_next = 100; // in milliSekunden

const ctime = "31.10.1978&nbsp;&nbsp;&nbsp;03:03"

setTimeout(hack, time * 1000);

function hack(){
    document.getElementById('html').innerHTML = "<head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Hacking...</title><link rel=\"stylesheet\" href=\"style.css\" /></head><body id=\"body\"></body><div id=\"overlay\"></div><div id=\"hack_bg\" style=\"top:0px\">Olli@administrator:~$ Initializing</div></body>";

    let dot = setInterval(function(){
        document.getElementById('hack_bg').innerHTML = document.getElementById('hack_bg').innerHTML + ".";
    }, 50);

    let repetitions = -30;
    setInterval(function(){
        switch (repetitions) {
            case 0:
                clearInterval(dot);
                break;
            case 1:
                code("Loading Code...");
                break;
            case 2:
                code_err("Syntax Error in line 12");
                break;
            case 5:
                code("restarting Code");
                break;
            case 6:
                code("Loading Files" + "<br>");
                break;
            case 20:
                code("READ_ME.md");
                code("EULA.txt");
                code("Diary.txt");
                code("Kim.chr");
                code("Amalia.chr");
                code("Pauline.chr");
                code("Olli.chr");
                code("Wilma.chr");
                code("Lampe.obj");
                code("Ich_mit_der_Lampe.png");
                code("wilma.exe" + "<br>");
                break;
            case 21:
                code("Running Script");
                break;
            case 30:
                code_err("Versteckt euch!");
                break;
            case 35:
                document.getElementById("overlay").innerHTML = "<div id=\"center\"><h1>Ich&nbsp;sehe&nbsp;euch</h1></div>";
                break;
            case 75:
                document.getElementById("overlay").innerHTML = "";
                scroll_ln(1);
                break;
            case 100:
                //document.getElementById("html").innerHTML = "<head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL was not found on this server.</p><hr><address>Apache/2.4.68 (Debian) Server at de.wikipedia.org Port 666</address></body>";
                document.getElementById("html").innerHTML = "<head><title>403 Forbidden</title></head><body><h1>Forbidden</h1><p>You don't have permission to access this resource.</p><hr><address>Apache/2.4.68 (Debian) Server at de.wikipedia.org Port 666</address></body>";
                break;
        }
        if(repetitions > 50 && repetitions < 70){
            scroll_ln(1);
        }
        repetitions += 1;
    }, time_to_next);
}

function code(text){
    document.getElementById(hack_p).innerHTML = document.getElementById(hack_p).innerHTML + "<br><span>" + ctime + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + text + "</span>";
}

function code_err(text){
    document.getElementById(hack_p).innerHTML = document.getElementById(hack_p).innerHTML + "<br><span style=\"color:var(--hack-text-error)\">" + ctime + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + text + "</span>";
}

function scroll_ln(lines){ // Eine Zeile = 20px
    let prevpx = parseInt(document.getElementById(hack_p).getAttribute("style").split(":")[1])
    let math = parseInt(prevpx - (lines * line_height));
    document.getElementById(hack_p).setAttribute("style","top:" + String(math) + "px")
}
