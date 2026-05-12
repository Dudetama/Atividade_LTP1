const prompt = require('prompt-sync')();

const livros = [];

let opcao = 0;

while (opcao !== 5) { 
    console.log("BIBLIOTECA");
    console.log("1 Cadastrar livro, 2 Listar livros, 3 Alterar livro, 4 Estatísticas, 5 Sair");
    opcao = parseInt(prompt("Opção: "));

    if ((opcao)) { 
        console.log("Digite um número válido!");
    }

    switch (opcao) {

        case 5:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida!");
    }
}

          if (livros.length == 0) {
        console.log("Nenhum livro cadastrado.");
      } else {
    livros.forEach((livro, indice) => {
        console.log(
            `${indice}: ${livro.titulo}, ${livro.autor} (${livro.anoPub})` // Corrigida sintaxe ${}
        );
    });
 }
