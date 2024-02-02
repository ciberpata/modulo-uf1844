// ARCHIVOS DE CABECEIRA

import { pintando, iniciando, buscar } from "./funciones.js";
import { elementos } from "../datos/etiquetas.js";

// PROGRAMA

iniciando();
pintando(elementos.header.etiqueta, elementos.h1.etiqueta, elementos);
pintando(elementos.header.etiqueta, elementos.nav.etiqueta, "");
pintando(elementos.nav.etiqueta, elementos.input.etiqueta, "");

pintando(elementos.nav.etiqueta, elementos.a.etiqueta, elementos);
pintando(elementos.main.etiqueta, elementos.seccion.etiqueta, "");
pintando(elementos.main.etiqueta, elementos.form.etiqueta, "");
pintando(
  elementos.form.etiqueta,
  elementos.input.etiqueta,
  elementos.form.atributos.doInput.placeholder.nome,
); // input nome
pintando(
  elementos.form.etiqueta,
  elementos.input.etiqueta,
  elementos.form.atributos.doInput.placeholder.apelido,
); // input apelido
pintando(elementos.form.etiqueta, elementos.input.etiqueta, elementos);
pintando(
  elementos.form.etiqueta,
  elementos.form.etiquetaBoton,
  elementos.form.atributos.doBoton.funcionEngadirAficion,
);
pintando(
  elementos.form.etiqueta,
  elementos.form.etiquetaBoton,
  elementos.form.atributos.doBoton.funcion,
);
console.log(
  "..document.getElementById(`buscador`)",
  document.getElementById("buscador"),
);
//document.getElementById("buscador").addEventListener("input",()=> console.log("input? ",buscador.value))
buscador.addEventListener("keyup", () => {
  console.log("input? ", buscador.value);
  buscar();
});
/*
buscador.addEventListener("click", () => {
  console.log("boas dende inputbusqueda");

  //buscar();
});*/
