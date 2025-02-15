class Carro {
    constructor(id, modelo, marca, ano, disponivel = true) {
        this.id = id;
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.disponivel = disponivel;
    }

    alugar() {
        if (!this.disponivel) {
            throw new Error("Carro já está alugado.");
        }
        this.disponivel = false;
    }

    devolver() {
        if (this.disponivel) {
            throw new Error("Carro está disponível.");
        }
        this.disponivel = true;
    }
}

module.exports = Carro;