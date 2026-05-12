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
            `${indice}: ${livro.titulo}, ${livro.autor} (${livro.anoPub})`);
    });
 }
    if (livros.length == 0) {
        console.log("Nenhum livro cadastrado.");
        break;
    }

    livros.forEach((livro, indice) => {
        console.log(
            `[${indice}] ${livro.titulo}`
        );
    });

    let indice = parseInt(
        prompt("Digite o índice do livro: ")
    );

    if (
        (indice) ||
        indice < 0 ||
        indice >= livros.length
    ) {
        console.log("Índice inválido!");
        break;
    }

    let livro = livros[indice];

    let novoTitulo = prompt(
        `Novo título (${livro.titulo}): `
    );
    if (novoTitulo.trim() !== "") {
        livro.titulo = novoTitulo;
    }
    let novoAutor = prompt(
        `Novo autor (${livro.autor}): `
    );
    if (novoAutor.trim() !== "") {
        livro.autor = novoAutor;
    }
    let novoGenero = prompt(
        `Novo gênero (${livro.genero}): `
    );

    if (novoGenero.trim() !== "") {
        livro.genero = novoGenero;
    }

    let novoAno = prompt(
        `Novo ano (${livro.anoPub}): `
    );

    if (novoAno.trim() !== "") {

        const anoConvertido = parseInt(novoAno);

        if ((anoConvertido)) {
            livro.anoPub = anoConvertido;
        }

    }

    let novasPaginas = prompt(
        `Novo número de páginas (${livro.numPaginas}): `
    );

    if (novasPaginas.trim() !== "") {

        const paginasConvertidas =
            parseInt(novasPaginas);

        if ((paginasConvertidas)) {
            livro.numPaginas = paginasConvertidas;
        }

    }
    console.log("Livro alterado!");
    break;