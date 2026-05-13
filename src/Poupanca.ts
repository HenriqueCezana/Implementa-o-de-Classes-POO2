import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { IAplicacao } from "./IAplicacao";

export class Poupanca extends Conta implements IAplicacao {
    private _rendimento: number;

    constructor(cliente: Cliente, saldo: number = 0.0, rendimento: number = 0.0) {
        super(cliente, saldo);
        this._rendimento = rendimento;
    }

    get rendimento(): number {
        return this._rendimento;
    }
    set rendimento(valor: number) {
        if (valor < 0.0) {
            this._rendimento = 0.0;
        } else {
            this._rendimento = valor;
        }
    }

   viraMes(): number{
        let rendimento = super.saldo * (this._rendimento/100);
        this.depositar(rendimento);
        return this.saldo;
    }

    aplicaRendimento(): void {
        let valorRendimento = this.saldo * (this._rendimento / 100);
        this.depositar(valorRendimento);
    }

    toString(): string {
        return (super.toString() +
            "\nRendimento = " + this._rendimento.toFixed(2) + "%");
    }
}

