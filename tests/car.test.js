const Carro = require('../src/car');

describe('Carro', () => {
    let carro;

    beforeEach(() => {
        carro = new Carro(1, 'ModeloX', 'MarcaY', 2020);
    });

    it('deve criar um carro com as propriedades corretas', () => {
        expect(carro.id).toBe(1);
        expect(carro.modelo).toBe('ModeloX');
        expect(carro.marca).toBe('MarcaY');
        expect(carro.ano).toBe(2020);
        expect(carro.disponivel).toBe(true);
    });

    it('deve alugar um carro disponível', () => {
        expect(carro.disponivel).toBe(true);
        carro.alugar();
        expect(carro.disponivel).toBe(false);
    });

    it('não deve alugar um carro já alugado', () => {
        carro.disponivel = false;
        expect(() => carro.alugar()).toThrow("Carro já está alugado.");
    });

    it('deve devolver um carro alugado', () => {
        carro.disponivel = false;
        expect(carro.disponivel).toBe(false);
        carro.devolver();
        expect(carro.disponivel).toBe(true);
    });

    it('não deve devolver um carro já disponível', () => {
        expect(() => carro.devolver()).toThrow("Carro está disponível.");
    });
});