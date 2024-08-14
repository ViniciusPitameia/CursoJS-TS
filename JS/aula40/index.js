const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        continue;   // Continua para a próxima iteração
    }

    if (numero === 7) {
        break;   // Sai do laço
    }

    console.log(numero);
}