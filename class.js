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
