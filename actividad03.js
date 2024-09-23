const foo = () => {
    console.log("foobar");
};
foo(); // Invocación

function sayHello() {
    return "Hello, ";
}

function greeting(helloMessage, name) {
    console.log(helloMessage() + name);
}

greeting(sayHello, "JavaScript!");

function sayHello() {
    return () => {
        console.log("Hello!");
    };
}

sayHello()();
function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();
function exampleFunction() {
    const x = "declared inside function";
    console.log("Inside function");
    console.log(x);
}
exampleFunction();

const x = "declared outside function";
exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);

function f() {
    try {
        console.log(0);
        throw 'bogus';
    } catch (e) {
        console.log(1);
        return true; 
    } finally {
        console.log(3);
        return false; 
    }
}
console.log(f()); // Salida: 0, 1, 3, false
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}
function getMonthName(mo) {
    mo--;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo] !== undefined) {
        return months[mo];
    } else {
        throw new UserException('InvalidMonthNo');
    }
}
let monthName;
try {
    const myMonth = 15; 
    monthName = getMonthName(myMonth);
} catch (e) {
    monthName = 'unknown';
    console.error(e.message, e.name);
}
