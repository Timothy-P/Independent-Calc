var Equal;
const divi = "÷";
const multi = "×";
var round = 0;
var PCount = 0;
var PCount2 = 0;
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
        if (PCount2 > 0) {
            alert("Please end off your parethesis before trying to solve the equation.")
        }
        else {
            console.log("PCount2 <= 0");
            if (round == 1) {
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
    }
    catch (err) {
        errorwin = window.open("", "MsgWindow", "Width=200px,height=50px");
        errorwin.document.write("<p>"+err+"</p>");
    }
}
function Tools(cmd) {
    if (cmd == "clear", "Clear") {
        document.getElementById("CalcInput").value = "";
    }
    else if (cmd == "0/0") {
        document.getElementById("CalcInput").value = "👎";
        alert("Haha, very funny.");
    }
    else if (cmd == "down", "Down") {
        alert("I accounted for that too. :)");
        history.go(0);
    }
    else if (cmd == "Aver", "aver") {
        $("body").append('<div id="Aver"><button onclick="Add()">Add more</button><input id="AverI1"><input id="AverI2"><input id="AverI3"><input id="AverI4"></div>')
        $(document).ready(function(){
            $('#Aver').draggable();
        });
    }
    else if (cmd == "") {
        alert("These are my tools.\nGet out of the console and use my calculator properly.");
        history.go(0)
    }
    else if (cmd == "Randomizer") {
        $("body").append('<div id="randomM"><input id="resultR"><br><button>Copy</button><button onclick="Randomize()">Randomize</button><button onclick="document.getElementById(\'CalcInput\').value += document.getElementById(\'resultR\').value">Insert</button><br><input style="display: inline-block;" id="maxR"><input style="display: inline-block;" id="minR"></div>');
        alert("You searched for it, and you found something that isn't being put in because of janky JavaScript stuff.\nDo keep in mind that it doesn't work as intended. That is why it was never put in.");
        alert("The top bar is the maximum and the bottom bar is the minimum.\nI could never get the minimum to work, so if you do, then send me an email or make a new issue on the repo.")
        $(document).ready(function(){
            $('#Calc').draggable();
        });
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
function square() {
    PCount2 = eval(PCount2+1)
    PCount += 1
    document.getElementById("CalcInput").value += "√("
    console.log("PCount2 = ", PCount2);
    console.log("PCount = ", PCount);
}
function expo() {
    PCount = eval(PCount+1);
    PCount2 += 1;
    document.getElementById("CalcInput").value += "^(";
    console.log("PCount2 = ", PCount2);
    console.log("PCount = ", PCount);
}
function para() {
    if (PCount > 0) {
        console.log("Right parathesis added.")
        document.getElementById("CalcInput").value += ")";
        PCount = eval(PCount-1);
        PCount2 = eval(PCount2-1);
        console.log("PCount2 = ", PCount2);
        console.log("PCount = ", PCount);
    }
    else {
        console.log("Left parathesis added.")
        document.getElementById("CalcInput").value += "(";
        PCount = eval(PCount+1);
        PCount2 = eval(PCount2+1);
        console.log("PCount2 = ", PCount2);
        console.log("PCount = ", PCount);
    }
}
function para2() {
    PCount += 1
    PCount2 += 1
    document.getElementById("CalcInput").value += "("
}
function Randomize() {
    let min = document.getElementById("minR").value
    let max = document.getElementById("maxR").value
    let RN = Math.floor((Math.random()*max)+min)
    console.log("Min: "+min+". Max: "+max+". Result: "+RN+".")
    document.getElementById("resultR").value = RN
}
function DEL() {
    document.getElementById("CalcInput").value = document.getElementById("CalcInput").value.slice(0, -1);
};






// Average maker, yay...
var AverIC = 2;
var AverIC2 = 2;
var Total = 1;
function Add() {
    $("#Aver").append('<input id="AverI'+AverIC+'">')
    AverIC += 1
}
function AvCalc() {
    console.log("AvCalc triggered.")
    while (AverIC > AverIC2) {
        console.log("AvCalc while loop triggered.")
        if (AverIC2 < AverIC) {
            console.log("AvCalc while > if triggered.")
            AverIC3 = "AverI"+AverIC2
            Total = eval(document.getElementById(AverIC3).value+Total);
            AverIC2 += 1;
            if (AverIC2 < AverIC) {
                console.log("AvCalc while > else triggered.")
                Total = eval(Total/AverIC);
                if (window.confirm("Do you want to copy the result?") == true) {
                    navigator.clipboard.writeText(Total);
                    AverIC2 = 2;
                    return
                }
                else {
                    alert("The answer is:\n"+Total);
                    AverIC2 = 2;
                    return
                };
            };
        };
    };
    if (AverIC == 2) {
        alert("You need more fields to get an answer.")
    }
};
function AvCalc2() {
    AvCalc2 = AvCalc
    while (AvCalc > 5) {
        AvResult = eval(AvResult+document.getElementById("AverI"+AverIC2+""))
        AverIC2 = eval(AverIC2-1) 
    }
}




/*
if (document.getElementById("AverI3").value == "" && document.getElementById("AverI4").value == "" && document.getElementById("AverI2").value != "" && document.getElementById("AverI1") != "") {
    AvResult = eval((document.getElementById("AverI1").value+document.getElementById("AverI2").value)/2)
    AvResultWin = window.open("", "MsgWindow", "")
    AvResultWin.document.write("<p>"+AvResult+"</p>")
}
else if (document.getElementById("AverI3").value == "" && document.getElementById("AverI4").value == "" && document.getElementById("AverI2").value != "" && document.getElementById("AverI1") == "") {
    alert("Please fill in more than 1 field.")
}

else if (document.getElementById("AverI3").value == "" && document.getElementById("AverI4").value == "" && document.getElementById("AverI2").value == "" && document.getElementById("AverI1") != "") {
    alert("Please fill in more than 1 field.");
}
else if (document.getElementById("AverI3").value != "" && document.getElementById("AverI4").value == "" && document.getElementById("AverI2") == "" && document.getElementById("AverI1") != "") {
    AvResult = eval((document.getElementById("AverI1").value+document.getElementById("AverI4").value)/2)
    AvResultWin = window.open("", "MsgWindow", "")
    AvResultWin.document.write("<p>"+AvResult+"</p>")
}
else if (document.getElementById("AverI3").value != "" && document.getElementById("AverI4").value == "" && document.getElementById("AverI2") != "" && document.getElementById("AverI1") != "") {
    AvResult = eval((document.getElementById("AverI1").value+document.getElementById("AverI2").value+document.getElementById("AverI4").value)/3)
    AvResultWin = window.open("", "MsgWindow", "")
    AvResultWin.document.write("<p>"+AvResult+"</p>")
}
else if (document.getElementById("AverI3").value == "" && document.getElementById("AverI4").value != "" && document.getElementById("AverI2") == "" && document.getElementById("AverI1") != "") {
    AvResult = eval((document.getElementById("AverI1").value+document.getElementById("AverI3").value)/2)
    AvResultWin = window.open("", "MsgWindow", "")
    AvResultWin.document.write("<p>"+AvResult+"</p>")
}
else if (document.getElementById("AverI3").value == "" && document.getElementById("AverI4").value != "" && document.getElementById("AverI2") != "" && document.getElementById("AverI1") != "") {
    AvResult = eval((document.getElementById("AverI1").value+document.getElementById("AverI3").value+document.getElementById("AverI2").value)/3)
    AvResultWin = window.open("", "MsgWindow", "")
    AvResultWin.document.write("<p>"+AvResult+"</p>")
}
else if (document.getElementById("AverI3").value == "" && document.getElementById("AverI4").value == "" && document.getElementById("AverI2").value != "" && document.getElementById("AverI1") != "") {
    AvResult = eval((document.getElementById("AverI1").value+document.getElementById("AverI2").value+document.getElementById("AverI4").value+document.getElementById("AverI3").value)/4)
    AvResultWin = window.open("", "MsgWindow", "")
    AvResultWin.document.write("<p>"+AvResult+"</p>")
}
else if (document.getElementById("AverI3").value == "" && document.getElementById("AverI4").value == "" && document.getElementById("AverI2").value == "" && document.getElementById("AverI1") != "") {
    AvResult = eval((document.getElementById("AverI1").value+document.getElementById("AverI2").value+document.getElementById("AverI4").value+document.getElementById("AverI3").value)/2)
    AvResultWin = window.open("", "MsgWindow", "")
    AvResultWin.document.write("<p>"+AvResult+"</p>")
}
*/