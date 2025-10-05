//Crea una funcion que tome el lado de un cuadrado como parametro y calcule su perímetro y
//la área de ese cuadrado. El retorno debe ser el perímetro y el área calculados.
type QuadradoProps = {
  lado: number;
};

function calculosCuadrado({ lado }: QuadradoProps) {
  let area = lado * lado;
  let perimetro = lado * 4;
  return {
    perimetro,
    area,
  };
}

const cuadrado = calculosCuadrado({ lado: 5 });
console.log(cuadrado);
