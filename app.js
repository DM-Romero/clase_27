// calculadora

const process = require('process');

const {argv} = process;

function calculadora(comando) {
    switch (comando) {
        case "sumar":
            
            break;
        case "restar":
            break;    
    
        default:
            return "comando no valido"
    }
}

console.log(calculadora(argv[2],argv[2],argv[2]));