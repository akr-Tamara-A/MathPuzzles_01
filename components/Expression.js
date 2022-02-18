export class Expression {
  constructor(selector, id, handlers, data) {
    this._templateSelector = selector;
    this._id = id;
    this._handleConfirm = handlers.handleConfirm;
    this._handleEdit = handlers.handleEdit;
    this._handleDelete = handlers.handleDelete;
    this._handleGetIcons = handlers._handleGetIcons;
    this._data = data;
    this._expression;
  }

  static ammount = 0;

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
    this._expression.id = `expression_${Expression.ammount}`;
    Expression.ammount = Expression.ammount + 1;
    return this._expression;
  }

  /** */
  getElements(data) {
    console.log(data);
  }


  /** */
  _setEventListeners() {
    this._expression.querySelector('.button_confirm').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._handleConfirm();
      e.target.setAttribute('disabled', true);
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
