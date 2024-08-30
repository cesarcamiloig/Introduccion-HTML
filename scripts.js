// Formulario de inicio de sesión
document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.getElementById("login-form");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      if (username.value === "admin" && password.value === "1234") {
        alert("¡Bienvenido, admin!");
        window.location.href = "dashboard.html";
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    });
  });
  
  // Formulario de registro
  var registerForm = document.getElementById("register-form");
  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var newPassword = document.getElementById("new-password").value;
    var confirmNewPassword = document.getElementById("confirm-new-password").value;
  
    if (newPassword !== confirmNewPassword) {
      alert("¡Las contraseñas no coinciden!");
      return false;
    } else {
      // Aquí iría la lógica para registrar al nuevo usuario (por ejemplo, una solicitud AJAX)
      alert("¡Registro exitoso!");
      window.location.href = "index.html";
    }
  });

var linkEstudiantes = document.getElementById("linkEstudiantes");
var linkAsignaturas = document.getElementById("linkAsignaturas");

var contenedorEstudiantes = document.getElementById("contenedorEstudiantes");
var contenedorAsignaturas = document.getElementById("contenedorAsignaturas");

linkEstudiantes.addEventListener("click", function(event) {
    event.preventDefault();
    contenedorEstudiantes.classList.add("active");
    contenedorAsignaturas.classList.remove("active");
});

linkAsignaturas.addEventListener("click", function(event) {
    event.preventDefault();
    contenedorEstudiantes.classList.remove("active");
    contenedorAsignaturas.classList.add("active");
});

function agregarFila(tabla, id, nombre) {
    var row = tabla.insertRow();
    var cellID = row.insertCell(0);
    var cellNombre = row.insertCell(1);
    var cellAcciones = row.insertCell(2);

    cellID.textContent = id;
    cellNombre.textContent = nombre;
    cellAcciones.innerHTML = '<button class="btn-editar">Editar</button> <button class="btn-eliminar">Eliminar</button>';
}

var tablaEstudiantes = document.querySelector("#contenedorEstudiantes table tbody");
var btnAgregarEstudiante = document.getElementById("agregarEstudiante");
if (btnAgregarEstudiante) {
    btnAgregarEstudiante.addEventListener("click", function() {
        var id = tablaEstudiantes.rows.length + 1;
        var nombre = prompt("Ingrese el nombre del estudiante:");
        if (nombre) {
            agregarFila(tablaEstudiantes, id, nombre);
        }
    });
}

var tablaAsignaturas = document.querySelector("#contenedorAsignaturas table tbody");
var btnAgregarAsignatura = document.getElementById("agregarAsignatura");
if (btnAgregarAsignatura) {
    btnAgregarAsignatura.addEventListener("click", function() {
        var id = tablaAsignaturas.rows.length + 1;
        var nombre = prompt("Ingrese el nombre de la asignatura:");
        if (nombre) {
            agregarFila(tablaAsignaturas, id, nombre);
        }
    });
}

