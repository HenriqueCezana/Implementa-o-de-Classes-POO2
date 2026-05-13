"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    static _qtContas = 0; //atributo estático, da classe e não da instância da classe
    _id;
    _saldo;
    _titular;
    constructor(cliente, saldo = 0.0) {
        if (cliente != null) {
            this._titular = cliente;
            this._saldo = saldo < 0.0 ? 0.0 : saldo;
            Conta._qtContas++; //ATENÇÃO: não usa o this, mas Conta
            this._id = "" + new Date().getFullYear() + Conta._qtContas;
        }
        else {
            throw new ReferenceError("Null Pointer Error - Cliente nulo");
        }
    }
    static get qtContas() {
        return Conta._qtContas;
    }
    get id() {
        return this._id;
    }
    get titular() {
        return this._titular;
    }
    set titular(cliente) {
        if (cliente != null) {
            this._titular = cliente;
        }
    }
    get saldo() {
        return this._saldo;
    }
    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            return true;
        }
        return false;
    }
    depositar(valor) {
        if (valor > 0.0) {
            this._saldo += valor;
            return true;
        }
        return false;
    }
    transferir(valor, contaDestino) {
        if (this.sacar(valor)) {
            return contaDestino.depositar(valor);
        }
        return false;
    }
    toString() {
        return ("Nº Conta = " + this._id +
            "\nTitular = " + this._titular.toString() +
            "\nSaldo = R$" + this.saldo.toFixed(2));
    }
}
exports.Conta = Conta;
//# sourceMappingURL=Conta.js.map