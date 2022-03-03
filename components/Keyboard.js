export class Keyboard {
  constructor(node, handler) {
    this._buttons = node.querySelectorAll('button');
    this._iconsButtons = [];
    this._numberButtons = [];
    this._currentButton;
    this._handler = handler;
  }

  /** */
  setEventListeners = () => {
    this._buttons.forEach((button) => {
      if (button.dataset.block == 'icons') {
        this._iconsButtons.push(button);
      } else {
        this._numberButtons.push(button);
      }
    });

    this._setIconsBlockListeners();
  }

  /** */
  removeEventListeners = () => {
    this._removeIconsBlockListeners();
    this._removeNumbersBlockListeners();
  }

  /** */
  _setIconsBlockListeners = () => {
    this._iconsButtons.forEach((button) => {
      button.removeAttribute('disabled');
      button.addEventListener('click', this._handleButtonClick);
    });
  }
  
  /** */
  _removeIconsBlockListeners = () => {
    this._iconsButtons.forEach((button) => {
      button.setAttribute('disabled', true);
      button.removeEventListener('click', this._handleButtonClick);
    });
  }

  /** */
  _setNumbersBlockListeners = () => {
    this._numberButtons.forEach((button) => {
      button.removeAttribute('disabled');
      button.addEventListener('click', this._handleButtonClick);
    });
  }
    
  /** */
  _removeNumbersBlockListeners = () => {
    this._numberButtons.forEach((button) => {
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

    if (this._currentButton && this._currentButton.dataset.id == 'symbol-5') {
      this._removeIconsBlockListeners();
      this._setNumbersBlockListeners();
    }

    this._handler(this._showId());
  }



};

