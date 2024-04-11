let carrinho = []
const iconeCarinho = document.querySelector('.bolinha')
const carinhoIcone = document.querySelector('.carrinho')
const popCarrinho = document.querySelector('.pop-up__carrinho')

async function itemLivros() {
    listaItems = await document.querySelectorAll('.livro')
    listaItems.forEach(livro => {
        livro.addEventListener('click', () => {
            // carinho.push(livro.id)
            if (livro.getAttribute('data-quantidade') > 0) {
                carrinho.push(livro.children)
                iconeCarinho.classList.remove('disable')
            }
        })
    })
}

carinhoIcone.addEventListener('click', () => {
    if (popCarrinho.classList.length === 1 && popCarrinho.classList[1] === undefined) {
        popCarrinho.classList.add('disable')
    } else if (carrinho.length > 0 && popCarrinho.classList.length == 2) {

        const items = document.querySelector('.produtos__carrinho')
        const totalCarrinho = document.querySelector('.preco_carrinho')
        items.innerHTML = '';
        preco = []
        //[ "PostgreSQL: Banco de dados para aplicações web modernas", "Vinícius Carvalho", "R$62.93", "dados" ]
        carrinho.forEach(item => {
            itemPreco = item[3].textContent.split('R$')[1]

            items.innerHTML += `
                <div class="produto">
                    <img class="livro__imagens__carrinho" src="${item[0].getAttribute('src')}"
                    alt="${item[0].getAttribute('alt')}">
                    <h2 class="livro__titulo__carrinho">
                    ${item[1].textContent}
                    </h2>
                    <p class="livro__preco__carrinho" id="preco__carrinho">R$${itemPreco}</p>
                </div>
            `
            preco.push(itemPreco)
        })

        totalCarrinho.textContent = `R$${preco.reduce((acc, preco) => acc + parseFloat(preco), 0).toFixed(2)}`
        popCarrinho.classList.remove('disable')

    }


})

// window.addEventListener('click', () =>{
//     if (popCarrinho.classList[1] === undefined){
//         popCarrinho.classList.add('disable')
//     }
// })