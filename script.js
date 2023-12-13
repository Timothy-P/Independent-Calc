var Equal;
const divi = "÷";
const multi = "×";
var round = 0;
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
        else if (round == 1) {
            console.log("False equation: "+document.getElementById("CalcInput").value+" (rounded)");
            document.getElementById("CalcInput").value = "Math.round("+document.getElementById("CalcInput").value+")";
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("π", "Math.PI")
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("÷", "/");
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("×", "*");
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("^", "Math.exp");
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("√", "Math.sqrt")
            console.log("True equation: "+document.getElementById("CalcInput").value+" (rounded)");
            document.getElementById("CalcInput").value = eval(document.getElementById("CalcInput").value);
            console.log("Result: "+document.getElementById("CalcInput").value+" (rounded)");
        }
        else{
            console.log("False equation: "+document.getElementById("CalcInput").value);
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("π", "Math.PI")
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("÷", "/");
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("×", "*");
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("^", "*Math.exp");
            document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.replaceAll("√", "Math.sqrt")
            console.log("True equation: "+document.getElementById("CalcInput").value);
            document.getElementById("CalcInput").value = eval(document.getElementById("CalcInput").value);
            console.log("Result: "+document.getElementById("CalcInput").value);
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
function roundF() {
    if (round == 1) {
        round = 0;
        document.getElementById("roundB").style.background = "red"
    }
    else {
        round = 1
        document.getElementById("roundB").style.background = "green"
    }
}