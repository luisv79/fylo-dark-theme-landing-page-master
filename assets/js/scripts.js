 const form = document.getElementById("emailForm");
  const emailInput = document.getElementById("fname");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const emailValue = emailInput.value;

    // Expresión regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
     errorMessage.textContent = "Please insert a valid email address";
    } else {
      errorMessage.textContent = "";
      // aquí podrías enviar el formulario si quieres
    }
  });

