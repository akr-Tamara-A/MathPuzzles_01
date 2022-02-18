export class App {
  constructor() {
    this._data = [];
    
  }

  recordNewData = (data) => {
    this._data.push(data);
  }

  showData = () => {
    console.log(this._data);
    return this._data;
  }
};
