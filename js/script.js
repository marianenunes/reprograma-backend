Function calcularValorHora(){
    const ganho = document.querySelector('#ganho-mes')
    const horas = document.querySelector('#horas-dias')
    const valorHoras = ganho.value / (22 * horas.value)

    const resposta = document.querySelector('#resposta')
    resposta.innerHTML = 'R$ ' + valorHoras.toFixed(2)
}