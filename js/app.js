let totalGeral;
limpar();
document.getElementById('lista-produtos').innerHTML= ''; 
document.getElementById('valor-total').textContent= 'R$ 0'; 
function adicionar(){
    //  recuperar valores nome do produto, quantidade e valor que se pega do html
    let produto=document.getElementById('produto').value;
    let nomeProduto=produto.split('-')[0]; 
    let ValorUnitario=produto.split('R$')[1]; 
    let quantidade=document.getElementById('quantidade').value;
    // calcular o preco, o nosso subtotal 
    let preco= quantidade * ValorUnitario;
    // adicionar no carrinho 
    let carrinho=document.getElementById('lista-produtos');
    // adicionar no html e pega-se a section 
    carrinho.innerHTML=carrinho.innerHTML +  `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
  </section>`;
    // atualizar o valor total
    totalGeral= totalGeral+ preco; 
    let campoTotal= document.getElementById('valor-total');
    campoTotal.textContent=`${totalGeral}`;
    document.getElementById('quantidade').value=0;
}

function limpar(){
     totalGeral=0;
    document.getElementById('lista-produtos').innerHTML= ''; 
    document.getElementById('valor-total').textContent= 'R$ 0'; 

}