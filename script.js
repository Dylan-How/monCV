let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("email");
let password = document.getElementById("password");

window.addEventListener("load", validation(), false);

function validation() {
  let inputs = document.getElementsByClassName("form-control");
  let validation = Array.prototype.filter.call(inputs, function (input) {
    input.addEventListener(
      "blur",
      function () {
        //clear
        input.classList.remove("is-invalid");
        input.classList.remove("is-valid");

        //regarder les constraints en general(vide)(email)
        if (input.checkValidity() === false) {
          if (input.id === "password") {
            document.getElementById("password-tooltip").innerHTML =
              "Vous devez entrer un mot de passe.";
          }
          input.classList.add("is-invalid");
        } else {
          //si pas de erreur general -> regarder si il y a une erreur specifique dans password
          // //password si c'est plus que 8 et contient des lettre et des chiffres
          if (input.id === "password") {
            let regex = /^[A-Za-z0-9]*$/;
            console.log("test");
            if (input.value.length < 8 && regex.test(input.value)) {
              input.classList.add("is-invalid");
              document.getElementById("password-tooltip").innerHTML =
                "Le mot de passe doit contenir des lettres et des chiffres(8 minimaux)";
            } else {
              input.classList.add("is-valid");
            }
          } else {
            input.classList.add("is-valid");
          }
        }
      },
      false
    );
  });
}

function valider() {
  let inputs = document.getElementsByClassName("form-control");
  let validation = Array.prototype.filter.call(inputs, function (input) {
    //clear
    input.classList.remove("is-invalid");
    input.classList.remove("is-valid");

    //regarder les constraints en general(vide)(email)
    if (input.checkValidity() === false) {
      if (input.id === "password") {
        document.getElementById("password-tooltip").innerHTML =
          "Vous devez entrer un mot de passe.";
      }
      input.classList.add("is-invalid");
    } else {
      //si pas de erreur general -> regarder si il y a une erreur specifique dans password
      // //password si c'est plus que 8 et contient des lettre et des chiffres
      if (input.id === "password") {
        let regex = /^[A-Za-z0-9]*$/;
        console.log("test");
        if (input.value.length < 8 && regex.test(input.value)) {
          input.classList.add("is-invalid");
          document.getElementById("password-tooltip").innerHTML =
            "Le mot de passe doit contenir des lettres et des chiffres(8 minimaux)";
        } else {
          input.classList.add("is-valid");
        }
      } else {
        input.classList.add("is-valid");
      }
    }
  });
}
