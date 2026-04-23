import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";
import { Atendente } from "./Atendente";
import { Cliente } from "./Cliente";

const func1 = new Funcionario(
  "Ana",
  "Rua A, 1",
  "99999-0001",
  "111.111.111-11",
  new Date("1990-03-15"),
  4500,
  "001"
);

const func2 = new Funcionario(
  "Bruno",
  "Rua B, 2",
  "99999-0002",
  "222.222.222-22",
  new Date("1985-07-22"),
  5000,
  "002"
);

const func3 = new Funcionario(
  "João",
  "Rua C, 7",
  "99999-0003",
  "333.333.333-33",
  new Date("1975-08-12"),
  7500,
  "003"
);
//console.log("Dados do Func1:\n" + func1.toString());

/*console.log(
  "Bonificação de Func2: R$ " +
    func2.bonificacao(20).toFixed(2)
);*/

/*console.log(
  "Total de funcionários:",
  Funcionario.qtFuncionarios
);*/

const vetFuncionarios: Array<Funcionario> = [ new Gerente('Carlos', 'Av. 1, 100', '99999-1001', '100.100.100-10',  new Date('1978-05-10'), 8000, '001', 'regional'), new Atendente('Diana', 'Rua 2, 50', '99999-2002', '200.200.200-20', new Date('1995-08-20'), 2800, '001', 'caixa'), new Gerente('Eduardo', 'Trav. 3, 30', '99999-3003', '300.300.300-30', new Date('1982-11-03'), 9500, '002', 'agência'), new Atendente('Fernanda', 'Bl. 4, 200', '99999-4004', '400.400.400-40', new Date('1998-02-14'), 2500, '002', 'pessoal'), new Gerente('Gabriel', 'Conj. 5, 10', '99999-5005', '500.500.500-50', new Date('1975-09-28'), 11000, '003', 'conta'), new Atendente('Helena', 'Res. 6, 5', '99999-6006', '600.600.600-60', new Date('2000-06-07'), 2600, '003', 'caixa'), new Gerente('Ivan', 'Pq. 7, 77', '99999-7007', '700.700.700-70', new Date('1980-12-01'), 10200, '004', 'regional'), new Atendente('Julia', 'Qd. 8, 8', '99999-8008', '800.800.800-80', new Date('1997-04-19'), 2700, '004', 'pessoal'), ];

//console.log('=== Lista de Funcionários ==='); vetFuncionarios.forEach(func => //console.log(func.toString()));

console.log('\n=== Bonificação automática (sem percentual) ==='); 
vetFuncionarios.forEach(func => { 
  if (func instanceof Gerente){ 
    console.log(`Gerente - ${func.nome} - ${func.nivel} - Bonificação: R$ ${func.bonificacao().toFixed(2)}`); 
  } else if (func instanceof Atendente){ 
    console.log(`Atendente - ${func.nome} - ${func.tipo} - Bonificação: R$ ${func.bonificacao().toFixed(2)}`); 
  } 
});

/*const cliente = new Cliente('Marcos', 'Av. 9, 900', '99999-9009', '900.900.900-90', new Date('1988-01-30'), 12345-6, 3500); 
vetFuncionarios.push(cliente);*/