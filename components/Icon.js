export class Icon {
  constructor(id) {
    this._id = id;
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
    const icon = document.createElement('div');
    icon.setAttribute('class', 'icon');

    const data = this._defineIcon();
    let iconNode;
    
    if (data.type == 'icon') {
      iconNode = this._handleIconType(icon, data.id);
    } else if (data.type == 'symbol') {
      iconNode = this._handleSymbolType(icon, data.id);
    } else {
      iconNode = this._handleNumberType(icon, data.id);
    }

    document
    .querySelector(`#expression_${node}`)
    .querySelector('.expression')
    .append(iconNode);
  }

  /** */
  _defineIcon() {
    const arr = this._id.split('-');

    return {
      type: arr[0],
      id: arr[1],
    }
  }

  /** */
  _handleIconType(iconNode, id) {
    let elem = document.createElement('img');
    elem.setAttribute('src', `./images/image_${id}.png`);
    elem.setAttribute('alt', `icon ${id}`);

    iconNode.append(elem);
    return iconNode;
  }

  /** */
  _handleSymbolType(iconNode, id) {
    iconNode.innerText = this._symbolsData[id];
    return iconNode;
  }

  /** */
  _handleNumberType(iconNode, id) {
    iconNode.innerText = id;
    return iconNode;
  }

};
