//variables globales
let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculas')) || [];

cargaInicial();

function cargaInicial() {
  console.log(listaPeliculas.length);
  if (listaPeliculas.length > 0) {
    //dibujo una fila en la tabla
    console.log(listaPeliculas.length);
    listaPeliculas.map((pelicula) => crearCard(pelicula));
  }
}

function crearCard(pelicula) {
  let sectionCards = document.querySelector('#sectionCards');
  sectionCards.innerHTML += `<aside class="col-md-4 col-lg-3 mb-3 containerCard">
    <article class="card h-100">
      <img
        src="${pelicula.imagen}"
        class="card-img-top"
        alt="Croissant"
      />
      <div class="card-body">
        <h5 class="card-title">${pelicula.titulo}</h5>
        <p class="card-text">
          ${pelicula.descripcion}
        </p>
        <a href="../pages/detalle.html">
            <button
            id="boton"
            class="btn btn-primary"
            title="${pelicula.titulo}"
            onclick="ver(this)"
            >
            Ver Detalles
            </button>
        </a>
      </div>
    </article>
  </aside>`;
}

function ver(element) {
  localStorage.setItem('titulo', element.getAttribute('title'));
}
