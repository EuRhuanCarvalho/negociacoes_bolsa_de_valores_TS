export class Negociacao {
    constructor(// muito cuidado pois o readonly não impossibilita completamente a alteração. Usado metodos Set possibilitam isso. Ex: SetDate
    _data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get valor() {
        return this._valor;
    }
    get quantidade() {
        return this._quantidade;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
