function relogio() {
    function getTimeFromSegundos(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSegundos(segundos);
        }, 1000);
    }

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }

        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }

        if(el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    });
}

relogio();