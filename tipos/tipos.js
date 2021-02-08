"use strict";
//string
let nome = 'Fulano';
console.log(nome);
//nome = 21 //tipos inferidos mesmo quando não tipados
//numbers
let idade = 27;
//idade = 'Ana'
idade = 27.8;
console.log(idade);
//boolean
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = '27'
//array
let hobbies = ['cozinhar', 'esportes'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200];
//hobbies = 100
console.log(hobbies);
//tuplas
let endereco = ["Av Prncipal", 89, "Apt A"];
console.log(endereco);
endereco = ["Av B", 23, 'B'];
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 13] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Laranja);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//funcoes
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('oi');
    //return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
//console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(3.7, 3));
//tipo funçao
let calculo;
//calculo = digaOi
//calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
//objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'ponto normal';
        }
        else {
            return 'fora do horario';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'ponto normal';
        }
        else {
            return 'fora do horario';
        }
    }
};
//union types
let nota = 10;
console.log(`MInha nota é ${nota}`);
nota = '10';
console.log(`MInha nota é ${nota}`);
//never
function falha(msg) {
    throw new Error(msg);
}
//null
let altura = 12;
//altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato = {
    nome: 'Fulano',
    tel1: '9292929',
    tel2: null
};
//# sourceMappingURL=tipos.js.map