const registerButton = document.querySelector(".btnRegistro");
registerButton.addEventListener('click', registerButtonClicked);

function registerButtonClicked() {
  async function createUser() {
      let nombre = document.getElementById('firstName').value;
      let apellido = document.getElementById('lastName').value;
      let email = document.getElementById('email').value;
      let pass = document.getElementById('password').value;

      let dataInsert = {
          nombre: nombre,
          apellido: apellido,
          email: email,
          userPasword: pass
      };
      let url = await fetch('http://localhost:3000/createLogin', {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataInsert),
      });
      alert("Usuario creado.");
  }
  createUser();
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
})()