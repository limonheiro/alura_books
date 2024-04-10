function aplicarDesconto(listaLivros){
    const desconto = 0.3;
    livrosDesconto = listaLivros.map( (livro) => {
        return {...livro, preco:livro.preco * (1-desconto)}
    })
    return livrosDesconto
}