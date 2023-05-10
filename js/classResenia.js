export default class Resenia {
  #codigo;
  #votoResenia;
  #votoDescripcion;

  constructor(codigo, votoResenia, votoDescripcion) {
    this.#codigo = codigo;
    this.#votoResenia = votoResenia;
    this.#votoDescripcion = votoDescripcion;
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(codigo) {
    this.#codigo = codigo;
  }

  get votoResenia() {
    return this.#votoResenia;
  }

  set votoResenia(votoResenia) {
    this.#votoResenia = votoResenia;
  }

  get votoDescripcion() {
    return this.#votoDescripcion;
  }

  set votoDescripcion(votoDescripcion) {
    this.#votoDescripcion = votoDescripcion;
  }
  toJSON() {
    return {
      codigo: this.codigo,
      votoResenia: this.votoResenia,
      votoDescripcion: this.votoDescripcion,
    };
  }
}
