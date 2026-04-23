import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {
  private _idConta: number;
  private _limiteCredito: number;

  constructor(
    nome: string,
    endereco: string,
    telefone: string,
    cpf: string,
    dataNascimento: Date,
    numeroConta: number,
    limiteCredito: number
  ) {
    super(nome, endereco, telefone, cpf, dataNascimento);
    this._idConta = numeroConta;
    this._limiteCredito = limiteCredito;
  }

  public get idConta(): number {
    return this._idConta;
  }

  public set idConta(valor: number) {
    this._idConta = valor;
  }

  public get limiteCredito(): number {
    return this._limiteCredito;
  }

  public set limiteCredito(valor: number) {
    this._limiteCredito = valor;
  }

  public toString(): string {
    return (
      "Cliente:\n" +
      super.toString() +
      "\nConta: " + this._idConta +
      "\nLimite de Crédito: R$ " + this._limiteCredito.toFixed(2)
    );
  }
}