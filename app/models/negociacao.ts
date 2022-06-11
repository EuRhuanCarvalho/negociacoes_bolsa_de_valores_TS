export class Negociacao {
 

    constructor( // muito cuidado pois o readonly não impossibilita completamente a alteração. Usado metodos Set possibilitam isso. Ex: SetDate
        public readonly data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number       
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }
}