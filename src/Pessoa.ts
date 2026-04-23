export class Pessoa {

  private _nome: string;
  private _endereco: string;
  private _telefone: string;
  private _cpf: string;
  private _dataNascimento: Date;

  constructor(nome: string, endereco: string, telefone: string, cpf: string, dataNascimento: Date) {
    this._nome = nome;
    this._endereco = endereco;
    this._telefone = telefone;
    this._cpf = cpf;
    this._dataNascimento = dataNascimento;
  }


  public get nome(): string {
    return this._nome;
  }

  public set nome(valor: string) {
    this._nome = valor;
  }

  public get endereco(): string {
    return this._endereco;
  }

  public set endereco(valor: string) {
    this._endereco = valor;
  }

  public get telefone(): string {
    return this._telefone;
  }

  public set telefone(valor: string) {
    this._telefone = valor;
  }

  public get cpf(): string {
    return this._cpf;
  }

  public get dataNascimento(): Date {
    return this._dataNascimento;
  }

  public set dataNascimento(valor: Date) {
    this._dataNascimento = valor;
  }


  public toString(): string {
    return `Nome: ${this._nome}
Endereço: ${this._endereco}
Telefone: ${this._telefone}
CPF: ${this._cpf}
Data de Nascimento: ${this._dataNascimento.toLocaleDateString("pt-br")}`;
  }
}