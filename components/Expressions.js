export class Expressions {
  constructor({node, data, renderer}) {
    this._node = node;
    this._data = data;
    this._renderer = renderer;
  }

  renderItems() {
    if (this._data.length > 0) {
      this._data.forEach((elem) => {
        this._renderer(elem);
      });
    }
  }

  /***/
  setItem(elem) {
    this._node.append(elem);
  }

};
