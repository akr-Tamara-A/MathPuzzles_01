export class Icon {
  constructor(id) {
    this._id = id;
    this._iconType;
    this._iconId;
    this._symbolsData = {
      1: '+',
      2: '-',
      3: '*',
      4: '/',
      5: '=',
      6: '??',
    };
  }

  /** */
  insertIcon(node) {
    this._defineIcon();
    const icon = document.createElement('div');
    icon.setAttribute('class', 'icon');
    
    if (this._iconType == 'icon') {
      let elem = document.createElement('img');
      elem.setAttribute('src', `./images/image_${this._iconId}.png`);
      elem.setAttribute('alt', `icon ${this._iconId}`);
      icon.append(elem);
    } else if (this._iconType == 'symbol') {
      icon.innerText = this._symbolsData[this._iconId];
    } else {
      icon.innerText = this._iconId;
    }

    document
        .querySelector(`#expression_${node}`)
        .querySelector('.expression')
        .append(icon);
  }

  /** */
  _defineIcon() {
    const arr = this._id.split('-');
    this._iconType = arr[0];
    this._iconId = arr[1];
  }

};
