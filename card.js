let paragrafo_numero = document.querySelector('#numero');

function criarElemento(tag, classe, conteudo){
    let _tag = document.createElement(tag)
    let _textNode = document.createTextNode(conteudo)

    _tag.classList.add(classe)
    _tag.appendChild(_textNode)

    return _tag
}

function criarCartao(pessoa){

    let cartao = document.createElement('div')
    cartao.classList.add("card","tamanho")

    let topo_cartao = criarElemento('div','card-header','')
    topo_cartao.classList.add('d-flex')
    let titulo = criarElemento('h5','card-title',pessoa.name)
   

    topo_cartao.appendChild(titulo)

    cartao.appendChild(topo_cartao)



    let corpo = document.createElement('ul')
    corpo.classList.add("list-group","list-group-flush")
    
    let li = criarElemento('li','list-group-item',pessoa.email)

    corpo.appendChild(li)
    cartao.appendChild(corpo)


    return cartao
}

    