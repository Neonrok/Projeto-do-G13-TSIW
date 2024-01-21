var produtos = [
    {
        id: 1,
        nome: "intel core i9",
        produtora: "intel",
        imagem: "img/intel-core-i9.jpg",
        preco: 549.99,
        descricao: "Intel core i9-14900T",
        
    },
    {
        id: 2,
        nome: "processador AMD Ryzen7",
        produtora: "AMD",
        imagem: "./img/AMD-Second-gen-Ryzen-7-Box-2882446336.jpg",
        preco: 549.99,
        descricao: "Intel core i9-14900T",
        
    },
    {
        id: 3,
        nome: "memoria ram Furry ddr4  ",
        produtora: "Furry",
        imagem: "./img/1464191947295-29418818_3256-520390453.jpg",
        preco: 39.99,
        descricao: "8gb",
        
    },
    {
        id: 4,
        nome: "memoria ram Furry ddr5  ",
        produtora: "Furry",
        imagem: "./img/memoria-ddr5-gskill-trident-z5-rgb-32gb-2x16gb-5200mhz-black-f5-5200j4040a16gx2-tz5rk_150894-3203037743.png",
        preco: 89.99,
        descricao: "8gb",
    },
    {
        id: 5,
        nome: "cooler master",
        produtora: "master",
        imagem: "./img/cooler master.jpg",
        preco: 49.99,
        descricao: "cooler",
    },
    {
        id: 6,
        nome: "water cooler master",
        produtora: "master",
        imagem: "./img/water cooler master.jpeg",
        preco: 99.99,
        descricao: "water cooler",
    },
    {
        id: 7,
        nome: "rog-strix-b360-gaming",
        produtora: "asus",
        imagem: "./img/placa-mae-asus-rog-strix-b360-g-gaming-ddr4-lga-1151_49970-814717229.jpg",
        preco: 249.99,
        descricao: "suporte ddr4",
    },
    {
        id: 8,
        nome: "aorus-elite-chipset-b450",
        produtora: "gigabyte",
        imagem: "./img/placa-mae-gigabyte-b450m-aorus-elite-chipset-b450-amd-am4-matx-ddr4-9mb45maet-00-10_99883-3178295049.png",
        preco: 249.99,
        descricao: "suporte ddr4",
    },
    {
        id: 9,
        nome: "Asus-EX-A320M-Gaming",
        produtora: "asus",
        imagem: "./img/Placa-Mãe-Asus-EX-A320M-Gaming-4-1-3015393452.jpg",
        preco: 249.99,
        descricao: "suporte ddr4",
    },
    {
        id: 10,
        nome: "ROG-Evangelion-Motherboard-ROG-Z690-HERO-_5",
        produtora: "asus",
        imagem: "./img/ASUS-ROG-Evangelion-Motherboard-ROG-Z690-HERO-_5-low_res-scale-4_00x-1077x1480-1240369794.jpg",
        preco: 249.99,
        descricao: "suporte ddr4",
    },
    {
        id: 11,
        nome: "fonte-400w-pcyes-spark",
        produtora: "pcyes",
        imagem: "./img/fonte-400w-pcyes-spark-pxsp400wpt-1584129590581_1000x1000+fill_ffffff-3922395786.jpg",
        preco: 99.99,
        descricao: "É de 400w",
    },
    {
        id: 12,
        nome: "fonte-gamemax-800w",
        produtora: "gamemax",
        imagem: "./img/988910_fonte-gamemax-800w-gm800-bk-80-plus-bronze-gm800r2a16c0047nac006984_z1_637249797040702586-662522734.jpg",
        preco: 149.99,
        descricao: "É de 800w",
    },
    {
        id: 13,
        nome: "rtx3080",
        produtora: "NVidia",
        imagem: "./img/rtx3080.jpg",
        preco: 400.00,
        descricao: "rtx3080",
    },
    {
        id: 14,
        nome: "amd-radeon-vii-gaming-graphics",
        produtora: "amd",
        imagem: "./img/amd-radeon-vii-gaming-graphics-card-01-387065371.jpg",
        preco: 400.00,
        descricao: "amd-radeon-vii-gaming-graphics",
    },
    {
        id: 15,
        nome: "RTX-4090",
        produtora: "NVidia",
        imagem: "./img/NVIDIA-GeForce-RTX-4090-Graphics-Card-Official-1-HD-1480x833-1698985475.jpg",
        preco: 800.00,
        descricao: "RTX-4090",
    },
    {
        id: 16,
        nome: "ssd externo",
        produtora: "sangsung",
        imagem: "./img/ssd externo sangsung 1T.jpg",
        preco: 200.00,
        descricao: "É de 1T",
    },
    {
        id: 17,
        nome: "SSD interno",
        produtora: "Western Digital",
        imagem: "./img/Disco sólido SSD interno Western Digital WD Black SN750 WDS200T3X0C 2TB.jpg",
        preco: 249.99,
        descricao: "É de 2T",
    }

    
]

function comprar(idP) {
    var produtSelect = produtos.find(produto => produto.id === parseInt(idP));
    var novoDoc = document.implementation.createHTMLDocument();
    var criar_pagina = novoDoc.documentElement;

    criar_pagina.innerHTML = `
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
                  <button class="adicionar_carrinho" onclick="adicionarAoCarrinho(${produtSelect.id})">adicionar ao carrinho</button>
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
