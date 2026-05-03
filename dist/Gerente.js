"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
const Funcionario_1 = require("./Funcionario");
class Gerente extends Funcionario_1.Funcionario {
    _nivel;
    constructor(nome, endereco, telefone, cpf, dataNascimento, salario, agencia, nivel) {
        super(nome, endereco, telefone, cpf, dataNascimento, salario, agencia);
        this._nivel = nivel;
    }
    get nivel() {
        return this._nivel;
    }
    set nivel(valor) {
        this._nivel = valor;
    }
    bonificacao(percentual) {
        if (percentual !== undefined) {
            return (this.salario * percentual) / 100;
        }
        if (this.nivel === "conta") {
            return (this.salario * 15) / 100;
        }
        else if (this.nivel === "agência") {
            return (this.salario * 20) / 100;
        }
        else {
            return (this.salario * 25) / 100;
        }
    }
    toString() {
        return "Gerente (" + this._nivel + ")\n" + super.toString();
    }
}
exports.Gerente = Gerente;
//# sourceMappingURL=Gerente.js.map