const RentalSystem = require('../src/rental');
const Carro = require('../src/car');

describe('RentalSystem', () => {
    let rentalSystem;
    let carro1, carro2;

    beforeEach(() => {
        rentalSystem = new RentalSystem();
        carro1 = new Carro(1, 'ModeloX', 'MarcaY', 2020);
        carro2 = new Carro(2, 'ModeloZ', 'MarcaW', 2022);
        rentalSystem.adicionarCarro(carro1);
        rentalSystem.adicionarCarro(carro2);
    });

    it('deve adicionar um carro', () => {
        const carro3 = new Carro(3, 'ModeloA', 'MarcaB', 2023);
        rentalSystem.adicionarCarro(carro3);
        expect(rentalSystem.listarCarros().length).toBe(3);
    });

    it('deve remover um carro', () => {
        rentalSystem.removerCarro(1);
        expect(rentalSystem.listarCarros().length).toBe(1);
        expect(rentalSystem.listarCarros()[0].id).toBe(2);
    });

    it('deve listar todos os carros', () => {
        const carros = rentalSystem.listarCarros();
        expect(carros).toEqual([
            { id: 1, modelo: 'ModeloX', marca: 'MarcaY', ano: 2020, disponivel: true },
            { id: 2, modelo: 'ModeloZ', marca: 'MarcaW', ano: 2022, disponivel: true }
        ]);
    });

    it('deve alugar um carro disponível', () => {
        rentalSystem.alugarCarro(1);
        expect(carro1.disponivel).toBe(false);
    });

    it('não deve alugar um carro não encontrado', () => {
        expect(() => rentalSystem.alugarCarro(3)).toThrow("Carro com ID 3 não encontrado.");
    });

    it('deve devolver um carro alugado', () => {
        rentalSystem.alugarCarro(1);
        rentalSystem.devolverCarro(1);
        expect(carro1.disponivel).toBe(true);
    });

    it('não deve devolver um carro não encontrado', () => {
        expect(() => rentalSystem.devolverCarro(3)).toThrow("Carro com ID 3 não encontrado.");
    });

    it('deve alugar e devolver um carro com sucesso', () => {
        rentalSystem.alugarCarro(1);
        expect(carro1.disponivel).toBe(false);

        rentalSystem.devolverCarro(1);
        expect(carro1.disponivel).toBe(true);
    });
});