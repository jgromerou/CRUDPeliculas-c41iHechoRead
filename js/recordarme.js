// Obtiene los valores del nombre de usuario y la contraseña del formulario de inicio de sesión
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

// Cuando el usuario hace clic en el botón de "Recordarme", establece una cookie con su nombre de usuario y contraseña
document.getElementById('remember-me-btn').addEventListener('click', () => {
  document.cookie = `username=${username}; password=${password}; expires=${new Date(
    Date.now() + 86400e3
  ).toUTCString()}; path=/`;
});

// Comprueba si hay una cookie de "Recordarme" presente y, si es así, rellena automáticamente el nombre de usuario y la contraseña en los campos correspondientes del formulario de inicio de sesión
const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
for (const cookie of cookies) {
  if (cookie.startsWith('username=')) {
    const usernameValue = cookie.split('=')[1];
    document.getElementById('username').value = usernameValue;
  }
  if (cookie.startsWith('password=')) {
    const passwordValue = cookie.split('=')[1];
    document.getElementById('password').value = passwordValue;
  }
}
