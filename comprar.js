var produtos = [
    {
        id: 1,
        nome: "intel core i9",
        produtora: "intel",
        imagem: "img/intel-core-i9.jpg",
        preco: 549.99,
        descricao: "Intel core i9-14900T",
        
    }
]

function comprar(idP) {
    var produtSelect = produtos.find(produto => produto.id === idP);
    var novoDoc = document.implementation.createHTMLDocument();
    var htmlElement = novoDoc.documentElement;

    htmlElement.innerHTML = `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comprar</title>
    <link rel="stylesheet" href="css/compra.css">
    <link rel="stylesheet" href="./css/slide.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/barraNav.css">
</head>
<body>
    <nav class="barra2">
        <div class="barra2infos">
            <a href="index.html"><img src="img/house-window-svgrepo-com.svg" alt="index"></a>
            <a class="infosfont" href="componentes.html">componentes</a>
            <a class="infosfont" href="">computador pré montado</a>
            <a class="infosfont" href="">tabletes</a>
            <a class="infosfont" href="">monitores</a>
            <a class="infosfont" href="acessorios.html">acessorios</a>
            <a class="infosfont" href="">casa inteligente</a>
            <a class="infosfont" href="">Serviço</a>
            <a href="carrinho.html"><img src="img/cart.svg" alt="Carrinho"></a>
            <a href="Login.html"><img src="img/userIcon.svg" alt="Login"></a>
        </div>
    </nav>
    <div class="mucho_texto">
        <div class="titular">
            <div class="primeira_linha">
              <div class="lado_esquerdo">
                <p class="Nome_produto">${produtSelect.nome}</p>
                <img class="limites" src="${produtSelect.imagem}" alt="jpg">
                <p class="Nome_produtor">${produtSelect.produtora}</p>
              </div>
              <div class="lado_direito">
                <p></p>
                <p></p>
                <div class="preço">${produtSelect.preco}€</div>
                <p></p>
                <div class="combo">
                  <div class="adicionar_carrinho">adicionar ao carrinho</div>
                  <div class="comprar">comprar</div>
                </div>
                <div class="descricao">
                  <div>Descrição</div>
                  <div class="texto_descricao">${produtSelect.descricao}</div>
                </div>
            </div>
            </div>
        </div>
    </div>
</body>
</html>`;

    var htmlcriar = novoDoc.documentElement.outerHTML;

    var novaPag = window.open();
    novaPag.document.write(htmlcriar);
}