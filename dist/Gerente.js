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
            return super.bonificacao(percentual);
        }
        if (this._nivel === "conta") {
            return super.bonificacao(15);
        }
        else if (this._nivel === "agência") {
            return super.bonificacao(20);
        }
        else {
            return super.bonificacao(25);
        }
    }
    toString() {
        return "Gerente (" + this._nivel + ")\n" + super.toString();
    }
}
exports.Gerente = Gerente;
//# sourceMappingURL=Gerente.js.map