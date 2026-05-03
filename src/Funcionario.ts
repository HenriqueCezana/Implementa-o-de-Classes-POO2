import { Pessoa } from "./Pessoa";

export abstract class Funcionario extends Pessoa {
  private static _qtFuncionarios: number = 0;
  private _matricula: number;
  private _salario: number;
  private _agencia: string;

  public static get qtFuncionarios(): number {
    return Funcionario._qtFuncionarios;
  }

  constructor(
    nome: string,
    endereco: string,
    telefone: string,
    cpf: string,
    dataNascimento: Date,
    salario: number,
    agencia: string
  ) {
    super(nome, endereco, telefone, cpf, dataNascimento);

    this._salario = salario;
    this._agencia = agencia;

    Funcionario._qtFuncionarios++;
    this._matricula = Funcionario._qtFuncionarios;
  }

  public get matricula(): number {
    return this._matricula;
  }

  public get salario(): number {
    return this._salario;
  }

  public set salario(valor: number) {
    this._salario = valor;
  }

  public get agencia(): string {
    return this._agencia;
  }

  public set agencia(valor: string) {
    this._agencia = valor;
  }

  public abstract bonificacao(percentual?: number): number;

  public toString(): string {
    return (
      super.toString() +
      "\nMatrícula: " + this._matricula +
      "\nAgência: " + this._agencia +
      "\nSalário: R$ " + this._salario.toFixed(2)
    );
  }
}
