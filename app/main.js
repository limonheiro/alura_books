let livros = []
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const total = document.getElementById('valor')

let listaItems = []

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
    total.innerText = somarLivros(livros)
    await itemLivros()
}

function somarLivros(listaLivros) {
    listaLivros = livrosDisponiveis(listaLivros)
    const total = listaLivros.reduce((total, livro) =>
        total + livro.preco
        , 0)
    return total.toFixed(2)
}

init()

