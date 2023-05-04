function showTutitulo() {
  const titulo = localStorage.getItem('titulo');
  console.log(titulo);
  if (titulo !== null && titulo !== '') {
    document.getElementById('titulo').innerText = 'Reproducir ' + titulo;
  }
}

showTutitulo();
