// Creación de un objeto usando inicializador de objetos
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

// Probar el objeto
persona.saludar(); 
// Creación de un objeto usando constructor
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
        console.log("Hola, soy " + this.nombre);
    };
}

// Crear una nueva instancia del objeto
let persona1 = new Persona("Ana", 25);

// Probar el objeto
persona1.saludar(); // Salida: Hola, soy Ana
// Creación de un objeto usando Object.create()
let prototipoPersona = {
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

let persona2 = Object.create(prototipoPersona);
persona2.nombre = "Carlos";
persona2.edad = 35;

// Probar el objeto
persona2.saludar(); // Salida: Hola, soy Carlos
// Agregando una nueva propiedad a un objeto creado con inicializador
persona.apellido = "Pérez";

// Probar la nueva propiedad
console.log(persona.apellido); // Salida: Pérez
// Agregar una propiedad a través de constructor
Persona.prototype.apellido = "Martínez";

// Probar la nueva propiedad en el objeto creado
console.log(persona1.apellido); // Salida: Martínez
// Agregar una propiedad a un objeto creado con Object.create()
persona2.apellido = "López";

// Probar la nueva propiedad
console.log(persona2.apellido); // Salida: López
