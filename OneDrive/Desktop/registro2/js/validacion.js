(function () {
     
    forms = document.querySelectorAll('.needs-validation')
             .forEach(function (form) {
       form.addEventListener('submit', function (event) {

        validatePassword()
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
          form.classList.add('was-validated')
          validateCheck();
      }, false)
      })
  })()

document.querySelectorAll('#password1, #password2').forEach(input => {
  input.addEventListener('input', () =>{
    validatePassword()
})
});

document.getElementById('terms').addEventListener('input', ()=>{
  validateCheck()
})

  //Contraseña +6 caracteres .lenght>=6
function validatePassword(){
  const password = document.querySelector('#password1');
  const passwordConfirm = document.querySelector('#password2');
  if ((password.value.length<6)){
      password.setCustomValidity('El largo del password es menor a 6')
      passwordConfirm.setCustomValidity('El largo del password es menor a 6')
  } else {
      if(password.value==passwordConfirm.value){
        password.setCustomValidity('')   
        passwordConfirm.setCustomValidity('')
      }
      else{
        password.setCustomValidity('') 
        passwordConfirm.setCustomValidity('aaaaaaa')
      }
  }
}

function validateCheck(){
  const checkBx = document.querySelector('#terms');
  form = document.querySelector('.was-validated')
  if(form){
    if(!checkBx.checkValidity()){
      condition.classList.add('is-invalid', 'text-danger')
    }else{
      condition.classList.remove('is-invalid', 'text-danger')
    }
  }
  
}




   
