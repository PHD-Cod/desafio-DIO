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
