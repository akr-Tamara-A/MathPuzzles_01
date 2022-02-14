export class Expression {
  constructor(selector, handlers, data) {
    this._templateSelector = selector;
    this._handleConfirm = handlers.handleConfirm;
    this._handleEdit = handlers.handleEdit;
    this._handleDelete = handlers.handleDelete;
    this._data = data;
    this._expression;
  }

  /** */
  _getTemplate() {
    const expressionElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return expressionElement;
  }

  /** */
  createExpression() {
    this._expression = this._getTemplate();
    this._setEventListeners();
    this._expression.querySelector('.expression').textContent = this._data;

    return this._expression;
  }

  /** */
  _setEventListeners() {
    this._expression.querySelector('.button_confirm').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._handleConfirm();
    });
    this._expression.querySelector('.button_edit').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._handleEdit();
    });
    this._expression.querySelector('.button_deleteLast').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._handleDelete();
    });
  }




};
