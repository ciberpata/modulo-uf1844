/* function pintoBoton(referenciaBoton){

} */
function pintoForm(claseForm){
    console.log('en pintoForm ', claseForm)
    claseForm.creoEtiquetaForm()
    claseForm.engadoForm()
    claseForm.creoInputForm()
    claseForm.pintoMeuInput()
    claseForm.creoBotonForm();
    claseForm.pintoMeuBoton("Enviar usuario");
    claseForm.creoBotonAficion();
    claseForm.pintoMeuBoton("Engado aficion");
    claseForm.pintoInputAficion();
    claseForm.insertarUserEnSection();
}
function cambioReferencias(referencia){
    
    let salida;
    if(referencia == 'section'){
        salida = document.createElement(referencia)
    }
    if(referencia != 'body'){
        salida = document.createElement(referencia)
        
        document.body.append(salida)
    }else{
        salida = document.body;
    }
    return salida
}


export{
   // pintoBoton,
    pintoForm,
    cambioReferencias
}