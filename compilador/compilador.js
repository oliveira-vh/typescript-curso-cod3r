"use strict";
let canal = 'Gaveta';
let inscritos = 890333;
//canal = inscritos
console.log("Canal = " + canal);
//let nome: string = 'Pedro' //nao pode redeclarar no mesmo escopo
nome = 'Pedro';
console.log(`Nome = ${nome}`);
(function () {
    let nome = 'Ana';
})();
function saudar(isManha, horas) {
    let a = 1;
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'Tenha uma boa vida';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map