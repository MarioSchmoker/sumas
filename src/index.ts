let dimensionArreglo: number = Number(
  prompt("Ingrese la cantidad de celdas deseadas")
);
let indice: number;
let totalArreglo: number = 0;
let numeroDeseado: number[] = new Array(dimensionArreglo);

for (indice = 0; indice < dimensionArreglo; indice++) {
  numeroDeseado[indice] = Number(
    prompt("Ingrese el número deseado en la posición " + (indice + 1))
  );
  console.log(
    "El numero ingresado en la posición ",
    indice,
    " es ",
    numeroDeseado[indice]
  );
  totalArreglo += numeroDeseado[indice];
}
console.log(" La suma de los arreglo es de :", totalArreglo);
