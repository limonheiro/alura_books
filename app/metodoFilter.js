const botoesCategoria = document.querySelectorAll('.btn')

function livrosDisponiveis(listaLivros) {
    const res = listaLivros.filter((livro) =>
        livro.quantidade > 0
    )
    return res
}
botoesCategoria.forEach(botao => {
    botao.addEventListener('click', () => {
        let resultado = null
        if (botao.value) {
            resultado = livros.filter((livro) =>
                livro.categoria === botao.value
            )   
        } else if (botao.classList[1] === 'btn-disponiveis') {
            resultado = livrosDisponiveis()
        } else if (botao.id == 'btnListaInicial') {
            init()
        } else {
            resultado = JSON.parse(JSON.stringify(livros)).sort((a, b) => {
                return a.preco - b.preco
            })
        }
         if (resultado){ 
            exibirLivros(resultado)
            total.innerText = somarLivros(resultado)
        }
    })
})



function limparTela(listaLivros) {
    exibirLivros(listaLivros)
}