/* 
            Frase de exercicio 
----------------------------------------------------            
Vinicius Pitaméia Falcão tem 26 anos, pesa 75kg
tem 1.72 de altura e seu IMC é de 25.361541373715524
Vinicius nasceu em 1998
*/

const nome = 'Vinicius'
const sobrenome = 'Pitaméia Falcão'
const idade = 26
const peso = 75
const alturaEmM = 1.72
let imc  // peso / (altura * altura)
let anoNascimento 
imc = peso / (alturaEmM * alturaEmM)
anoNascimento = 2024 - 26

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)