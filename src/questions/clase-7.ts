//Crie una funcion que reciba dos números y retorna la suma de ellos si el resultado
//es positivo o cero. Si es negativo, retorna 'Número negativo'.

function sumaNum(n1: number, n2: number) {
  if (n1 + n2 >= 0) return n1 + n2;
  return "Numero negativo";
}

const valor = sumaNum(6, 1);
console.log(valor);
