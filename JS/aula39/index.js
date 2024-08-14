function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

//let dQuatro = random(1, 5);
//let dSeis = random(1, 7);
//let dOito = random(1, 9);
//let dDez = random(1, 11);
//let dDoze = random(1, 13);
let dVinte = random(1, 21);
//console.log(dQuatro);
//console.log(dSeis);
//console.log(dOito);
//console.log(dDez);
//console.log(dDoze);
console.log(dVinte);

console.log('#########')

while (dVinte !== 20) {
    dVinte = random(1,21);
    console.log(dVinte);
}
console.log('#########')
do {
    dVinte = random(1,21);
    console.log(dVinte);
} while(dVinte !== 20);

