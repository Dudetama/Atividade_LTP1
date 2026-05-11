const prompt = require('prompt-sync')();

const livros = [];

let opcao = -1;

while (opcao !== 0) {
    console.log("\nBIBLIOTECA");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar livros");
    console.log("3 - Alterar livro");
    console.log("4 - Estatísticas");
    console.log("0 - Sair");

    opcao = parseInt(prompt("Opção: "));

    if (isNaN(opcao)) {
        console.log("Digite um número válido!");
        continue;
    }

    switch (opcao) {
        case 0:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida!");
    }
}