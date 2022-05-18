import pegaArquivo from "..";

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegaArquivo('C:\Users\carlos.goncalves\Documents\alura\lib-markdown\test\arquivos\texto1.md')
        expect(pegaArquivo(resultado).toEqual(arrayResult))
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('C:\Users\carlos.goncalves\Documents\alura\lib-markdown\test\arquivos\texto1_semlinks.md')
        expect(resultado).toBe('não há links');
    })
})
