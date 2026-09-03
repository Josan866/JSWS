const hack_p = "hack_bg"; // hack_bg html ID
const time = 3;           // in Sekunden
const time_to_next = 100; // in milliSekunden

setTimeout(hack, time * 1000);

function hack(){
    document.getElementById('body').innerHTML = "<div id=\"overlay\"></div><div id=\"hack_bg\" style=\"top:0px\">Olli@administrator:~$ Initializing</div>";

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
                code("Versteckt euch!");
                break;
            case 31:
                document.getElementById("overlay").innerHTML = "<div id=\"center\"><h1>Ich&nbsp;sehe&nbsp;euch</h1></div>";
                break;
        }
        if(repetitions > 50 && repetitions < 200){
            scroll(5);
        }
        repetitions += 1;
    }, time_to_next);
}

function code(text){
    document.getElementById(hack_p).innerHTML = document.getElementById(hack_p).innerHTML + "<br><span>05.02.2026&nbsp;&nbsp;&nbsp;14:52&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + text + "</span>";
}

function code_err(text){
    document.getElementById(hack_p).innerHTML = document.getElementById(hack_p).innerHTML + "<br><span style=\"color:var(--hack-text-error)\">05.02.2026&nbsp;&nbsp;&nbsp;14:52&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + text + "</span>";
}

function scroll(px){ // Eine Zeile = 20px
    let prevpx = parseInt(document.getElementById(hack_p).getAttribute("style").split(":")[1])
    let math = parseInt(prevpx - px);
    document.getElementById(hack_p).setAttribute("style","top:" + String(math) + "px")
}
