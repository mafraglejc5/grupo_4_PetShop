window.addEventListener('load', function () {
    console.log('JS Vinculado...');

    let formulario = document.querySelector('form#productEdit');
 

    let inputNombre = formulario.elements[0];
    let inputMarca = formulario.elements[1];
    let inputCategoria = formulario.elements[4];
    let inputSubcategoria = formulario.elements[5];
    let inputPrecio = formulario.elements[6];
    let inputPeso = formulario.elements[7];
    let inputDescuento = formulario.elements[8];
    let inputDescripcion = formulario.elements[3];
    let inputImagen = formulario.elements[2];

    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    inputNombre.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "El nombre es obligatorio";
                this.classList.add('is-invalid')
                break;
            case this.value.length < 5:
                errorNombre.innerHTML = "Tenés que poner al menos 4 letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ""
                break;
        }
    }),
    inputNombre.addEventListener('keyup', function () {
        switch (true) {
            case this.value.length < 4:
                errorNombre.innerHTML = "Tenés que poner al menos 4 letras"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorNombre.innerHTML = ""
                break;
        }
    }),
        inputMarca.addEventListener('blur', function () {
            switch (true) {
                case this.value.length === 0:
                    errorMarca.innerHTML = "El nombre es obligatorio";
                    this.classList.add('is-invalid')
                    break;
                case this.value.length < 4:
                    errorMarca.innerHTML = "Tenés que poner al menos 4 letras"
                    this.classList.add('is-invalid')
                    break
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errorMarca.innerHTML = ""
                    break;
            }
        }),
        inputMarca.addEventListener('keyup', function () {
            switch (true) {
                case this.value.length < 4:
                    errorMarca.innerHTML = "Tenés que poner al menos 4 letras"
                    this.classList.add('is-invalid')
                    break
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errorMarca.innerHTML = ""
                    break;
            }
        }),
        inputCategoria.addEventListener('blur', function () {
            switch (true) {
                case this.value.length === 0:
                    errorCategoria.innerHTML = "Debe seleccionar una categoria.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorCategoria.innerHTML = "";
                    break;
            }
        }),
        inputSubcategoria.addEventListener('blur', function () {
            switch (true) {
                case this.value.length === 0:
                    console.log(this.value.length);
                    errorSubcategoria.innerHTML = "Debe seleccionar una subcategoria.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorSubcategoria.innerHTML = "";
                    break;
            }
        }),
        inputPrecio.addEventListener('blur',function(){
            switch(true){
                case this.value.length === 0:
                    errorPrecio.innerHTML = "Debe ingresar el valor.";
                    this.classList.add('is-invalid');
                    break;
                case this.value <=0:
                    errorPrecio.innerHTML = "Debe ingresar un numero positivo.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorPrecio.innerHTML ="";
                    break;
            }
        }),
        inputPeso.addEventListener('blur',function(){
            switch(true){
                case this.value.length === 0:
                    errorPeso.innerHTML = "Debe ingresar el peso.";
                    this.classList.add('is-invalid');
                    break;
                case this.value <0:
                    errorPeso.innerHTML = "Debe ingresar un numero positivo.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorPeso.innerHTML ="";
                    break;
            }
        }),
        inputDescuento.addEventListener('blur',function(){
            switch(true){
                case this.value.length === 0:
                    errorDescuento.innerHTML = "Debe rellentar este campo o ingrese 0.";
                    this.classList.add('is-invalid');
                    break;
                case this.value <0:
                    errorDescuento.innerHTML = "Debe ingresar un numero positivo.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorDescuento.innerHTML ="";
                    break;
            }
        }),
        inputDescripcion.addEventListener('blur',function(){
            switch(true){                
                case this.value.length >= 0 && this.value.length <= 20:
                    errorDescripcion.innerHTML = "Debe rellentar este campo, minimo 20 caracteres.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorDescripcion.innerHTML ="";
                    break;
            }
        }),
        inputDescripcion.addEventListener('keyup',function(){
            switch(true){                
                case this.value.length >= 0 && this.value.length <= 20:
                    errorDescripcion.innerHTML = "Debe rellentar este campo, minimo 20 caracteres.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorDescripcion.innerHTML ="";
                    break;
            }
        }),
        inputImagen.addEventListener('change', function(e){
            switch (true) {
                case !regExExtensions.exec(this.value) :
                    errorImagen.innerHTML = "Solo imagenes con extension jpg, jpeg, png, o gif";
                    this.classList.add('is-invalid')
                    this.value = '';
                    vistaPrevia.src = "";
                break;
            
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorImagen.innerHTML = "";
                    // Creamos el objeto de la clase FileReader
                    let reader = new FileReader();
                    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
                    reader.readAsDataURL(e.target.files[0]);
                    // Le decimos que cuando este listo ejecute el código interno
                    reader.onload = function(){
                    vistaPrevia.src = reader.result;
                    };
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorImagen.innerHTML = "";
    
            }
        }),
        formulario.addEventListener('submit',function(e){
            e.preventDefault();
            let elementos = formulario.elements;
            let error = false;
            for (let i = 0; i < 8; i++) {
                if(i!=2){
                    if(elementos[i].value == 0){
                        elementos[i].classList.add('is-invalid');
                        error = true;
                    }
                }                
            }
            if(elementos[0].value.length <4){
                console.log("entro");
                error = true
                errorNombre.innerHTML = "Tenés que poner al menos 4 letras"
                this.classList.add('is-invalid')
            }
            if(elementos[1].value.length <4){
                error = true
                errorMarca.innerHTML = "Tenés que poner al menos 4 letras"
                this.classList.add('is-invalid')    
            }
            if(!error){
                formulario.submit();
            }
            else{
                errorSubmit.innerHTML = "Los campos señalados son obligatorio."
            }
        })
})