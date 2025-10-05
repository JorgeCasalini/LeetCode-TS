//Crea una función que tome el lado de un cuadrado como parámetro y calcule su área.
//El resultado debe ser el área calculada.

type SquareProps = {
  lado: number;
};
function areaCuadrado({ lado }: SquareProps) {
  return lado * lado;
}

const area = areaCuadrado({ lado: 5 });
console.log(area + "m²");
