let idade1 = 20;
console.log(idade1);
let altura1 = 180;
console.log(altura1);


let nome = 'Samuel'
let altura = 180
let peso = 75.5
let nomeCompleto = 'Samuel lopes ribeiro'
let instrumento = 'bateria'
console.log(nome)
console.log(altura)
console.log(peso)
console.log(nomeCompleto)
console.log(instrumento)

//valores inalterados
const ingressoA = 20;
console.log(ingressoA)


let nome1 = "samu" //string, conjunto de caracteres
let idade3 = 25 //armazena todos os tipos de número
let estaAprovado = true //boolean constroe regras dentro do código
let sobrenome = undefined ; //undefined, sem definição


//objeto
let pessoa = {
     nome1: 'Samu', //key value pair (uma chave que acessa o valor)
     idade3: 25,
     estaAprovado: true,
     sobrenome: 'de souza'
 };

console.log(pessoa)



let hora = 5
diasPorSemana = 5

  let treino = {
     pessoa: 'samuel',
     hora: 5,
     diasPorSemana: 5,
     instrumento: {
        bateria:{
            caixa: 'odery',
            cor: 'preta'
        },
        violao: {
            corda: 'nylon',
            madeira: 'refinada'
        }
     },
     treinoSemanal: hora * diasPorSemana,

     bichos: ['cachorro',"gato"],

    //   tocar: function(rudimento){
    //      alert(treino.pessoa+' treinou '+rudimento+' por '+treino.hora+' horas ')
    //   }
  }

 treino.hora = 10
 //treino.tocar("paradidle") 
 console.log(treino.treinoSemanal)
 console.log(treino)
 console.log(treino.instrumento.violao.madeira)
 console.log(treino.instrumento)
 console.log(treino.hora)
 console.log(treino.bichos[1])

 let familia = [true,45,50,'samu',17]
 console.log(familia.length)

 console.log(familia[0])

 let nomeDoColega = ['primo','campo mourão','paraná',18,'estudante',treino]

 console.log(nomeDoColega)

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
function nome4(){
    console.log('samu')
}

nome4()
//faz um calculo ou operação e exibe um resultado 
function MultiplicarPorDois(valor){
    return valor*2
}
//console.log(MultiplicarPorDois(5))


let resultado = MultiplicarPorDois(5)

console.log(resultado)


let salario = 100

console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(5 ** 5)


//incremento ++ 
//decremento --
let idade = 19
console.log(++idade)
console.log(--idade)


//operadores de atribuição

let valor = 10
//valor = valor + valor
valor += valor
console.log(valor)
//valor = valor - valor
valor -= valor
console.log(valor)

//operadores de igualdade
//compara os valores e tipo
console.log(1 === 1)
console.log("1" === 1)

//igualdade solta
//ignora os tipos e os converte em valores
console.log(1 == 1)
console.log("1" == 1)


//operador ternário
 let pontos = 200
 //se ponto > que 100 será(?) premium caso contrario(:) ele será comum
 let tipo = pontos > 100 ? 'premium' : 'comum'
 console.log(tipo)

 //operadores logicos
 //os operadores logicos são usados para decisão de multipla escolha
 //operador logico && retorna true se os dois operando forem true
console.log(true && true)
console.log(false && true)


let maiorDeIdade = true
let possuiCarteiraDeTrabalho = true
//let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho
console.log('pode aplicar: ',podeAplicar)

//operador logico ou (||)
//retornar true se um dos operandos forem true
//analisa apenas a primeira equação
//quando comparamos duas strings se o 1º valor estiver preenchido irá pass a msg true, pois é necessario que apenas um dos valores seja true


//operador NOT (!)
let candidatoResusado = !podeAplicar
console.log('candidato recusado: ',candidatoResusado)

//comparações não booleanas
//falsy
//undefined
//null
//0
//false
//''
//NaN  - not a number -

//truthy

let corPersonalizada = 'vermelho'
let corPadrao = 'Azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)


//if else

let hora2 = 22

if (hora2 > 6 && hora2 < 12){
    console.log('bom dia')

}
else if (hora2 > 12 && hora2 < 18){
    console.log('boa tarde')
}
else {
    console.log('boa noite')
}

//switch case

let permissao; //comum,gerente,diretor
permissao = 'gerente'
switch (permissao){
    case 'comum':
    console.log('usuario comum')
    break

    case 'gerente':
    console.log('usuario gerente')
    break

    
    case 'diretor':
    console.log('usuario diretor')
    break

    default: 
    console.log('User não reconhcido')
}



//for
//while
//do..while
//for..in
//for..of


//for
for(let i = 5;i >= 1;i--){
    if(i % 2 !== 0){
        console.log(i)
    }
}

for(let i = 1;i <= 5;i++){
    if(i % 2 !== 0){
        console.log('indice',i)
    }
}

//while
let i = 5

while (i >= 1) {
    if(i % 2 !== 0){
        console.log(i)
    }
    i--
}




let a = 1

while (a <= 10){
    if(b = 5 * a){
        console.log("tabuada",b)
    }
    a++
}


//do while
let i2 = 1
do{ 
    let b = 7 * i2
    console.log('digitando', b);
    i2++;
    
}while(i2 <= 10)


//for in
const pessoa2 = {
    nome: 'sam',
    idade2: 25
}

//key value
for(let key in pessoa2) {
    console.log(key,pessoa2.nome) 

}

const cores = ['vermelho', 'Azul', 'Verde']

for (let indice in cores){
    console.log(indice,cores[indice])
}

//for of
for(let cor of cores){
    console.log(cor)
}


//for of

const carros = ['camaro','bugati','feromonas']
for(let carro of carros){
    console.log(carro)
}


//escrea um função que usa dois numeros e retorne o maior entre eles



function trocaNumero(numero1,numero2){
        if(numero1 > numero2){
            console.log('o número maior é esse', numero1)
        }else{
            console.log('o número maior é esse',numero2)
        }
        
}

let a5 = trocaNumero(50,6)



//oto metodo

function max(numero1,numero2){
    return numero1>numero2 ? numero1:numero2
}

let valMax = max(50,6)
console.log(valMax)