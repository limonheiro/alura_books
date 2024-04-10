let livros = []
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const total = document.getElementById('valor')

getBuscarLivros()

async function getBuscarLivros() {
    const res = await fetch(endpointApi)
    listaLivros = await res.json()
    let livrosDesconto = await aplicarDesconto(listaLivros)
    return livrosDesconto
}

async function init() {
    livros = await getBuscarLivros()
    exibirLivros(livros)
    total.innerText = somarLivros()
}

function somarLivros() {
    const total = livros.reduce((total, livro) =>
        total + livro.preco
        , 0)
    return total.toFixed(2)
}

init()

