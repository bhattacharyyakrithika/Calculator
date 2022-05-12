function disp(key) {
    var prev = document.getElementById("DisplayAnswer").getAttribute("value");
    document.getElementById("DisplayAnswer").setAttribute("value", prev + key);
}

function solve() {
    var x = document.getElementById("DisplayAnswer").getAttribute("value");
    var y = eval(x);
    document.getElementById("DisplayAnswer").setAttribute("value", y);
}

function del() {
    var p = document.getElementById("DisplayAnswer").getAttribute("value");
    p = p.substring(0, p.length-1);
    console.log(p);
    document.getElementById("DisplayAnswer").setAttribute("value", p);
}

function res() {
    document.getElementById("DisplayAnswer").setAttribute("value", '0');
}