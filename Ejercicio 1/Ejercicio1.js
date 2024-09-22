function autoeraseAmount(id){
    if(document.getElementById(id).value == "Monto cuenta")
        document.getElementById(id).value = null;
}

function autoerasePercent(id){
    if(document.getElementById(id).value == "Porcentaje")
        document.getElementById(id).value = null;
}

function calcPropina(){
    var amount = +document.getElementById("AmountField").value;
    var percentage = +document.getElementById("PercentField").value / 100;
    var propina = +(amount * percentage).toFixed(2);
    
    document.getElementById("PropField").innerText = propina;
    document.getElementById("TotalField").innerText = amount + propina;
}