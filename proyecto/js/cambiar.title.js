function cambiarNombre() {
    var nombre = document.getElementById("nombreInput").value;
    if (nombre.length > 10) {
      alert("El nombre debe tener mÃ¡ximo 10 caracteres.");
      return false; 
    }
    
    localStorage.setItem("nombre", nombre);
    document.title = nombre;
    var navElement = document.getElementById("nombreNav");
    navElement.innerHTML = nombre;
  
    return false;
  }
  
  function cargarNombre() {
    var nombre = localStorage.getItem("nombre");
  
    if (nombre !== null) {
      document.title = nombre;
      var navElement = document.getElementById("nombreNav");
      navElement.innerHTML = nombre;
    }
  }