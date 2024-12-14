// Seleccionamos los elementos necesarios del HTML
const nameForm = document.getElementById("nameForm"); // Formulario donde el usuario ingresa su nombre
const nameInput = document.getElementById("name"); // Campo de texto para ingresar el nombre
const welcomeMessage = document.getElementById("welcomeMessage"); // Elemento donde se mostrará el mensaje de bienvenida
const assistantMessage = document.getElementById("assistantMessage"); // Elemento donde se mostrará el mensaje del asistente

// Función para obtener el saludo dependiendo de la hora del día
function getTimeOfDayGreeting() {
  const currentHour = new Date().getHours(); // Obtiene la hora actual del sistema
  if (currentHour < 12) {
    return "¡Buenos días"; // Si es antes del mediodía
  } else if (currentHour < 18) {
    return "¡Buenas tardes"; // Si es entre mediodía y la tarde
  } else {
    return "¡Buenas noches"; // Si es en la noche
  }
}

// Añadimos un evento para manejar el envío del formulario
nameForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se recargue al enviarlo

  const userName = nameInput.value.trim(); // Obtenemos el nombre del usuario y eliminamos los espacios extra

  if (userName === "") {
    alert("Por favor, ingresa tu nombre."); // Si el campo está vacío, mostramos una alerta
  } else {
    // Obtenemos el saludo según la hora del día
    const greeting = getTimeOfDayGreeting();
    // Mostramos el mensaje de bienvenida dinámico
    welcomeMessage.textContent = `${greeting}, ${userName}! Bienvenido a JRAC Core 360.`;

    // Ocultamos el formulario después de que el usuario ingresa su nombre
    nameForm.style.display = "none";

    // Mostramos el mensaje del asistente después de 1 segundo
    setTimeout(function () {
      assistantMessage.textContent =
        "¿En qué te puedo ayudar? Soy tu asistente personal."; // Mensaje del asistente
    }, 1000); // Esperamos 1 segundo antes de mostrar el mensaje
  }
});
