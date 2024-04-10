const botoesCategoria = document.querySelectorAll('.btn')

botoesCategoria.forEach(botao => {
    botao.addEventListener('click', () => {
        let resultado = null
        if (botao.value) {
            resultado = livros.filter((livro) =>
                livro.categoria === botao.value
            )
        } else if (botao.classList[1] === 'btn-disponiveis') {
            resultado = livros.filter((livro) =>
                livro.quantidade > 0
            )
        } else if (botao.id == 'btnListaInicial') {
            init()
        } else {
            resultado = JSON.parse(JSON.stringify(livros)).sort((a, b) => {
                return a.preco - b.preco
            })
        }
        resultado && exibirLivros(resultado)
    })
})



function limparTela(listaLivros) {
    exibirLivros(listaLivros)
}