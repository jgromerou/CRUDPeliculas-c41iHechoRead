export default class Pelicula {
  #codigo;
  #titulo;
  #descripcion;
  #imagen;
  #genero;
  #anio;
  #duracion;
  #pais;
  #director;
  #reparto;
  #listaResenia;

  constructor(
    titulo,
    descripcion,
    imagen,
    genero,
    anio,
    duracion,
    pais,
    director,
    reparto,
    listaResenia = []
  ) {
    this.#codigo = uuidv4();
    this.#titulo = titulo;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
    this.#genero = genero;
    this.#anio = anio;
    this.#duracion = duracion;
    this.#pais = pais;
    this.#director = director;
    this.#reparto = reparto;
    this.#listaResenia = listaResenia;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(codigo) {
    this.#codigo = codigo;
  }

  get titulo() {
    return this.#titulo;
  }

  set titulo(titulo) {
    this.#titulo = titulo;
  }

  get descripcion() {
    return this.#descripcion;
  }

  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }

  get imagen() {
    return this.#imagen;
  }

  set imagen(imagen) {
    this.#imagen = imagen;
  }

  get genero() {
    return this.#genero;
  }

  set genero(genero) {
    this.#genero = genero;
  }

  get anio() {
    return this.#anio;
  }

  set anio(anio) {
    this.#anio = anio;
  }

  get duracion() {
    return this.#duracion;
  }

  set duracion(duracion) {
    this.#duracion = duracion;
  }

  get pais() {
    return this.#pais;
  }

  set pais(pais) {
    this.#pais = pais;
  }

  get director() {
    return this.#director;
  }

  set director(director) {
    this.#director = director;
  }

  get reparto() {
    return this.#reparto;
  }

  set reparto(reparto) {
    this.#reparto = reparto;
  }
  get listaResenia() {
    return this.#listaResenia;
  }

  set listaResenia(listaResenia) {
    this.#listaResenia = listaResenia;
  }

  //este metodo lo agregamos para q JSON.stringify pueda transformar las propiedades privadas a formato JSON
  toJSON() {
    return {
      codigo: this.codigo,
      titulo: this.titulo,
      descripcion: this.descripcion,
      imagen: this.imagen,
      anio: this.anio,
      genero: this.genero,
      duracion: this.duracion,
      pais: this.pais,
      director: this.director,
      reparto: this.reparto,
      listaResenia: this.listaResenia,
    };
  }
}
