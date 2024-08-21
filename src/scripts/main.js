AOS.init()

const dataEvento = new Date("Nov 19, 2024 19:00:00")
const timeStampEvento = dataEvento.getTime()

const contagemHoras = setInterval(function() {
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const distanciaEvento = timeStampEvento - timeStampAtual

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasProEvento = Math.floor(distanciaEvento / diaEmMs)
    const horasProEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs)
    const minutosProEvento = Math.floor((distanciaEvento % horaEmMs) / minutoEmMs)
    const segundosProEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasProEvento}d ${horasProEvento}h ${minutosProEvento}m ${segundosProEvento}s`

    if (distanciaEvento < 0) {
        clearInterval(contagemHoras)
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000)