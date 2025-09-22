//Crie una funcion que reciba dos valores y retorna la division entre ellos.
//Si no es posible realizar la division, la funcion debe retornar un error.

function divisionNum(n1: number, n2: number) {
  if (n2 === 0) return "Error: no se puede dividir por cero";
  return n1 / n2;
}

const division = divisionNum(0, 3);
console.log(division);
