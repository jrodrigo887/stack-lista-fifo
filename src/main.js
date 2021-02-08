const Stack = require('../dist/index');

function decimalBinary(decimaNumero) {
    const remStack = new Stack();

    let num = decimaNumero;
    let rem;

    let binaryString = '';
    while(num > 0) {
        rem = Math.floor(num % 2);
        remStack.push(rem);
        num = Math.floor(num / 2)
    }

    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString(); 
    }

    return binaryString;
}


const resultado = decimalBinary(15);

console.log(resultado);