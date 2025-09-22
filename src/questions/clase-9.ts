//Crea una funcion que recibe dos numeros y el tipo de operacion matemática
//(suma, resta, multiplicacion, division).La funcion debe realizar el
//cálculo basándose en la operacion matemática fornecida.
type ParametrosOp = {
  n1: number;
  n2: number;
  typeOp: "suma" | "resta" | "multiplicacion" | "division";
};
function operacionMath({ n1, n2, typeOp }: ParametrosOp) {
  if (typeOp === "suma") return n1 + n2;
  if (typeOp === "resta") return n1 - n2;
  if (typeOp === "multiplicacion") return n1 * n2;
  if (typeOp === "division" && n2 !== 0) return n1 / n2;
  return "No es posible dividir por 0";
}

const operacion = operacionMath({ n1: 10, n2: 2, typeOp: "division" });
console.log(operacion);
