export class Negociacao {
    constructor(// muito cuidado pois o readonly não impossibilita completamente a alteração. Usado metodos Set possibilitam isso. Ex: SetDate
    _data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
