let canal: string = 'Gaveta'
let inscritos: number = 890333

//canal = inscritos
console.log("Canal = " + canal)


//let nome: string = 'Pedro' //nao pode redeclarar no mesmo escopo

nome = 'Pedro'
console.log(`Nome = ${nome}`);

(function(){
    let nome: string = 'Ana'
})()

function saudar(isManha: boolean, horas: number): string {
    let a = 1
    let saudacao: string
    if(isManha){
        saudacao = 'Bom dia!'
    } else {
        saudacao = 'Tenha uma boa vida'
    }
    return saudacao
}

