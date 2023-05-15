function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log('dato correcto');
    return true;
  } else {
    console.log('dato erroneo');
    return false;
  }
}

//https://gjdhgjdhkgjhdkjghdkfgh/jhgdjhgdfjh-gdgfjhhj.jpg

function validarDuracion(tiempo) {
  let patron = /^\d{2,3}$/;
  if (patron.test(tiempo)) {
    console.log('la expresion regular funciona');
    return true;
  } else {
    console.log('la expresion regular fallo');
    return false;
  }
}
function validarURLImagen(imagen) {
  let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)$/;
  if (patron.test(imagen)) {
    console.log('la expresion regular de la imagen funciona');
    return true;
  } else {
    console.log('la expresion regular de la imagen fallo');
    return false;
  }
}

function validarAnio(anio) {
  // ^(19[8-9][7-9]|20[0-1][0-9]|202[0-4])$
  const anioMinimo = 1987;
  const anioMaximo = new Date().getFullYear();
  if (anio >= anioMinimo && anio <= anioMaximo + 1) {
    return true;
  } else {
    return false;
  }
}

export function sumarioValidacion(titulo, descripcion, duracion, imagen, anio) {
  let resumen = '';
  if (!validarCantidadCaracteres(titulo, 2, 100)) {
    resumen += 'El titulo debe tener entre 2 y 100 caracteres <br>';
  }
  if (!validarCantidadCaracteres(descripcion, 5, 500)) {
    resumen += 'La descripcion debe tener entre 5 y 500 caracteres <br>';
  }
  if (duracion.length > 0 && !validarDuracion(duracion)) {
    resumen +=
      'La duracion de la pelicula debe ser minutos (entre 2 y 3 caracteres numericos) <br>';
  }
  if (!validarURLImagen(imagen)) {
    resumen +=
      'La imagen de la pelicula debe ser una URL valida terminada en (.jpg, .png o .gif) <br>';
  }
  if (!validarAnio(anio)) {
    resumen +=
      'El año debe ser entre 1987 y ' +
      (new Date().getFullYear() + 1) +
      ' <br>';
  }
  return resumen;
}

export function verificarUser() {
  let btnLogin = document.getElementById('btnLogin');
  let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
  const usuarioBuscado = listaUsuarios.some(
    (usuario) =>
      usuario.correoElectronico === correoElectronico.value &&
      usuario.contrasenia === contrasenia.value
  );
  if (usuarioBuscado) {
    console.log('if');
    //mostrar la opcion de admin en el navbar solo si el usuario que está logueado es admin
    btnLogin.innerHTML = 'Logout';
    document.getElementById('adminPage').classList.remove('d-none');
    document.getElementById('carritoList').classList.remove('d-none');
  } else {
    btnLogin.innerHTML = 'Login';
    let webAdmin = window.location.origin + '/pages/administrador.html';
    //si no está logueado se le muestra un cartel que no tiene los permisos suficientes para ver dicha página.
    if (window.location.href === webAdmin) {
      document.querySelector('main').innerHTML =
        "<h2 class='text-center'>No tienes los permisos suficientes para ver está página, será direccionado a la página principal</h2>";
      setTimeout(() => {
        window.location.href = window.location.origin;
      }, 3000);
    }
  }
}
