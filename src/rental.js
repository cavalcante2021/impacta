class RentalSystem {
    constructor() {
        this.carros = [];
    }

    adicionarCarro(carro) {
        this.carros.push(carro);
    }

    removerCarro(id) {
        this.carros = this.carros.filter(carro => carro.id !== id);
    }

    listarCarros() {
        return this.carros;
    }

    alugarCarro(id) {
        const carro = this.carros.find(carro => carro.id === id);
        if (!carro) {
            throw new Error(`Carro com ID ${id} não encontrado.`);
        }
        carro.alugar();
    }

    devolverCarro(id) {
        const carro = this.carros.find(carro => carro.id === id);
        if (!carro) {
            throw new Error(`Carro com ID ${id} não encontrado.`);
        }
        carro.devolver();
    }
}

module.exports = RentalSystem;