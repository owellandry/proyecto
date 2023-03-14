// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("myBtn");

// Obtener el botón de cierre del modal
var span = document.getElementsByClassName("close")[0];

// Obtener el título del modal
var modalTitle = document.querySelector(".modal-title");

// Obtener los botones del modal
var modalButtons = document.querySelector(".modal-buttons");

// Cuando el usuario hace clic en el botón, abrir el modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario hace clic en el botón de cierre, cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, cerrar el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Función para abrir el modal con título y botones personalizados
function openModal(title, buttonText1, buttonText2) {
  modalTitle.innerHTML = title;
  modalButtons.innerHTML = `
    <button>${buttonText1}</button>
    <button>${buttonText2}</button>
  `;
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.querySelector(".modal-background").classList.add("show");
}

// Función para cerrar el modal
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.querySelector(".modal-background").classList.remove("show");
}

// Escuchar el evento click del primer botón
modalButtons.addEventListener("click", function(event) {
  if (event.target.innerText === "Editar Texto") {
    console.log("Has hecho clic en el botón 'Editar Texto'");
  } else if (event.target.innerText === "Subir Imágenes") {
    console.log("Has hecho clic en el botón 'Subir Imágenes'");
  }
});


// Obtener el segundo modal
var secondModal = document.getElementById("secondModal");

// Obtener el botón de cierre del segundo modal
var secondModalCloseBtn = document.querySelector("#secondModal .close");

// Obtener el botón "Editar Texto" del primer modal
var editBtn = document.querySelector("#myModal .modal-buttons button:nth-of-type(1)");

// Cuando el usuario hace clic en el botón "Editar Texto", abrir el segundo modal
editBtn.onclick = function() {
  secondModal.style.display = "block";
}

// Cuando el usuario hace clic en el botón de cierre del segundo modal, cerrar el segundo modal
secondModalCloseBtn.onclick = function() {
  secondModal.style.display = "none";
}

// Cuando el usuario hace clic fuera del segundo modal, cerrar el segundo modal
window.addEventListener("click", function(event) {
  if (event.target == secondModal) {
    secondModal.style.display = "none";
  }
});


// Obtener el botón "Subir imagen" del primer modal
var uploadBtn = document.querySelector("#myModal .modal-buttons button:nth-of-type(2)");

// Obtener el botón de cierre del tercer modal
var thirdModalCloseBtn = document.querySelector("#thirdModal .close");

// Obtener el botón "Cancelar" del tercer modal
var cancelBtn = document.querySelector("#thirdModal #cancelBtn");

// Obtener el botón "Guardar" del tercer modal
var saveBtn = document.querySelector("#thirdModal #saveBtn");

// Cuando el usuario hace clic en el botón "Subir imagen", abrir el tercer modal y aplicar el estilo blur
uploadBtn.onclick = function() {
  var thirdModal = document.getElementById("thirdModal");
  thirdModal.style.display = "block"; 
}




// Cuando el usuario hace clic en el botón de cierre del tercer modal, cerrar el tercer modal y quitar el estilo blur
thirdModalCloseBtn.onclick = function() {
  var thirdModal = document.getElementById("thirdModal");
  thirdModal.style.display = "none"; 
}

// Cuando el usuario hace clic en el botón "Cancelar" del tercer modal, cerrar el tercer modal y quitar el estilo blur
cancelBtn.onclick = function() {
  var thirdModal = document.getElementById("thirdModal");
  thirdModal.style.display = "none"; 
}

// Cuando el usuario hace clic en el botón "Guardar" del tercer modal, cerrar el tercer modal y quitar el estilo blur
saveBtn.onclick = function() {
    var thirdModal = document.getElementById("thirdModal");
    thirdModal.style.display = "none"; 
  };
  


// Seleccionar el botón de "Editar Texto"
var editButton = document.getElementById("edit-button");

// Seleccionar el modal de edición de texto
var editModal = document.getElementById("edit-modal");

// Seleccionar el botón de "Cancelar"
var cancelButton = document.getElementById("cancel-button");

// Cuando se hace clic en el botón de "Editar Texto", mostrar el modal
editButton.onclick = function() {
  editModal.style.display = "block";
}

// Cuando se hace clic en el botón de "Cancelar", cerrar el modal
cancelButton.onclick = function() {
  editModal.style.display = "none";
}







