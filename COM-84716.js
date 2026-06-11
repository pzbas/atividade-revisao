// verificar se e par ou impar
const numero = 6

function verificarNumero(numero) {
  if (numero % 2 === 0) { 
    return "par"
  } else if (numero === 0) {
    return "zero"
  } else {
    return "impar"
  }
}

console.log(verificarNumero(numero))