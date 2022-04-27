let numero1 = <HTMLInputElement>document.getElementById("numero1");
let numero2 = <HTMLInputElement>document.getElementById("numero2");
let btnSumar = <HTMLButtonElement>document.getElementById("btnSumar");
let btnRestar = <HTMLButtonElement>document.getElementById("btnRestar");
let btnDividir = <HTMLButtonElement>document.getElementById("btnDividir");
let btnMultiplicar = <HTMLButtonElement>(
  document.getElementById("btnMultiplicar")
);
let btnPotenciar = <HTMLButtonElement>document.getElementById("btnPotenciar");
let Divresultado = <HTMLParagraphElement>document.getElementById("resultado");
let Num1: number;
let Num2: number;

function calcular(operacion: string, Num1: number, Num2: number) {
  let aux: number;
  if (operacion === "Suma") {
    aux = Num1 + Num2;
  } else if (operacion === "Resta") {
    aux = Num1 - Num2;
  } else if (operacion === "Dividir") {
    aux = Num1 / Num2;
  } else if (operacion === "Multiplicar") {
    aux = Num1 * Num2;
  } else {
    aux = Num1 ** Num2;
  }
  return aux;
}
btnSumar.addEventListener("click", () => {
  Num1 = Number(numero1.value);
  Num2 = Number(numero2.value);
  Divresultado.innerHTML = `El resultado de la suma es ${calcular(
    "Suma",
    Num1,
    Num2
  )}`;
});
btnRestar.addEventListener("click", () => {
  Num1 = Number(numero1.value);
  Num2 = Number(numero2.value);
  Divresultado.innerHTML = `El resultado de la resta ${calcular(
    "Resta",
    Num1,
    Num2
  )}`;
});
btnDividir.addEventListener("click", () => {
  Num1 = Number(numero1.value);
  Num2 = Number(numero2.value);
  Divresultado.innerHTML = `El resultado de dividir ${calcular(
    "Dividir",
    Num1,
    Num2
  )}`;
});
btnMultiplicar.addEventListener("click", () => {
  Num1 = Number(numero1.value);
  Num2 = Number(numero2.value);
  Divresultado.innerHTML = `El resultado de multiplicar ${calcular(
    "Multiplicar",
    Num1,
    Num2
  )}`;
});
btnPotenciar.addEventListener("click", () => {
  Num1 = Number(numero1.value);
  Num2 = Number(numero2.value);
  Divresultado.innerHTML = `El resultado de potenciar ${calcular(
    "Potenciar",
    Num1,
    Num2
  )}`;
});
