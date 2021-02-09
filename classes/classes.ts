class Data {
    //publico por padrao
    public dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(12, 10, 1999)
console.log(aniversario)
aniversario.dia = 5
console.log(aniversario.dia)

const casamento = new Data
casamento.ano = 1978
console.log(casamento)

class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970){
        
    }
}

const aniversarioEsperto = new DataEsperta(12, 10, 1999)
console.log(aniversarioEsperto)
aniversarioEsperto.dia = 5
console.log(aniversarioEsperto.dia)

const casamentoEsperto = new DataEsperta
casamentoEsperto.ano = 1978
console.log(casamentoEsperto)

//desafio

class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0){

    }

    public resumo(): string {
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% OFF)`
    }

}

const prod1 = new Produto('Bic', 4.5)
prod1.desconto = 0.09

const prod2 = new Produto('Caderno', 18, 0.12)

console.log(prod2.resumo())

class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200){
        
    }

    protected alterarVelocidade(delta: number): number{
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 186)

Array(30).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(20).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number){
        super('Ferrari', modelo, velocidadeMaxima)
    }
    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())


//getters and setters

class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number){
        if(valor >= 0 && valor < 120){
            this._idade = valor
        }
    }
}


const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)

