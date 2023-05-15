import { verificarUser } from './helpers.js';

//variables globales
const btnLogin = document.getElementById('btnLogin');
let formLogin = document.getElementById('formLogin');
let modalFormLogin = new bootstrap.Modal(document.getElementById('modalLogin'));
let correoElectronico = document.getElementById('correoElectronico');
let contrasenia = document.getElementById('contrasenia');
let alerta = document.getElementById('alerta');
//manejadores de eventos
btnLogin.addEventListener('click', mostrarModalLogin);
formLogin.addEventListener('submit', login);

// const usuario = {
//   email: 'admin@rollingcode.com',
//   password: '123ABC@',
// };

verificarUser();

function mostrarModalLogin() {
  if (btnLogin.innerHTML === 'Login') {
    modalFormLogin.show();
    console.log('Se abre el modal');
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    console.log(listaUsuarios);
  }
}

function login(e) {
  e.preventDefault();
  let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
  const usuarioBuscado = listaUsuarios.some(
    (usuario) =>
      usuario.correoElectronico === correoElectronico.value &&
      usuario.contrasenia === contrasenia.value
  );
  if (usuarioBuscado) {
    localStorage.setItem(
      'usuarioLogueado',
      JSON.stringify({
        correoElectronico: correoElectronico.value,
        contrasenia: contrasenia.value,
      })
    );
    console.log('redirigir a la pagina de admin');
    window.location.href = window.location.origin + '/pages/administrador.html';
  } else {
    alerta.innerHTML = 'Correo Electrónico o contraseña incorrecta';
    alerta.className = 'alert alert-danger mt-3';
  }
}
