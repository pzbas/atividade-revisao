const numero = 5

function verificarNumero(numero) {
  if (numero > 0) {
    return "positivo";
  } else if (numero < 0) {
    return "negativo";
  } else {
    return "zero";
  }
}

console.log(verificarNumero(numero));