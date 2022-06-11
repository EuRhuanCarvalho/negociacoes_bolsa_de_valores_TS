export class Negociacao {
    constructor(// muito cuidado pois o readonly não impossibilita completamente a alteração. Usado metodos Set possibilitam isso. Ex: SetDate
    data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
