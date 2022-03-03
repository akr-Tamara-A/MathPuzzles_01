import { Keyboard } from "./components/Keyboard.js";
import { Expression } from "./components/Expression.js";
import { Expressions } from "./components/Expressions.js";
import { App } from "./components/App.js";
import { Icon } from "./components/Icon.js";

const buttonCreateExpr = document.querySelector('#button_create');
const buttonCancelExpr = document.querySelector('#button_cancel');
const buttonSubmitExpr = document.querySelector('#button_submit');

let curId;

/** */
const app = new App();

/** */
const keyboard = new Keyboard(
  document.querySelector('#keyboard'),
  (iconId) => {
    app.recordData(iconId, curId);
    const icon = new Icon(iconId);
    icon.insertIcon(curId);
  }
);

/** */
const expressionsList = new Expressions({
  node: document.querySelector('#expressions'),
  data: app.showData(),
  renderer: (elem) => {
    const expression = createNewExpression(elem);
    const expressionElement = expression.createExpression();
    expressionsList.setItem(expressionElement);
  }
});
expressionsList.renderItems();

/** */
function createNewExpression(id) {
  const expression = new Expression(
    '#expressionTemplate',
    id,
    {
      handleConfirm: () => {
        buttonCancelExpr.setAttribute('disabled', true);
        buttonCreateExpr.removeAttribute('disabled');
        keyboard.removeEventListeners();
      },
      handleEdit: () => {
        curId = id;
      },
      handleDelete: () => {
        keyboard.removeEventListeners();
        expressionsList.deleteItem(id);
      },
    }
  );
  return expression;
};

/** */
buttonCreateExpr.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  buttonCreateExpr.setAttribute('disabled', true);
  buttonCancelExpr.removeAttribute('disabled');

  const expression = createNewExpression(Expression.ammount);
  const expressionElement = expression.createExpression();
  expressionsList.setItem(expressionElement);

  keyboard.setEventListeners();
  curId = Expression.ammount - 1;
});

/** */
  buttonCancelExpr.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    buttonCancelExpr.setAttribute('disabled', true);
    buttonCreateExpr.removeAttribute('disabled');

    keyboard.removeEventListeners();
    expressionsList.deleteItem(Expression.ammount - 1);
  });

/** */
buttonSubmitExpr.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    app.showData();
  });


