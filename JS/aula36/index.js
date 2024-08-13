// For in  ->  lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Pitameia',
    idade: 26
}

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

/*
for (let index in frutas) {
    console.log(frutas[index]);
}
*/