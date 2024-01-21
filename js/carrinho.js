console.log("Carrinho carregado!");

document.addEventListener('DOMContentLoaded', function () {

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
    
    const listaCarrinho = document.getElementById('lista-carrinho');
    carrinho.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.nome} - ${item.preco}€`;
      listaCarrinho.appendChild(li);
    });
  });