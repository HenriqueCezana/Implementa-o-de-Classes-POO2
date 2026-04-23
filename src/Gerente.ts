import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
  private _nivel: string;

  constructor(
    nome: string,
    endereco: string,
    telefone: string,
    cpf: string,
    dataNascimento: Date,
    salario: number,
    agencia: string,
    nivel: string
  ) {
    super(nome, endereco, telefone, cpf, dataNascimento, salario, agencia);
    this._nivel = nivel;
  }

  public get nivel(): string {
    return this._nivel;
  }

  public set nivel(valor: string) {
    this._nivel = valor;
  }

  public bonificacao(percentual?: number): number {
    if (percentual !== undefined) {
      return super.bonificacao(percentual);
    }

    if (this._nivel === "conta") {
      return super.bonificacao(15);
    } else if (this._nivel === "agência") {
      return super.bonificacao(20);
    } else {
      return super.bonificacao(25);
    }
  }

  public toString(): string {
    return "Gerente (" + this._nivel + ")\n" + super.toString();
  }
}