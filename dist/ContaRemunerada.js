"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaRemunerada = void 0;
const ContaCorrente_1 = require("./ContaCorrente");
class ContaRemunerada extends ContaCorrente_1.ContaCorrente {
    _rendimento;
    constructor(cliente, saldo = 0.0, tarifa = 0.0, limiteCredito = 100.0, juros = 0.0, rendimento = 0.0) {
        super(cliente, saldo, tarifa, limiteCredito, juros);
        this._rendimento = rendimento;
    }
    get rendimento() {
        return this._rendimento;
    }
    set rendimento(valor) {
        if (valor < 0.0) {
            this._rendimento = 0.0;
        }
        else {
            this._rendimento = valor;
        }
    }
    aplicaRendimento() {
        if (this.saldo > 0) {
            let valorRendimento = this.saldo * (this._rendimento / 100);
            this.depositar(valorRendimento);
        }
    }
    viraMes() {
        super.viraMes();
        this.aplicaRendimento();
        return this.saldo;
    }
    toString() {
        return super.toString() +
            "\nRendimento = " + this._rendimento.toFixed(2) + "%";
    }
}
exports.ContaRemunerada = ContaRemunerada;
//# sourceMappingURL=ContaRemunerada.js.map