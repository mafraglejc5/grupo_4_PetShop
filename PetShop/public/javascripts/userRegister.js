window.addEventListener('load', () => {
    console.log('Vinculado...');
    let formulario = document.querySelector('form#register');

    let inputNombre = formulario.elements[0];
    let inputApellido = formulario.elements[1];
    let inputPass = formulario.elements[2];
    let inputPass2 = formulario.elements[3];
    let inputEmail = formulario.elements[4];
    let inputImagen = formulario.elements[5];
    let checkBases = formulario.elements[6];

    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    let regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

    //VERIFICO QUE EL INPUTNOMBRE CUMPLA CON LAS VALIDACIONES
    inputNombre.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errorNombre.innerHTML = "El nombre es obligatorio.";
                this.classList.add('is-invalid');
                break;
            case this.value.trim().length <= 3:
                errorNombre.innerHTML = "Tenés que poner al menos tres letras.";
                this.classList.add('is-invalid');
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorNombre.innerHTML = "";
                break;
        }
    }),
        //VERIFICO QUE EL INPUTAPELLIDO CUMPLA CON LAS VALIDACIONES
        inputApellido.addEventListener('blur', function () {
            switch (true) {
                case this.value.length === 0:
                    errorApellido.innerHTML = "El apellido es obligatorio.";
                    this.classList.add('is-invalid');
                    break;
                case this.value.trim().length <= 3:
                    errorApellido.innerHTML = "Tenés que poner al menos tres letras."
                    this.classList.add('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorApellido.innerHTML = "";
                    break;
            }
        }),
        //VERIFICO QUE EL INPUTPASS CUMPLA CON LAS VALIDACIONES.
        inputPass.addEventListener('blur', function () {
            switch (true) {
                case this.value.length === 0:
                    errorPass.innerHTML = "La contraseña es obligatoria.";
                    this.classList.add('is-invalid');
                    break;
                case !regExPass.test(this.value):
                    errorPass.innerHTML = "La contraseña debe tener entre 6 y 12 caracteres, una mayúscula, una minúscula y un número.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorPass.innerHTML = "";
                    break;
            }
        }),
        //VERIFICO QUE EL INPUTPASS2 CUMPLA CON LAS VALIDACIONES Y QUE SEA IGUAL AL INPUTPASS
        inputPass2.addEventListener('blur', function () {
            switch (true) {
                //VERIFICO QUE NO ESTE VACÍO
                case this.value.length === 0:
                    errorPass2.innerHTML = "Reingrese su contraseña."
                    this.classList.add('is-invalid');
                    break;
                //VERIFICO QUE SEAN IGUALES
                case this.value !== inputPass.value:
                    errorPass2.innerHTML = "Las contraseñas no coinciden.";
                    this.classList.add('is-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorPass2.innerHTML = "";
                    break;
            }
        }),
        //VERIFICO QUE EL INPUTNOMBRE CUMPLA CON LAS VALIDACIONES CON SU FORMATO CORRESPONDIENTE.
        inputEmail.addEventListener('blur', function () {
            switch (true) {
                case this.value.length === 0:
                    errorEmail.innerHTML = "El campo email es obligatorio.";
                    this.classList.add('is-invalid');
                    break;
                case !regExEmail.test(this.value):
                    errorEmail.innerHTML = "Debes escribir un email válido."
                    this.classList.add('id-invalid');
                    break;
                default:
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorEmail.innerHTML = "";
                    break;
            }
        }),
        //VERIFICO QUE EL INPUTIMAGEN CUMPLA CON LAS VALIDACIONES Y SE VISUALICE LA IMAGEN SUBIDA
        inputImagen.addEventListener('change', function (e) {
            switch (true) {
                case !regExExtensions.exec(this.value):
                    errorFoto.innerHTML = "Solo imagenes con extension JPG, PJEG, PNG o GIF";
                    this.classList.add('is-invalid');
                    this.value = "";
                    vistaPrevia.src = "";
                    break;
                default:
                    // Creamos el objeto de la clase FileReader
                    let reader = new FileReader();
                    // Leemos el archivo subido y se lo pasamos a nuestro fileReader
                    reader.readAsDataURL(e.target.files[0]);
                    // Le decimos que cuando este listo ejecute el código interno
                    reader.onload = function () {
                        vistaPrevia.src = reader.result;
                    };
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                    errorFoto.innerHTML = "";
                    break;
            }
        }),
        checkBases.addEventListener('blur',function(){
            if (checkBases.checked == false) {
                this.classList.add('is-invalid');
                errorBases.innerHTML = "Debes aceptar las bases y condiciones"
            }else if(checkBases.checked == 'undefined'){
                this.classList.add('is-invalid');
                errorBases.innerHTML = "Debes aceptar las bases y condiciones"
            }else{
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            }
        }),
        //ANTES DE ENVIAR LOS DATOS, VERIFICO QUE ESTEN TODOS LOS CAMPOS CORRECTOS, HAYAN ACEPTADO LAS Y CONDICIONES, LUEGO REGISTRO AL USUARIO NUEVO.
        formulario.addEventListener('submit', function (e) {
            //antes de enviar el formulario, lo revisa.
            e.preventDefault();
            let elementos = formulario.elements;
            let error = false;
            //recorro si hay errores en alguno de los formularios.
            for (let i = 0; i < elementos.length-1; i++) {
                if (elementos[i].value == 0) {
                    elementos[i].classList.add('is-invalid');
                    error = true;
                }
            }
            //si no hay errores, envio los datos y registro al usuario.
            if (!error) {
                formulario.submit()
            } else {//sino, muestro error.
                msgError.innerHTML = "Los campos señalados son obligatorios."
            }
        })/*VERIFICAR CUANDO EL USUARIO Y APELLIDO ES MENOR A 3 CARACTERES */
})