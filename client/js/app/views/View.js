class View {

  constructor(elemento) {

    this._elemento = elemento;
  }

  template(model) {

    throw new Error('Esse método deve ser sobrescrito');
  }

  update(model) {

    this._elemento.innerHTML = this.template(model);
  }
}
