let vueltas = [];
let sumaVueltas = 0;
let promedio;
let resultado;

for (let i = 0; i < 4; i++) {
  vueltas[i] = parseInt(prompt("ingrese vultas"));
  sumaVueltas = sumaVueltas + vueltas[i];
}
promedio = sumaVueltas / 4;

resultado = document.getElementById("vueltas");

resultado.innerHTML =
  "El promedio es: " + promedio + " y las vueltas fueron: " + vueltas;

console.log("elpromedio es: " + promedio);
