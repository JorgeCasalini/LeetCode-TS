//Crie una funcion que recibe una variable y retorna su tipo.
//Usamos el operador typeof para determinar el tipo de la variable.

function typeVariable(valor1: any) {
  return typeof valor1;
}

const type = typeVariable(true);
console.log(type);
