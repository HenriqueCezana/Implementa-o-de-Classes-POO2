import { Funcionario } from "./Funcionario";

export class Atendente extends Funcionario {
  private _tipo: string;

  constructor(
    nome: string,
    endereco: string,
    telefone: string,
    cpf: string,
    dataNascimento: Date,
    salario: number,
    agencia: string,
    tipo: string
  ) {
    super(nome, endereco, telefone, cpf, dataNascimento, salario, agencia);
    this._tipo = tipo;
  }

  public get tipo(): string {
    return this._tipo;
  }

  public set tipo(valor: string) {
    this._tipo = valor;
  }

  public bonificacao(percentual?: number): number {
    if (percentual !== undefined) {
      return super.bonificacao(percentual);
    }

    if (this._tipo === "caixa") {
      return super.bonificacao(7);
    } else {
      return super.bonificacao(10);
    }
  }

  public toString(): string {
    return "Atendente (" + this._tipo + ")\n" + super.toString();
  }
}