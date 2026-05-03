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
    return (this.salario * percentual) / 100;
  }

  if (this.nivel === "conta") {
    return (this.salario * 15) / 100;
  } else if (this.nivel === "agência") {
    return (this.salario * 20) / 100;
  } else {
    return (this.salario * 25) / 100;
  }
}

  public toString(): string {
    return "Gerente (" + this._nivel + ")\n" + super.toString();
  }
}