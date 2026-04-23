"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    _nome;
    _endereco;
    _telefone;
    _cpf;
    _dataNascimento;
    constructor(nome, endereco, telefone, cpf, dataNascimento) {
        this._nome = nome;
        this._endereco = endereco;
        this._telefone = telefone;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    set nome(valor) {
        this._nome = valor;
    }
    get endereco() {
        return this._endereco;
    }
    set endereco(valor) {
        this._endereco = valor;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(valor) {
        this._telefone = valor;
    }
    get cpf() {
        return this._cpf;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(valor) {
        this._dataNascimento = valor;
    }
    toString() {
        return `Nome: ${this._nome}
Endereço: ${this._endereco}
Telefone: ${this._telefone}
CPF: ${this._cpf}
Data de Nascimento: ${this._dataNascimento.toLocaleDateString("pt-br")}`;
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map