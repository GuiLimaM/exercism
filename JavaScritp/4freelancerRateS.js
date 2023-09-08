function dayRate(valorHora) {
    return valorHora * 8;
} 

function daysInBudget(orçamento, valorHora) {
    var result = orçamento / dayRate(valorHora);
    return Math.floor(result);
}

function priceWithMonthlyDiscount(valorHora, diasDoProjeto, desconto) {
    var totalMes = Math.floor(diasDoProjeto / 22);
    var diasRestante = diasDoProjeto % 22;
    var valorDoDia = dayRate(valorHora);
    var valorMes = totalMes * (valorDoDia * 22);
    var mesComDesconto = valorMes - Math.round((valorMes  * desconto));
    var valorDiasRestantes = valorDoDia * diasRestante;
    var result = Math.ceil(mesComDesconto) + valorDiasRestantes
    return Math.ceil(result);
}