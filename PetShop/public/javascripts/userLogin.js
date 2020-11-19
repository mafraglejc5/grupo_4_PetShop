window.addEventListener('load',function(){
    console.log('JS vinculado correctamente');

    let formulario = document.querySelector('form#login');
    let inputEmail = formulario.elements[0];
    let inputPass = formulario.elements[1];




    let errores = {};
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
 



    inputEmail.addEventListener('blur',function(){
        console.log(inputEmail.value.length);
        switch (true) {
            case this.value.length === 0:
                errorEmail.innerHTML = "Para ingresar a PETSHOP VSG: El campo email es obligatorio";
                this.classList.add('is-invalid')
                break;
            case !regExEmail.test(this.value) :
                errorEmail.innerHTML = "Para ingresar a PETSHOP VSG: Debes escribir un email válido"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorEmail.innerHTML = ""
                break;
        }

    })


    inputPass.addEventListener('blur',function(){

        switch (true) {
            case this.value.length === 0:
                errorPass.innerHTML = "Para ingresar a PETSHOP VSG: La contraseña es obligatoria";
                this.classList.add('is-invalid')
                break;
            case !regExPass.test(this.value) :
                errorPass.innerHTML = "Para ingresar a PETSHOP VSG: La contraseña debe tener entre 6 y 12 caracteres, una mayúscula una minúscula y un número"
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errorPass.innerHTML = ""
                break;
        }

    })


    formulario.addEventListener('submit',function(e){
        e.preventDefault();
        let elementos = formulario.elements
        let error = false
        for (let index = 0; index < 2; index++) {
            if(elementos[index].value == 0){
                console.log(elementos[index].value);
                elementos[index].classList.add('is-invalid');
               error = true;
            }
        }
        if(!error){
            formulario.submit()
        }else{
            msgError.innerHTML = "Los campos señalados son obligatorios"
        }
    })



})