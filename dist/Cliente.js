"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    _idConta;
    _limiteCredito;
    constructor(nome, endereco, telefone, cpf, dataNascimento, numeroConta, limiteCredito) {
        super(nome, endereco, telefone, cpf, dataNascimento);
        this._idConta = numeroConta;
        this._limiteCredito = limiteCredito;
    }
    get idConta() {
        return this._idConta;
    }
    set idConta(valor) {
        this._idConta = valor;
    }
    get limiteCredito() {
        return this._limiteCredito;
    }
    set limiteCredito(valor) {
        this._limiteCredito = valor;
    }
    toString() {
        return ("Cliente:\n" +
            super.toString() +
            "\nConta: " + this._idConta +
            "\nLimite de Crédito: R$ " + this._limiteCredito.toFixed(2));
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map