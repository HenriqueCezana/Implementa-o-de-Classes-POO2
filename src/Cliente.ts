import {Pessoa} from "./Pessoa";
import {IAutenticavel} from "./IAutenticavel";

export class Cliente extends Pessoa implements IAutenticavel {
    private _agencia: string;
    private _senha: string;

    constructor(nome: string, endereco: string, telefone: string, cpf: string, dataNascimento: Date, agencia?: string, senha: string = "1234") {
        super(
            nome.toUpperCase(), endereco, telefone, cpf, dataNascimento
        );
        this._agencia = agencia != undefined ? agencia : "001";
        this._senha = senha;
    }

    get agencia() : string {
        return this._agencia;
    } 

    set agencia(novaAgencia: string)  {
        if (novaAgencia != "") {
            this._agencia = novaAgencia;
        }        
    }

    autentica(senha: string): boolean {
        return this._senha == senha;
    }
    
    toString(): string{
        return "Cliente:\n"+
            super.toString() +
            "\nAgência : " + this._agencia;
    }
}