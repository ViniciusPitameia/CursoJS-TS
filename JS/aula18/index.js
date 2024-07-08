/* const pessoa1 = {
    nome: 'Vinicius',
    sobrenome: 'Pitameia',
    idade: 26
};

console.log(pessoa1.nome); */

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Vinicius', 'Pitameia', 26)
const pessoa2 = criaPessoa('Luiz', 'Otávio', 55)
const pessoa3 = criaPessoa('Maria', 'Oliveira', 36)
const pessoa4 = criaPessoa('João', 'Moreira', 18)
const pessoa5 = criaPessoa('Eduardo', 'Miranda', 34)

