function suma(x){
    if(x<20){
        x = x*3;
    }   
    else{
        x = x+1;
    }
    return x;
}

let variable = 4;
console.log(variable);
variable = suma(variable);
console.log(variable);
variable = suma(variable);
console.log(variable);
variable = suma(variable);
console.log(variable);