"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atendente = void 0;
const Funcionario_1 = require("./Funcionario");
class Atendente extends Funcionario_1.Funcionario {
    _tipo;
    constructor(nome, endereco, telefone, cpf, dataNascimento, salario, agencia, tipo) {
        super(nome, endereco, telefone, cpf, dataNascimento, salario, agencia);
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(valor) {
        this._tipo = valor;
    }
    bonificacao(percentual) {
        if (percentual !== undefined) {
            return (this.salario * percentual) / 100;
        }
        if (this.tipo === "caixa") {
            return (this.salario * 7) / 100;
        }
        else {
            return (this.salario * 10) / 100;
        }
    }
    toString() {
        return "Atendente (" + this._tipo + ")\n" + super.toString();
    }
}
exports.Atendente = Atendente;
//# sourceMappingURL=Atendente.js.map