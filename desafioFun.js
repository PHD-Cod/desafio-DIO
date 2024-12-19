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

