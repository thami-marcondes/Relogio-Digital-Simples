var msg = document.getElementById('msg')
var data = new Date()
var hora = data.getHours()
if (hora >= 0 && hora <= 12) {
    msg.innerHTML = `Bom dia!`

} else if (hora >= 12 && hora <= 18) {
    msg.innerHTML = `Boa Tarde!`

} else if (hora >= 18) {
    msg.innerHTML = `Boa Noite!`

}

function diaDaSemana() {
    var relogio = document.getElementById('relogio')
    var data = new Date()
    var semana = data.getDay()

    switch (semana) {
        case 0:
            relogio.innerHTML = 'Domingo'
            break
        case 1:
            relogio.innerHTML = 'Segunda-Feira'
            break
        case 2:
            relogio.innerHTML = 'Terça-Feira'
            break
        case 3:
            relogio.innerHTML = 'Quarta-Feira'
            break
        case 4:
            relogio.innerHTML = 'Quinta-Feira'
            break
        case 5:
            relogio.innerHTML = 'Sexta-Feira'
            break
        case 6:
            relogio.innerHTML = 'Sábado'
            break
    }

}

function relogio() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()

    if (hora < 10) {
        hora = '0' + hora
    } else if (min < 10) {
        min = '0' + min
    } else if (seg < 10) {
        seg = '0' + seg
    }
    document.querySelector('#relogio').innerHTML = hora + ':' + min + ':' + seg

}
window.setInterval('relogio()', 1000)
