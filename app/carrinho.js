let carinho = []
const iconeCarinho = document.querySelector('.bolinha')
const carinhoIcone = document.querySelector('.carrinho')
const popCarrinho = document.querySelector('.pop-up__carrinho')

async function itemLivros() {
    listaItems = await document.querySelectorAll('.livro')
    listaItems.forEach(livro => {
        livro.addEventListener('click', () => {
            carinho.push(livro.id)
            iconeCarinho.classList.remove('disable')
        })
    })
}

carinhoIcone.addEventListener('click', () => {
    console.log(popCarrinho.classList.length === 1)

    if (popCarrinho.classList.length === 1 && popCarrinho.classList[1] === undefined) {
        popCarrinho.classList.add('disable')
    } else if (carinho.length > 0 && popCarrinho.classList.length == 2) {
        //const elementosSelecionados = indices.map(index => elementos[index]);
        const listaCarrinho = carinho.map(index => livros[index])
        const items = document.querySelector('.produtos__carrinho')
        const totalCarrinho = document.querySelector('.preco_carrinho')
        listaCarrinho.forEach(item => {
            items.innerHTML += `
                <div class="produto">
                    <img class="livro__imagens__carrinho" src="${item.imagem}"
                    alt="${item.alt}">
                    <h2 class="livro__titulo__carrinho">
                    ${item.titulo}
                    </h2>
                    <p class="livro__preco__carrinho" id="preco__carrinho">R$${item.preco.toFixed(2)}</p>
                </div>
            `
        })

        totalCarrinho.textContent = `R$${somarLivros(listaCarrinho)}`
        console.table(listaCarrinho)
        popCarrinho.classList.remove('disable')
    }


})

// window.addEventListener('click', () =>{
//     if (popCarrinho.classList[1] === undefined){
//         popCarrinho.classList.add('disable')
//     }
// })