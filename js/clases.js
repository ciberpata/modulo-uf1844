class HTML {
  refEtiquetaCreada;
  constructor(etiquetaACrear, etiquetaRef) {
    this.etiquetaACrear = etiquetaACrear;
    this.etiquetaRef = etiquetaRef;
  }

  set _etiquetaACrear(valor) {
    return (this.etiquetaACrear = valor);
  }
  introduzcoAtributos(atributo, valor) {
    this.refEtiquetaCreada.setAttribute(atributo, valor);
  }
  creoElemento() {
    this.refEtiquetaCreada = document.createElement(this.etiquetaACrear);
    return this.refEtiquetaCreada;
  }
  introduzcoTexto(texto) {
    this.refEtiquetaCreada.textContent = texto;
  }
  pintoElementoCreado() {
    let refEtiquetaSeleccionada = document.querySelector(this.etiquetaRef);
    refEtiquetaSeleccionada.append(this.refEtiquetaCreada);
  }
}

class Boton extends HTML {
  refInputAficion;
  #novoLi;
  #refSeccion;
  constructor(etiquetaACrear, etiquetaRef, _claseEstilo) {
    super(etiquetaACrear, etiquetaRef); // actualiza
    this.claseEstilo = _claseEstilo;
  }

  introduzcoAtributos(atributo, valor) {
    this.refEtiquetaCreada.setAttribute(atributo, valor);
  }

  pintoInputAficion() {
    this.refInputAficion = document.querySelector(
      "form > input + input + button",
    );
    this.refInputAficion.before(this.refEtiquetaCreada);
  }

  engadirInputAficion() {
    let refForm = document.querySelector("form");
    super._etiquetaACrear = "input";
    super.creoElemento();
    this.introduzcoAtributos("type", "text");
    this.introduzcoAtributos("name", "aficion");
  }

  engadoLista() {
    let ficheiro = document.forms[0].imaxen.files[0];
    let imaxen = URL.createObjectURL(ficheiro);
    let etiquetaImaxe = document.createElement("img");
    etiquetaImaxe.setAttribute("src", `${imaxen}`);

    let refClaseEstiloImaxen = new this.claseEstilo(etiquetaImaxe); // let refClase = new Estilo(ref)
    refClaseEstiloImaxen.estiloImaxen();

    let unDiv = document.createElement("div"); // Envoltorio total para a imaxe,nome e lista
    let refUnDiv = new this.claseEstilo(unDiv);
    unDiv.addEventListener("mouseover", (e) => {
      refUnDiv.estiloCardMouseOver();
    });
    unDiv.addEventListener("mouseout", (e) => {
      refUnDiv.estiloCard();
    });
    refUnDiv.estiloCard();
    let divNomeELista = document.createElement("div"); //
    let divNome = document.createElement("h3");
    let refClaseEstiloH3 = new this.claseEstilo(divNome);
    refClaseEstiloH3.estiloH3();
    divNome.textContent =
      document.forms[0].elements.nome.value +
      " " +
      document.forms[0].elements.apelido.value;
    divNomeELista.append(divNome);

    unDiv.append(etiquetaImaxe);

    let datos = document.createElement("ul");
    console.log(this.claseEstilo);
    let refUl = new this.claseEstilo(datos);
    refUl.estiloUl();

    let tamano = document.forms[0].elements.aficion;
    this.#refSeccion = document.querySelector("section");

    for (let dato of tamano) {
      this.#novoLi = document.createElement("li");
      this.#novoLi.textContent = dato.value;
      let refLi = new this.claseEstilo(this.#novoLi);
      refLi.estiloLista();
      datos.append(this.#novoLi);
    }

    divNomeELista.append(datos);
    unDiv.append(divNomeELista);
    this.#refSeccion.append(unDiv);
  }

  eventoListener() {
    if (document.querySelectorAll("button").length == 2) {
      funcionEnvioForm.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("dende o evento funcionEnvioForm");
        this.engadoLista();
        for (let aficion of document.querySelectorAll(
          'input[name="aficion"]',
        )) {
          aficion.remove();
        }
      });
      funcionEngadirAficion.addEventListener("click", (e) => {
        e.preventDefault();
        this.engadirInputAficion();
        this.pintoInputAficion();
      });
    }
  }
}

