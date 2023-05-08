//variables globales
let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculas')) || [];
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const sectionCards = document.querySelector('#sectionCards');
const botonVaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

//variables de reseñas
let modalFormResenia = new bootstrap.Modal(
  document.getElementById('comentarioModal')
);

//manejador de Eventos
//Cuando agregar una pelicula presionando "Agregar al Carrito"
sectionCards.addEventListener('click', eleccionesBotonesCard);

//Elimina pelicula del carrito
carrito.addEventListener('click', eliminarPelicula);

//Vaciar el carrito
botonVaciarCarrito.addEventListener('click', (e) => {
  e.preventDefault();
  articulosCarrito = []; // resetear el arreglo carrito
  limpiarHTML(); // Se elimina todo el HTML
});

cargaInicial();

function cargaInicial() {
  if (listaPeliculas.length > 0) {
    //dibujo una fila en la tabla
    listaPeliculas.map((pelicula) => crearCard(pelicula));
  }
}

function crearCard(pelicula) {
  //let sectionCards = document.querySelector('#sectionCards');
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
        <p class="precio">$500 <span class="pull-right">$60</span></p>
        <a href="../pages/detalle.html">
            <button
            class="btn btn-primary my-2 w-100 boton-detalles"
            title="${pelicula.titulo}"
            onclick="ver(this)"
            >
            Ver Detalles
            </button>
        </a>
        <button
        class="btn btn-info my-2 w-100 boton-resenia"
        >
        Agregar reseña
        </button>
        <a
        href="#"
        class="btn btn-primary full-width agregar-carrito"
        >Agregar Al Carrito</a
      >
        
      </div>
    </article>
  </aside>`;
}

function ver(element) {
  console.log(element);
  localStorage.setItem('titulo', element.getAttribute('title'));
}

//Funciones de los botones de la card
function eleccionesBotonesCard(e) {
  //botón agregar reseña
  if (e.target.classList.contains('boton-resenia')) {
    //e.preventDefault();
    //console.log(e.target.classList.contains('boton-resenia'));
    modalFormResenia.show();
    e.preventDefault();

    //reseña
    let btnComentario = document.querySelector('form');
    btnComentario.setAttribute(
      'id',
      e.target.parentElement.querySelector('h5').textContent
    );
    btnComentario.addEventListener('submit', escribirComentario);

    // document
    //   .getElementById('botonComentar')
    //   .addEventListener('submit', escribirComentario);
    // function escribirComentario(e) {
    //   e.preventDefault();
    //   console.log('escribir comentario');
    // }
  }

  //boton Agregar Carrito
  if (e.target.classList.contains('agregar-carrito')) {
    e.preventDefault();
    const peliSeleccionada = e.target.parentElement.parentElement;
    leerDatosPelicula(peliSeleccionada);
  }
}

//Leer el contenido del HTML al que le dimos click y extrae
//la info de la pelicula
function leerDatosPelicula(pelicula) {
  //Crear un objeto con el contenido de la pelicula actual
  const infoPelicula = {
    imagen: pelicula.querySelector('img').src,
    titulo: pelicula.querySelector('h5').textContent,
    precio: pelicula.querySelector('.precio span').textContent,
    cantidad: 1,
  };

  //Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some(
    (pelicula) => pelicula.titulo === infoPelicula.titulo
  );

  if (existe) {
    //Actualizamos la cantidad
    const peliculas = articulosCarrito.map((pelicula) => {
      if (pelicula.titulo === infoPelicula.titulo) {
        pelicula.cantidad++;
        return pelicula; //retorna el objeto actualizado
      } else {
        return pelicula; // retorna los objetos que no son los duplicados
      }
    });
    articulosCarrito = [...peliculas];
  } else {
    //Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoPelicula];
  }

  carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML() {
  //Limpiar el HTML
  limpiarHTML();

  //Recorre el arreglo del carrito y genera el HTML
  articulosCarrito.forEach((pelicula) => {
    const { imagen, titulo, precio, cantidad } = pelicula;
    const row = document.createElement('tr');
    row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                 ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-pelicula">X</a>
            </td>
        `;

    //Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });
}

//Elimina las peliculas del tbody
function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

function eliminarPelicula(e) {
  if (e.target.classList.contains('borrar-pelicula')) {
    const peliculaTitulo =
      e.target.parentElement.parentElement.children[1].textContent;
    //Elimina del arrego de articulosCarrito por el titulo de la pelicula
    articulosCarrito = articulosCarrito.filter(
      (pelicula) => pelicula.titulo !== peliculaTitulo.trim()
    );
    carritoHTML(); //volvemos a iterar sobre carrito y mostrar su HTML
  }
}

//reseña - comentarios y voto positivo o negativo
function mostrarFormularioResenia() {
  modalFormResenia.show();
}

function escribirComentario(e) {
  e.preventDefault();
  //1- en que posicion esta almancenada la peli que quiero agregar la resenia
  let posicionPelicula = listaPeliculas.findIndex(
    (pelicula) => pelicula.titulo === e.target.getAttribute('id')
  );
  //todo: chequear que todos los datos del formulario sean validos
  //2- editar los datos de la pelicula seleccionada
  listaPeliculas[posicionPelicula].reseniaVoto = e.target[0].value;
  listaPeliculas[posicionPelicula].reseniaComentario = e.target[1].value;

  //3 - actualizar el localstorage
  guardarEnLocalstorage();

  //4- cerrar Modal
  modalFormResenia.hide();
}

function guardarEnLocalstorage() {
  localStorage.setItem('listaPeliculas', JSON.stringify(listaPeliculas));
}
