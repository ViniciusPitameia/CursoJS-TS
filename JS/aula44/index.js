/*
try {
    console.log(naoExisto);
} catch(error) {
    console.log('naoExiste não existe.');
}
*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.')
    }
    
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    console.log(error)
}