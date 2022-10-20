(function () {
     
    forms = document.querySelectorAll('.needs-validation')
             .forEach(function (form) {
       form.addEventListener('submit', function (event) {
         if (!form.checkValidity()||!validatePassword()) {
           event.preventDefault()
           event.stopPropagation()
         }
           form.classList.add('was-validated')
       }, false)
     })
  })()

  //Contraseña +6 caracteres .lenght>=6
   function validatePassword(){
    const password = document.querySelector('#password1').value;
    const passwordConfirm = document.querySelector('#password2').value;
    if ((password.lenght<6)){
        password.classList.add("is-invalid");
        passwordConfirm.classList.add("is-invalid");
        return false;
    } else {
        if(password==passwordConfirm){
        password.classList.remove("is-invalid");
        passwordConfirm.classList.remove("is-invalid");
        return true;
        }
        else{
            password.classList.remove("is-invalid");
            return false;
        }
    }
   }
   