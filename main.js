const prompt = require('prompt-sync');

const livros = [];

let opcao = 0;

while (opcao !== 0) {
    console.log("BIBLIOTECA");
    console.log("1 Cadastrar livro, 2 Listar livros, 3 Alterar livro,4 Estatísticas, 5 Sair");
    opcao = parseInt(prompt("Opção: "));

    if (opcao) {
        console.log("Digite um número válido!");
    }

    switch (opcao) {

        case 0:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida!");
    }
}