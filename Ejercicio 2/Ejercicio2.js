function CelFah(){
    var origin = document.getElementById("InputArea").value;
    let result = (origin * 9 / 5) + 32;
    text = "Resultado: " + origin + " grados Celsius " + result + " grados Fahrenheit";
    document.getElementById("ResultText").innerText = text;
    console.log(text);
}

function FahCel(){
    var origin = document.getElementById("InputArea").value;
    let result = (origin - 32) * 5 / 9;
    text = "Resultado: " + origin + " grados Fahrenheit " + result + " grados Celsius";
    document.getElementById("ResultText").innerText = text;
    console.log(text);
}

function autoerase(id){
    document.getElementById(id).value = null;
}