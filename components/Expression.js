export class Expression {
  constructor(selector, id, handlers) {
    this._templateSelector = selector;
    this._id = id;
    console.log(id);
    this._handleConfirm = handlers.handleConfirm;
    this._handleEdit = handlers.handleEdit;
    this._handleDelete = handlers.handleDelete;
    this._expression;
    this._exprId;
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
    this._expression.id = `expression_${Expression.ammount}`;
    this._exprId = this._expression.id;
    Expression.ammount = Expression.ammount + 1;
    return this._expression;
  }

  /** */
  getExpressionId() {
    return this._exprId;
  }


  /** */
  _setEventListeners() {
    this._expression.querySelector('.button_confirm').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._handleConfirm();
      this._expression.querySelector('.button_confirm').disabled = true;
      this._expression.querySelector('.button_edit').disabled = false;
      this._expression.querySelector('.button_delete').disabled = false;
    });
    this._expression.querySelector('.button_edit').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._handleEdit();
      this._expression.querySelector('.button_confirm').disabled = false;
      this._expression.querySelector('.button_edit').disabled = true;
      this._expression.querySelector('.button_delete').disabled = true;
    });
    this._expression.querySelector('.button_delete').addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this._handleDelete();
    });
  }

  /** */
  _insertIcon(id) {
    const node = this.expression.querySelector('.expression');
    node.append(this._createIcon(id));
  }

  /** */
  _createIcon(id) {
    const elem = document.createElement('img');
    elem.src = `./images/image_${id}.png`;
    return elem;
  }

};
