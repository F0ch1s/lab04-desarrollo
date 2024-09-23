{
    let variableBloque = "Esta es una variable de bloque";
    const constanteBloque = "Esta es una constante de bloque";
    console.log(variableBloque); 
    console.log(constanteBloque); 
}
console.log(x === undefined); 
var x = 3;

var myvar = 'my value';

(function() {
    console.log(myvar); 
    var myvar = 'valor local';
})();
let variableSinAsignar;
console.log(variableSinAsignar); 

function externa() {
    let variableExterna = "Soy externa";

    function interna() {
        let variableInterna = "Soy interna";
        console.log(variableExterna); 
        console.log(variableInterna); 
    }

    interna();
    console.log(variableExterna); 
}

externa();
var answer = 42;
answer = 'Gracias por todo el pescado...';

parseInt("F", 16);
parseInt("17", 8);
parseInt("15", 10);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("12", 13);
parseInt("Hello", 8);
parseInt("0x7", 10);
parseInt("546", 2);

var howMany = 10;
alert("howMany.toString() is " + howMany.toString()); 
alert("45 .toString() is " + 45 .toString()); 
var x = 7;
alert(x.toString(2));
