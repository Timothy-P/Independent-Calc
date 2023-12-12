var Equal;
const divi = "÷"
const multi = "×"
function Alpha() {
    try {
        if (document.getElementById("CalcInput").value == "0÷0") {
            document.getElementById("CalcInput").value = "👎";
            alert("Haha, very funny.");
        }
        else if (document.getElementById("CalcInput").value.includes("👎")) {
            alert("I accounted for that too. :)");
            history.go(0);
        }
        else{
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("÷", "/");
            console.log("Division symbols replaced.");
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("×", "*");
            console.log("Multiplication symbols replaced.");
            document.getElementById("CalcInput").value = eval(document.getElementById("CalcInput").value);
            console.log("Equations solvd.");
        }
    }
    catch (err) {
        errorwin = window.open("", "MsgWindow", "Width=200px,height=50px");
        errorwin.document.write("<p>"+err+"</p>");
    }
}
function Tools(cmd) {
    if (cmd == "Clear") {
        document.getElementById("CalcInput").value = "";
    }
    else if (cmd == "0/0") {
        document.getElementById("CalcInput").value = "👎";
        alert("Haha, very funny.");
    }
    else if (cmd == "Down") {
        alert("I accounted for that too. :)");
        history.go(0);
    }
    else if (cmd == "") {
        alert("These are my tools.\nGet out of the console and use my calculator properly.");
        history.go(0)
    }
    else {
        return "Command not available, check your spelling or don't be searching for secrets."
    }
}