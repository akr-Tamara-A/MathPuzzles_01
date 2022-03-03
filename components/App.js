export class App {
  constructor() {
    this._rawData = [];
    this._unknowns = {};
  }

  /** */
  recordData = (iconId, exprId) => {
    if (this._rawData[exprId] == undefined) {
      this._rawData[exprId] = [];
    }
    this._rawData[exprId].push(iconId);

    this._isUnknown(iconId);
  }

  /** */
  showData = () => {
    console.log(this._rawData);
    console.log(this._unknowns);
    return this._rawData;
  }

  /** */
  _isUnknown(iconId) {
    if (iconId.split('-')[0] !== 'icon') return;

    const keys = Object.keys(this._unknowns);

    if (keys.length == 0) {
      this._unknowns['var_0'] = {
        icon: iconId,
        value: undefined
      }
    } else {
      const arr = Object.values(this._unknowns);
      const index = arr.findIndex((element, index, array) => {
        return element.icon == iconId;
      })
      if (index == -1) {
        this._unknowns[`var_${arr.length}`] = {
          icon: iconId,
          value: undefined
        }
      }
    }
  };

};
