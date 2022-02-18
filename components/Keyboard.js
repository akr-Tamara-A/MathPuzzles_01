export class Keyboard {
  constructor(node, handler) {
    this._buttons = node.querySelectorAll('button');
    this._currentButton;
    this._handler = handler;
  }

  /** */
  setEventListeners = () => {
    this._buttons.forEach((button) => {
      button.removeAttribute('disabled');
      button.addEventListener('click', this._handleButtonClick);
    });
  }

  /** */
  removeEventListeners = () => {
    this._buttons.forEach((button) => {
      button.setAttribute('disabled', true);
      button.removeEventListener('click', this._handleButtonClick);
    });
  }

  /** */
  _showId = () => {
    return !!this._currentButton && this._currentButton.dataset.id;
  }

  /** */
  _handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.matches('img')) {
      this._currentButton = e.target.parentElement;
    } else if (e.target.matches('button')) {
      this._currentButton = e.target;
    } else {
      this._currentButton = undefined;
    }
    this._handler(this._showId());
  }



};

