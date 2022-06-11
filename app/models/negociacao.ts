export class Negociacao {
 

    constructor( // muito cuidado pois o readonly não impossibilita completamente a alteração. Usado metodos Set possibilitam isso. Ex: SetDate
        private _data: Date, 
        private _quantidade: number, 
        private _valor: number       
    ) {}
    

    get valor(): number {
        return this._valor;
    }

    get quantidade(): number {
        return this._quantidade * this._valor;
    }

    get data(): Date { // aplicando programação defensiva para não alterar a data
        const data = new Date(this._data.getTime());
        return data;

    }
}