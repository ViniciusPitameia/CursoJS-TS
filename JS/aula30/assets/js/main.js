const h1 = document.querySelector('.conteiner h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
    return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outtubro', 'novembro', 'dezembro'];
    return meses[numeroMes];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function criaDate(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
    ` de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
}

h1.innerHTML = criaDate(data);