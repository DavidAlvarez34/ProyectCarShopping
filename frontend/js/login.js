const loginButton = document.querySelector(".btnLogin");
loginButton.addEventListener('click', loginButtonClicked);

function loginButtonClicked() {
  async function login() {
      let email = document.getElementById('inputEmail').value;
      let pass = document.getElementById('inputPassword').value;
      
      let dataInsert = {
          email: email,
          userPasword: pass
      };
      let url = await fetch('http://localhost:3000/login', {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataInsert),
      });
      //Regreso del token
      const data = await url.json(url);
      console.log(data);
  }
  login();
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