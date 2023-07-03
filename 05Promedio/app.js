let modulo = document.querySelector("#modulo");
let ingles = document.querySelector("#ingles");
let calculo = document.querySelector("#calculo");
let ecologia = document.querySelector("#ecologia");
let fisica = document.querySelector("#fisica");
let res = document.querySelector("#promedio");

modulo.oninput = () => { calcular(); }
ingles.oninput = () => { calcular(); }
calculo.oninput = () => { calcular(); }
ecologia.oninput = () => { calcular(); }
fisica.oninput = () => { calcular(); }

const calcular = () => {
  document.querySelector("#mo").innerHTML = modulo.value;
  document.querySelector("#in").innerHTML = ingles.value;
  document.querySelector("#ca").innerHTML = calculo.value;
  document.querySelector("#ec").innerHTML = ecologia.value;
  document.querySelector("#fi").innerHTML = fisica.value;

  let m = parseFloat(modulo.value)
  let i = parseFloat(ingles.value)
  let c = parseFloat(calculo.value)
  let e = parseFloat(ecologia.value)
  let f = parseFloat(fisica.value)
  let promedio = (i + c + e + m + f) / 5;
  res.innerHTML = promedio.toFixed(1);
  if (promedio >= 5 && promedio < 7) {
    res.className = "bg-danger text-white";

  } else if (promedio >= 7 && promedio < 9) {
    res.className = "bg-warning text-white";
  } else {
    res.className = "bg-success text-white";
  }
}