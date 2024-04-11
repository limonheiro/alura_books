const elementoParaInserirLivros = document.getElementById('livros')

function exibirLivros(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = ""
    listaDeLivros.forEach((livro, ind) => {
        const disponibilidade = "livro__imagens" + (livro.quantidade <= 0? " indisponivel" : '')
        elementoParaInserirLivros.innerHTML += `
        <div class="livro" id="${ind}">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />

            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            
            <p class="livro__descricao">${livro.autor}</p>

            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>

            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })


}