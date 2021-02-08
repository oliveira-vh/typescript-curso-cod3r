//string
let nome: string = 'Fulano'
console.log(nome)
//nome = 21 //tipos inferidos mesmo quando não tipados


//numbers
let idade: number = 27
//idade = 'Ana'
idade = 27.8
console.log(idade)

//boolean
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)

//tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = '27'

//array
let hobbies: any[] = ['cozinhar', 'esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200]
//hobbies = 100
console.log(hobbies)

//tuplas
let endereco: [string, number, string] = ["Av Prncipal", 89, "Apt A"]
console.log(endereco)

endereco = ["Av B", 23, 'B']

//enums
enum Cor{
    Cinza,
    Verde = 100,
    Azul = 10,
    Laranja,
    Amarelo,
    Vermelho
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Laranja)

//any

let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

//funcoes
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void{
    console.log('oi')
    //return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA*numB
}

//console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(3.7, 3))

//tipo funçao
let calculo: (numeroA: number, numeroB: number) => number
//calculo = digaOi
//calculo()

calculo = multiplicar
console.log(calculo(5,6))

//objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)

usuario = {
    idade: 31,
    nome: 'Maria'
}
console.log(usuario)

//desafio

//Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8){
            return 'ponto normal'
        } else {
            return 'fora do horario'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

let funcionario2: Funcionario = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario: number): string {
        if(horario <= 8){
            return 'ponto normal'
        } else {
            return 'fora do horario'
        }
    }
}

//union types
let nota: number | string = 10
console.log(`MInha nota é ${nota}`)
nota = '10'
console.log(`MInha nota é ${nota}`)

//never
function falha(msg: string): never {
    throw new Error(msg)
}

//null
let altura = 12
//altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato: Contato = {
    nome: 'Fulano',
    tel1: '9292929',
    tel2: null
}

