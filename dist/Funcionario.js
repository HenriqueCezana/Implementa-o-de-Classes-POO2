"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    static _qtFuncionarios = 0;
    _matricula;
    _salario;
    _agencia;
    static get qtFuncionarios() {
        return Funcionario._qtFuncionarios;
    }
    constructor(nome, endereco, telefone, cpf, dataNascimento, salario, agencia) {
        super(nome, endereco, telefone, cpf, dataNascimento);
        this._salario = salario;
        this._agencia = agencia;
        Funcionario._qtFuncionarios++;
        this._matricula = Funcionario._qtFuncionarios;
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    set salario(valor) {
        this._salario = valor;
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(valor) {
        this._agencia = valor;
    }
    bonificacao(percentual) {
        return (this._salario * percentual) / 100;
    }
    toString() {
        return (super.toString() +
            "\nMatrícula: " + this._matricula +
            "\nAgência: " + this._agencia +
            "\nSalário: R$ " + this._salario.toFixed(2));
    }
}
exports.Funcionario = Funcionario;
//# sourceMappingURL=Funcionario.js.map