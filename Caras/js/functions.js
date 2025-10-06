const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const form = document.querySelector('.main__form');
const mensaje  = document.querySelector(".main__mensaje");

function mostrarMensaje(texto, tipo) {
  // tipo = "exito" o "error"
  mensaje.textContent = texto;
  mensaje.classList.remove("exito", "error");

  if (tipo === "exito") {
    mensaje.classList.add("exito");
  } else if (tipo === "error") {
    mensaje.classList.add("error");
  }

  mensaje.style.display = "block";

  // Ocultar después de unos segundos
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 4000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreVal = nombre.value.trim();
  const emailVal = email.value.trim();

  // Validar campos
  if (nombreVal === "" || emailVal === "") {
    mostrarMensaje("Por favor completa todos los campos.", "error");
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
  if (!emailValido) {
    mostrarMensaje("Por favor ingresa un correo válido.", "error");
    return;
  }

  // Si todo está correcto
  mostrarMensaje("¡Tu información se ha enviado correctamente!", "exito");

  // Limpiar formulario
  form.reset();
});