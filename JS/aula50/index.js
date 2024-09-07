function funcao(a, b = 0, c = 4) {
    console.log(a + b + c);
}
funcao(1);

function funcaoDois({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
funcaoDois({ nome: 'Vinicius', sobrenome: 'Pitaméia', idade: 26 });

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50);
