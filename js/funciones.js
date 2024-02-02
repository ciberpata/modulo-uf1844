// ARCHIVOS DE CABECEIRA
import { HTML, Boton, Estilos } from "./clases.js";

// PROGRAMA
function pintando(etiquetaIntrouduciendoEn, etiquetaACrear, elementos) {
  let claseVariable;
  switch (etiquetaACrear) {
    case "h1":
      {
        claseVariable = new HTML(etiquetaACrear, etiquetaIntrouduciendoEn);
        let ref = claseVariable.creoElemento();
        claseVariable.introduzcoTexto(elementos.h1.texto);
        claseVariable.pintoElementoCreado();
        claseVariable = new Estilos(ref);
        claseVariable.estiloTitulo();
      }
      break;
    case "nav":
      {
        claseVariable = new HTML(etiquetaACrear, etiquetaIntrouduciendoEn);
        let ref = claseVariable.creoElemento();
        claseVariable.pintoElementoCreado();
        claseVariable = new Estilos(ref);
        claseVariable.estiloNav();
      }
      break;

    case "input":
      {
        claseVariable = new HTML(etiquetaACrear, etiquetaIntrouduciendoEn);
        let ref = claseVariable.creoElemento();

        claseVariable.pintoElementoCreado();

        if (elementos === "") {
          claseVariable.introduzcoAtributos("id", "buscador");
          claseVariable.introduzcoAtributos(
            "placeholder",
            "🔍 ...buscar usuarios",
          );
          ref.placeholder.fontcolor("orange");
          claseVariable = new Estilos(ref);
          claseVariable.estiloBuscador();
        } else {
          if (document.querySelectorAll("form > input").length < 3) {
            claseVariable.introduzcoAtributos("placeholder", elementos);
          }
          claseVariable = new Estilos(ref);
          claseVariable.estiloInputForm();

          if (document.querySelectorAll("form > input").length === 3) {
            let ref1 = document.querySelectorAll("form > input")[0];
            let ref2 = document.querySelectorAll("form > input")[1];
            let ref3 = document.querySelectorAll("form > input")[2];
            ref1.setAttribute("name", "nome");
            ref2.setAttribute("name", "apelido");
            ref3.setAttribute("type", "file");
            ref3.setAttribute("name", "imaxen");
          }
        }
      }
      break;

    case "a":
      {
        let introducindoDiv = document.querySelector(
          elementos.a.referenciaNavInput,
        );

        let creoDiv = document.createElement(elementos.a.div.etiqueta);
        introducindoDiv.after(creoDiv);

        for (let dato in elementos.a.elementosNavegacion) {
          claseVariable = new HTML(
            etiquetaACrear,
            elementos.a.referenciaNavInputDiv,
          );
          claseVariable.creoElemento();
          claseVariable.introduzcoTexto(
            elementos.a.elementosNavegacion[`${dato}`],
          );
          claseVariable.pintoElementoCreado();
          let ref = document.querySelector(elementos.a.referenciaNavInputDiv);
          claseVariable = new Estilos(ref);
          claseVariable.estiloEnlacesMenu();
        }
        let ref2 = document.querySelectorAll("nav > div > a");
        for (let indice = 0; indice < ref2.length; indice++) {
          claseVariable = new Estilos(ref2[indice]);
          claseVariable.estiloDivA();
        }
        console.log("referencias ?????", ref2[0]);
      }
      break;

    case "section":
      {
        claseVariable = new HTML(etiquetaACrear, etiquetaIntrouduciendoEn);
        let ref = claseVariable.creoElemento();
        claseVariable.pintoElementoCreado();
        claseVariable = new Estilos(ref);
        claseVariable.estiloSeccion();
      }
      break;

    case "form":
      {
        claseVariable = new HTML(etiquetaACrear, etiquetaIntrouduciendoEn);
        let ref = claseVariable.creoElemento();
        claseVariable.pintoElementoCreado();
        claseVariable = new Estilos(ref);
        claseVariable.estiloForm();
      }
      break;
    case "button":
      {
        claseVariable = new Boton(
          etiquetaACrear,
          etiquetaIntrouduciendoEn,
          Estilos,
        );
        console.log("elementos....", elementos);
        let ref = claseVariable.creoElemento();
        if (elementos === "funcionEnvioForm") {
          claseVariable.introduzcoAtributos("id", elementos);
          claseVariable.introduzcoTexto("Enviar");
        } else {
          claseVariable.introduzcoAtributos("id", elementos);
          claseVariable.introduzcoTexto("Enviar afición");
        }
        claseVariable.pintoElementoCreado();
        claseVariable.eventoListener();

        claseVariable = new Estilos(ref);
        claseVariable.estiloBotonForm();
      }
      break;
  }
}

function iniciando() {
  let datos = {
    cabecera: "header",
    principal: "main",
  };
  for (let etiqueta in datos) {
    let ref = document.createElement(datos[`${etiqueta}`]);
    document.body.append(ref);
  }

  let referenciaMain = document.querySelector("main");
  referenciaMain.style.display = "flex";
}

// EXPORTO AS FUNCIONS

export { pintando, iniciando, buscar };

// FUNCIONES DE JUAN
function buscar() {
  var input = document.getElementById("buscador").value;
  var etiquetah3 = document.querySelectorAll("div > h3");

  // Resetea el color de fondo de todos los elementos h3 antes de una nueva búsqueda
  for (var i = 0; i < etiquetah3.length; i++) {
    etiquetah3[i].style.backgroundColor = "";
  }

  // Si el campo de búsqueda está vacío, no se realiza ninguna búsqueda
  if (input === "") {
    return;
  }

  var encontrado = false;
  for (var i = 0; i < etiquetah3.length; i++) {
    if (etiquetah3[i].innerHTML.includes(input)) {
      etiquetah3[i].style.backgroundColor = "yellow";
      encontrado = true;
    }
  }
  if (!encontrado) {
    alert("No se encontró ningún elemento.");
  }
}
