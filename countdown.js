const dia = document.getElementById('dias')
const hora = document.getElementById('horas')
const minuto = document.getElementById('minutos')
const segundo = document.getElementById('segundos')

const dataInicio = "2022-10-20"
const dataEvento = "2022-12-01"

let dataInicial = new Date(dataInicio).getTime()
let dataEvent = new Date(dataEvento).getTime()
const ONE_SEC = 1000

function countDown() {
    
    dataInicial+=ONE_SEC
    let segTotal = (dataEvent - dataInicial) / ONE_SEC;

    let finalDias = Math.floor(segTotal / 60 / 60 / 24)
    let finalHoras = Math.floor(segTotal / 60 / 60) % 24
    let finalMinutos = Math.floor(segTotal / 60) % 60
    let finalSegundos = Math.floor(segTotal) % 60

    dia.innerHTML = `${formatTime(finalDias)}D`
    hora.innerHTML = `${formatTime(finalHoras)}H`
    minuto.innerHTML = `${formatTime(finalMinutos)}M`
    segundo.innerHTML = `${formatTime(finalSegundos)}S`
}


function formatTime(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo
}

countDown()
setInterval(countDown, ONE_SEC)