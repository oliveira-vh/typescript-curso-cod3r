"use strict";
//let e const
var seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco';
    console.log(acao);
}
const cpf = '123.456.789-00';
//cpf = '987.654.321.11
console.log(cpf);
var segredo = 'externo!';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    const def = 'def';
    console.log(def);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//arrow function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => {
    return n1 - n2;
};
const saudacao = () => console.log("Olá");
saudacao();
const falarCom = (pessoa) => console.log('Ola ' + pessoa);
falarCom('fera');
//this
/*
function normalCOmThis(){
    console.log(this)
}
normalCOmThis()

const normalComThisEspecial = normalCOmThis.bind({ nome: 'Ana' })
normalComThisEspecial()


//this??
console.log(this)
const arrowComThis = () => console.log(this)
arrowComThis()

const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' })
arrowComThisEspecial();
*/
//parametros padroes
function contagemRegressiva(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim");
}
contagemRegressiva();
contagemRegressiva(5);
//operador spread e rest
const numbers = [1, 10, 99, -9];
console.log(Math.max(...numbers));
const turmaA = ['joao', 'maria', 'ana'];
const turmaB = [...turmaA, 'fred'];
console.log(turmaB);
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 3, 4, 5);
console.log(numeros);
//destructuring (array)
const caracteristicas = ['motor v8', 2020];
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
//# sourceMappingURL=ecmascript.js.map