// let idade = 20;
// console.log(idade);
// let altura = 180;
// console.log(altura);


// let nome = 'Samuel'
// let altura = 180
// let peso = 75.5
// let nomeCompleto = 'Samuel lopes ribeiro'
// let instrumento = 'bateria'
// console.log(nome)
// console.log(altura)
// console.log(peso)
// console.log(nomeCompleto)
// console.log(instrumento)

// const igressoA = 20;
// console.log(ingressoA)


// let nome = "samu" //string, conjunto de caracteres
// let idade = 25 //armazena todos os tipos de número
// let estaAprovado = true //boolean constroe regras dentro do código
// let sobrenome = undefined ; //undefined, sem definição

// let pessoa = {
//     nome: 'Samu', //key value pair (uma chave que acessa o valor)
//     idade: 25,
//     estaAprovado: true,
//     sobrenome: 'de souza'
// };

// console.log(pessoa)

// let hora = 5
// diasPorSemana = 5

//  let treino = {
//     hora: 5,
//     diasPorSemana: 5,
//     instrumento: 'bateria',
//    treinoSemanal: hora * diasPorSemana
//  }

// console.log(treino)

// let familia = [true,45,50,'samu',17]
// console.log(familia.length)

// console.log(familia[0])

// let nomeDoColega = ['primo','campo mourão','paraná',18,'estudante',treino]

// console.log(nomeDoColega)

corSite = 'azul'

function resetaCor(cor,tonalidade){ // os () significam os parâmetros
    corSite =  cor + ' ' + tonalidade;       //argumentos oq fazer com os valores acima
}

console.log(corSite)
resetaCor('verde','claro')
console.log(corSite)


PlacaDevideo = 2060
Processador = 'i5 10400f'

function computador(placaDeVideo,Processador,placaMae){
    computador = placaDeVideo + " " + Processador + ' ' + placaMae
}

console.log(PlacaDevideo, Processador)
computador(4090, 'i9 13500f', 'HM810')
console.log(computador)

//1 tipos de função é a que não devolve nada 
function nome(){
    console.log('samu')
}

nome()
//faz um calculo ou operação e exibe um resultado 
function MultiplicarPorDois(valor){
    return valor*2
}
//console.log(MultiplicarPorDois(5))


let resultado = MultiplicarPorDois(5)

console.log(resultado)


