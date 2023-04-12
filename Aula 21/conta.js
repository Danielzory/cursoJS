class contaBancaria {
    constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this._saldo = 0
    this.tipo = tipo
    }

    get saldo(){
        return this._saldo
    }
    set saldo(valor){
        this._saldo = valor
    }

    sacar(valor){
        if (valor > this._saldo){
            return  'Saldo insuficiente'
        }
        this._saldo = this._saldo - valor;
       return `Saldo atual: R$ ${this._saldo}`
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return  `Saldo atual: R$ ${this._saldo}` 
    }

}

class contaCorrente extends contaBancaria {
    constructor (agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'Corrente'
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        this._cartaoCredito
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupança extends contaBancaria {
    constructor (agencia, numero){
        super (agencia, numero,);
        this.tipo = 'Poupança'
    }
}


class contaUniversitaria extends contaBancaria {
    constructor (agencia, numero){
        super (agencia, numero);
        this.tipo = 'Universitária'
    }

    sacar(valor){
        if (valor > 500){
            return 'Operação não permitida'
        }

        this._saldo = this._saldo - valor
        return `Saldo atual: R$ ${this._saldo}`
    }
}

