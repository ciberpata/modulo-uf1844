let elementos = {
  h3: {
    etiqueta: "h3",
  },
  h1: {
    etiqueta: "h1",
    texto: "Users",
  },
  input: {
    etiqueta: "input",
    atributosTypeText: { type: "type", text: "text" },
  },
  boton: {
    etiqueta: "button",
    atributos: { id: "id", funcion: "miFuncion" },
  },
  seccion: {
    etiqueta: "section",
  },
  form: {
    etiqueta: "form",
    etiquetaBoton: "button",
    etiquetaInput: "input",
    etiquetaLabel: "label",
    atributos: {
      doBoton: {
        id: "id",
        funcion: "funcionEnvioForm",
        funcionEngadirAficion: "funcionEngadirAficion",
      },
      doInput: {
        type: "type",
        text: "text",
        name: "name",
        valorName: "aficion",
        placeholder: {
          nome: "Introduce o teu nome",
          apelido: "Introduce o teu apelido",
        },
      },
    },
  },
  header: {
    etiqueta: "header",
  },
  nav: {
    etiqueta: "nav",
  },
  a: {
    etiqueta: "a",
    referenciaNavInput: "nav > input",
    referenciaNavInputDiv: "nav > input + div",
    elementosNavegacion: {
      a1: "Reputation",
      a2: "New users",
      a3: "Voters",
      a4: "Editors",
      a5: "Moderators",
    },
    div: {
      etiqueta: "div",
    },
  },
  main: {
    etiqueta: "main",
  },
};

export { elementos };
