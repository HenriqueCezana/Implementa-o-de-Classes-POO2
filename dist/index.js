"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const ContaCorrente_1 = require("./ContaCorrente");
const Poupanca_1 = require("./Poupanca");
const ContaRemunerada_1 = require("./ContaRemunerada");
const cliente1 = new Cliente_1.Cliente("Carlos", "Rua A", "99999-1111", "111.111.111-11", new Date("1990-01-10"));
const cliente2 = new Cliente_1.Cliente("Ana", "Rua B", "99999-2222", "222.222.222-22", new Date("1995-03-15"));
const cliente3 = new Cliente_1.Cliente("Pedro", "Rua C", "99999-3333", "333.333.333-33", new Date("1988-07-20"));
const cliente4 = new Cliente_1.Cliente("Marina", "Rua D", "99999-4444", "444.444.444-44", new Date("2000-11-05"));
const cliente5 = new Cliente_1.Cliente("João", "Rua E", "99999-5555", "555.555.555-55", new Date("1992-09-12"));
const cliente6 = new Cliente_1.Cliente("Julia", "Rua F", "99999-6666", "666.666.666-66", new Date("1998-04-25"));
const contas = [
    new ContaCorrente_1.ContaCorrente(cliente1, 500, 15, 300, 5),
    new Poupanca_1.Poupanca(cliente2, 1000, 1.5),
    new ContaRemunerada_1.ContaRemunerada(cliente3, 800, 10, 400, 4, 2),
    new ContaCorrente_1.ContaCorrente(cliente4, 200, 12, 150, 6),
    new Poupanca_1.Poupanca(cliente5, 1500, 1.2),
    new ContaRemunerada_1.ContaRemunerada(cliente6, 1200, 20, 500, 3, 1.8)
];
console.log("=== TESTE DO MÉTODO viraMes() NO VETOR DE CONTAS ===");
contas.forEach(conta => {
    console.log("\nANTES DO VIRA MÊS:");
    console.log(conta.toString());
    conta.viraMes();
    console.log("\nDEPOIS DO VIRA MÊS:");
    console.log(conta.toString());
});
/*contas.forEach(conta => {
    conta.aplicaRendimento();
});*/
/*Erro apontado pelo TypeScript:
Property 'aplicaRendimento' does not exist on type 'Conta'.

Motivo:
O vetor contas é do tipo Array<Conta>.
A classe Conta possui o método viraMes(), mas não possui o método aplicaRendimento().*/
const aplicacoes = [];
contas.forEach(conta => {
    if (conta instanceof Poupanca_1.Poupanca || conta instanceof ContaRemunerada_1.ContaRemunerada) {
        aplicacoes.push(conta);
    }
});
/*aplicacoes.push(new ContaCorrente(cliente1, 300, 10, 200, 5));

Erro apontado pelo TypeScript:
Argument of type 'ContaCorrente' is not assignable to parameter of type 'IAplicacao'.
Property 'aplicaRendimento' is missing in type 'ContaCorrente'.

Motivo:
ContaCorrente não implementa a interface IAplicacao.*/
console.log("\n=== VETOR DE APLICAÇÕES ===");
aplicacoes.forEach(aplicacao => {
    aplicacao.aplicaRendimento();
    console.log(aplicacao.toString());
});
/*aplicacoes.forEach(aplicacao => {
    aplicacao.viraMes();
});

Erro apontado pelo TypeScript:
Property 'viraMes' does not exist on type 'IAplicacao'.

Motivo:
O vetor aplicacoes é do tipo Array<IAplicacao>.
A interface IAplicacao possui apenas o método aplicaRendimento().
*/
/*
REFLEXÃO:

Em uma aplicação real, não seria ideal criar um vetor de Conta ou de IAplicacao
esperando chamar os dois métodos diretamente sem erro.

Um vetor de Conta permite chamar viraMes, pois esse método existe na classe abstrata Conta.
Porém, ele não permite chamar aplicaRendimento, porque nem toda conta é uma aplicação.

Um vetor de IAplicacao permite chamar aplicaRendimento, pois esse método existe na interface.
Porém, ele não permite chamar viraMes, porque a interface IAplicacao não declara esse método.

E sim, seria possível usar instanceof para verificar se o objeto é Poupanca ou ContaRemunerada antes de chamar aplicaRendimento porém o ideal seria criar uma interface mais adequada para garantir que todos os objetos tivessem os dois métodos.*/ 
//# sourceMappingURL=index.js.map