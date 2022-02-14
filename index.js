import { Expression } from "./components/Expression.js";
import { Expressions } from "./components/Expressions.js";

const buttonCreateExpr = document.querySelector('#button_create');
const buttonCancelExpr = document.querySelector('#button_cancel');
const buttonSubmitExpr = document.querySelector('#button_submit');

/** */
const expressions = [];

/** */
const expressionsList = new Expressions({
  node: document.querySelector('#expressions'),
  data: expressions,
  renderer: (elem) => {
    const expression = createNewExpression(elem);
    const expressionElement = expression.createExpression();
    expressionsList.setItem(expressionElement);
  }
});
expressionsList.renderItems();


/** */
function createNewExpression(elem) {
  const expression = new Expression(
    '#expressionTemplate',
    {
      handleConfirm: () => {
        console.log('confirm');
      },
      handleEdit: () => {
        console.log('edit');
      },
      handleDelete: () => {
        console.log('delete');
      },
    },
    elem
  );
  return expression;
};


/** */
buttonCreateExpr.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  buttonCreateExpr.setAttribute('disabled', true);
  buttonCancelExpr.removeAttribute('disabled');
  const expression = createNewExpression('a');
  const expressionElement = expression.createExpression();
  expressionsList.setItem(expressionElement);
  expressions.push('');
});

/** */
  buttonCancelExpr.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    buttonCancelExpr.setAttribute('disabled', true);
    buttonCreateExpr.removeAttribute('disabled');
  });

/** */
buttonSubmitExpr.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(expressions);
  });





