function atualizarRelogio() {
    const agora = new Date();
    
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    horas = String(horas).padStart(2, '0');
    minutos = String(minutos).padStart(2, '0');
    segundos = String(segundos).padStart(2, '0');

    const horarioFormatado = `${horas}:${minutos}:${segundos}`;

    const displayRelogio = document.getElementById('relogio');
    
    if (displayRelogio) {
        displayRelogio.textContent = horarioFormatado;
    } else {
        console.error("Erro: Elemento com ID 'relogio' não encontrado.");
    }
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000); 

console.log("Relógio Molezinha iniciado com sucesso!");