// como extraemos el parametro de la url
// console.log(window.location.search);
//instancia para trabar con los parametros
const parametroCodigo = new URLSearchParams(window.location.search);
// console.log(parametroCodigo);
console.log(parametroCodigo.get('codigo'));

//aqui hago el read
let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculas')) || [];

//busco la peli que me interesa
const peliculaBuscada = listaPeliculas.find(
  (pelicula) => pelicula.codigo === parametroCodigo.get('codigo')
);

console.log(peliculaBuscada);

//dibujar la card
let seccion = document.getElementById('seccionDetalle');
seccion.innerHTML = `
<div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="${peliculaBuscada.imagen}"
                class="img-fluid rounded-start"
                alt="${peliculaBuscada.titulo}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${peliculaBuscada.titulo}</h5>
                <p class="card-text">
                ${peliculaBuscada.descripcion}
                </p>
                <p class="card-text">
                  Genero:
                  <span class="badge rounded-pill bg-info"> ${peliculaBuscada.genero}</span>
                </p>
                <p class="card-text">Año: ${peliculaBuscada.anio}</p>
                <p class="card-text">Duración: ${peliculaBuscada.duracion} min</p>
                <p class="card-text">Pais: ${peliculaBuscada.pais}</p>
                <p class="card-text">
                  Reparto: ${peliculaBuscada.reparto}
                </p>
                <p class="card-text">Director: ${peliculaBuscada.director}</p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>`;
