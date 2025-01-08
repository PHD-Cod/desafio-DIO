//DESAFIO 1

let victory = 82
let declive = 50

function result(victory, declive) {
    let saldo = victory - declive
    return saldo
    }

let rank = result(82, 50)

console.log("Número de vitórias: " + victory)
console.log("Número de derrotas: " + declive)

let classificacao

switch (true){
    case victory <= 10:
    classificacao = "Ferro"
    break
    case victory <= 20:
    classificacao = "Bronze"
    break
    case victory <= 50:
    classificacao = "Prata"
    break
    case victory <= 80:
    classificacao = "Ouro"
    break
    case victory <= 90:
    classificacao = "Diamante"
    break
    case victory <= 100:
    classificacao = "Lendário"
    break
    case victory >= 101:
    classificacao = "Imortal"
}

console.log("O herói tem saldo de " + rank + ", e sua classificação atual na rankeada é " + classificacao + "!")

//DESAFIO 2

// Entrada
const nome = "Se identifique..."
console.log(nome)

const bemVindo = "Seja bem vindo senhor "
let nomeHeroi = "Karatos"

console.log(bemVindo + nomeHeroi)

const notificacao = "Parábens você subiu de nível para o "
const boss = 100
let xp = 3000
let nivel;

switch (true){
    case xp <= 1000:
    nivel = "Ferro"
    break
    case xp <= 2000:
    nivel = "Bronze"
    break
    case xp <= 6000:
    nivel = "Prata"
    break
    case xp <= 7000:
    nivel = "Ouro"
    break
    case xp <= 8000:
    nivel = "Platina"
    break
    case xp <= 9000:
    nivel = "Ascendente"
    break
    case xp <= 10000:
    nivel = "Imortal"
    break
    
    default:
        nivel = "Radiante"
}

const levelAtual = "O Herói de nome " + nomeHeroi + " está no nível " + nivel

console.log (levelAtual)

console.log(notificacao + nivel)

for (let contador = 25; contador <= 100; contador++){
    console.log("Recuperou " + contador + " de vida.")
}


//FUNÇÃO

torrar("com pão de forma")
torrar("com pão francês")

function torrar(pao) {
    console.log("fiz torrada com " + pao)
}


//2

let resultado = soma (5, 10)

function soma(numA, numB) {
    let somatorio = numA + numB
    return somatorio
    }

    console.log ("sendo assim o valor de resultado é " + resultado)

    //classe

    class heroi { 
        constructor(nome, idade, tipo){ 
            this.nome = nome
            this.idade = idade
            this.tipo = tipo
            this.arma = this.determinarArma()
        }
    
        determinarArma() {
            switch (this.tipo) {
                case "guerreiro":
                    return "espada";
                case "mago":
                    return "magia";
                case "monge":
                    return "artes marciais";
                case "ninja":
                    return "shuriken";
                default:
                    return "desconhecida";
        }
    }
    
    escrever (){
        console.log(`O ${this.tipo} atacou usando ${this.arma}`)
        }
    }
    
    
    let gameHeroi = new heroi ("Karatos", 29, "guerreiro")
    
    gameHeroi.escrever()
    