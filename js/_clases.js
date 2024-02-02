class HTML{
    static refEtiquetaNova = 6;// creeina para facer proba
    //#refEtiqueta;
    outraProba = 43;

    refEtiqueta;
    constructor(etiqueta,referencia){
        this.etiqueta = etiqueta;
        this.refBody = referencia;
        /* this.atributo = atributo;
        this.valorAtributo = valorAtributo; */
    }

    crearElemento(){
        this.refEtiqueta = document.createElement(this.etiqueta)
        //this.#refEtiqueta = document.createElement(this.etiqueta)
    } 
    
    devolverRefElemento(etiqueta){
        return document.createElement(etiqueta);
    }
    engadirAtributo(atributo,valorAtributo){
        console.log('????',atributo,valorAtributo)
        this.refEtiqueta.setAttribute(atributo,valorAtributo)
        console.log(atributo,valorAtributo)
        //this.#refEtiqueta.setAttribute(atributo,valorAtributo)
    }
    engadindoElemento(){
        //this.refBody.append(this.#refEtiqueta)
        console.log('engadindoElemento: ',this.refEtiqueta)
        this.refBody.append(this.refEtiqueta)
    }
}
class Boton extends HTML {
    constructor(etiqueta,referencia){
        super(etiqueta,referencia)//actualiza
    }
    
    engadoBoton(atributo,valorAtributo){
        super.crearElemento()
        super.engadirAtributo(atributo,valorAtributo)
        this.refEtiqueta.textContent = "enviar";
        super.engadindoElemento()

    }
    eventoListener(){
        miFuncion.addEventListener("click",()=>{
            console.log("dende o evento")
        })
    }
}

class Form extends HTML {

    oMeuInput;
    oMeuBoton;
    constructor(etiqueta,referencia,elementos){
        super(etiqueta,referencia)//actualiza
        this.elementos = elementos;
    }

    creoInputForm(){
        console.log('estou en creo input',this.elementos);
        this.oMeuInput = super.devolverRefElemento(this.elementos.etiquetaInput) 
    }
    pintoMeuInput(){
        //this.refBody.append(this.oMeuInput);
        //console.log('this.elementos.input.atributosTypeText ',this.elementos.atributos.doInput)
        //super.engadirAtributo(this.elementos.atributos.doInput.type,this.elementos.atributos.doInput.text)
        this.oMeuInput.setAttribute(this.elementos.atributos.doInput.type,this.elementos.atributos.doInput.text)
        
        this.oMeuInput.setAttribute(this.elementos.atributos.doInput.name,this.elementos.atributos.doInput.valorName)
        this.refEtiqueta.append(this.oMeuInput);
    }
    creoEtiquetaForm(){
        super.crearElemento()
    }
    creoBotonForm(){
        this.oMeuBoton = super.devolverRefElemento(this.elementos.etiquetaBoton)
    }
    pintoMeuBoton(){
        this.oMeuBoton.textContent = "Enviar usuario"
        this.refEtiqueta.append(this.oMeuBoton)
    }
    engadoForm(){
        super.engadindoElemento()
    }

}
export{
    HTML,
    Boton,
    Form
}