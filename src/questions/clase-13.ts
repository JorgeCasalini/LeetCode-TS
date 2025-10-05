//Crea una funcion que reciba los lados de un retangulo como parámetro y calcule su perímetro
//  y el área de ese retángulo. Retorne su perímetro y área.

type RectanguloProps = {
  base: number;
  ancho: number;
};

function calcularRectangulo({ base, ancho }: RectanguloProps) {
  const area = base * ancho;
  const perimetro = 2 * (base + ancho);

  return {
    area: area,
    perimetro: perimetro,
  };
}

const rectangulo = calcularRectangulo({ base: 3, ancho: 2 });
console.log(rectangulo);