class Estilos {
  constructor(referencia) {
    this.referencia = referencia;
  }
  estiloImaxen() {
    this.referencia.style.borderRadius = "150px";
    this.referencia.style.background = "#e5e5e5";
    this.referencia.style.padding = "10px";
    this.referencia.style.width = "150px";
    this.referencia.style.height = "150px";

    this.referencia.addEventListener("mouseover", function (e) {
      e.target.style.transition = "background 0.5s ease-out";
      e.target.style.background = "pink";
    });

    this.referencia.addEventListener("mouseout", function (e) {
      e.target.style.transition = "background 0.5s ease-out";
      e.target.style.background = "#e5e5e5";
    });
  }
  estiloTitulo() {
    this.referencia.style.fontFamily = "fantasy";
    this.referencia.style.color = "#373C47";
  }
  estiloNome() {
    this.referencia.style.fontFamily = "fantasy";
  }
  estiloCard() {
    this.referencia.style.display = "flex";
    this.referencia.style.border = "0px transparent";
    this.referencia.style.borderRadius = "15px";
    this.referencia.style.alignItems = "center";
    this.referencia.style.padding = "15px";
    this.referencia.style.margin = "5px";
    this.referencia.style.gap = "10px";
    this.referencia.style.boxShadow = "";
  }
  estiloCardMouseOver() {
    this.referencia.style.cursor = "pointer";
    this.referencia.style.boxShadow = "-1px -1px 16px 0px rgba(0,0,0,0.75)";
    this.referencia.style.display = "flex";
    this.referencia.style.border = "1px solid black";
    this.referencia.style.borderRadius = "15px";
    this.referencia.style.alignItems = "center";
    this.referencia.style.padding = "15px";
    this.referencia.style.margin = "5px";
    this.referencia.style.gap = "10px";
  }
  estiloUl() {
    this.referencia.style.display = "flex";
    this.referencia.style.listStyle = "none";
    this.referencia.style.alignItems = "center";
    this.referencia.style.width = "150px";
    this.referencia.style.flexWrap = "wrap";
    this.referencia.style.gap = "5px";
    this.referencia.style.padding = "0";
  }
  estiloForm() {
    this.referencia.style.display = "flex";
    this.referencia.style.flexDirection = "column";
    this.referencia.style.width = "500px";
    this.referencia.style.boxShadow = "-1px -1px 16px 0px rgba(0,0,0,0.75)";
    this.referencia.style.border = "1px transparent";
    this.referencia.style.borderRadius = "10px";
  }
  estiloSeccion() {
    this.referencia.style.borderRadius = "10px solid white";
    this.referencia.style.width = "60%";
    this.referencia.style.display = "flex";
    this.referencia.style.flexWrap = "wrap";
    this.referencia.style.justifyContent = "center";
  }
  estiloBackgroundColor() {
    this.referencia.style.backgroundColor = "orange";
  }
  estiloDivA() {
    this.referencia.style.cursor = "pointer";
    this.referencia.style.padding = "10px";
    this.referencia.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#849FFF";
      this.style.color = "#FFF";
      this.style.borderRadius = "10px";
    });
    this.referencia.addEventListener("mouseout", function () {
      this.style.color = "green";
      this.style.backgroundColor = "transparent";
      this.style.color = "rgb(169 171 179)";
    });
  }

  estiloEnlacesMenu() {
    this.referencia.style.fontFamily = "circular";
    this.referencia.style.width = "30px";
    this.referencia.style.flex = "1.5";
    this.referencia.style.display = "flex";
    this.referencia.style.justifyContent = "space-around";
  }

  estiloNav() {
    this.referencia.style.display = "flex";
    this.referencia.style.justifyContent = "space-between";
    this.referencia.style.alignItems = "center";
    this.referencia.style.color = "rgb(169 171 179)";
    this.referencia.style.width = "100%";
    this.referencia.style.height = "5vh";
    this.referencia.style.gap = "20vw";
    this.referencia.style.marginBottom = "50px";
  }

  estiloMain() {
    this.referencia.style.display = "flex";
    this.referencia.style.backgroundColor = "#17202A";
    this.referencia.style.color = "#F8F9F9";
    this.referencia.style.border = "1px solid black";
    this.referencia.style.padding = "5px";
  }
  estiloLista() {
    this.referencia.style.backgroundColor = "white";
    this.referencia.style.color = "#87A0CE";
    this.referencia.style.border = "1px solid #87A0CE";
    this.referencia.style.borderRadius = "20px";
    this.referencia.style.padding = "4px";
    this.referencia.style.fontFamily = "monospace";
  }
  estiloBuscador() {
    this.referencia.style.height = "40px";
    this.referencia.style.border = "1px solid #dadcdf";
    this.referencia.style.borderRadius = "8px";
    this.referencia.style.fontSize = "16px";
    this.referencia.style.flex = "0.5";
    this.referencia.style.fontFamily = "circular";
    this.referencia.style.padding = "0 0 0 50px";
  }
  estiloInputForm() {
    this.referencia.style.fontFamily = "monospace";
    this.referencia.style.padding = "15px";
    this.referencia.style.fontSize = "12px";
    this.referencia.style.border = "transparent";
    this.referencia.style.borderBottom = "1px solid #B4B1BC";
    this.referencia.style.margin = "15px";
  }
  estiloBotonForm() {
    this.referencia.style.cursor = "pointer";
    this.referencia.style.backgroundColor = "#171736";
    this.referencia.style.color = "white";
    this.referencia.style.margin = "10px";
    this.referencia.style.padding = "10px";
    this.referencia.style.borderRadius = "70px";
    this.referencia.style.fontFamily = "monospace";
    this.referencia.style.fontWeight = "bolder";
  }

  estiloH3() {
    this.referencia.style.fontFamily = "circular";
  }
}

export { HTML, Boton, Estilos };
