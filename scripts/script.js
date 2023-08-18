const openPopupButton = document.getElementById('openPopupButton');
const popupOverlay = document.getElementById('popupOverlay');
const openSubPopupButton = document.getElementById('openSubPopupButton');
const subPopupOverlay = document.getElementById('subPopupOverlay');
const closePopupButton = document.getElementById('closePopupButton');
const closeSubPopupButton = document.getElementById('closeSubPopupButton');

openPopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'block';
});

openSubPopupButton.addEventListener('click', () => {
    subPopupOverlay.style.display = 'block';
});

closePopupButton.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

closeSubPopupButton.addEventListener('click', () => {
    subPopupOverlay.style.display = 'none';
});

subPopupOverlay.addEventListener('click', (event) => {
    if (event.target === subPopupOverlay) {
        subPopupOverlay.style.display = 'none';
    }
});


class Produto {
    constructor(nome, valor, quantidade) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
    }
}

const produtos = [];

const AddProduct = document.getElementById('addToList');

AddProduct.addEventListener('click', () => {
    const nomeProduto = document.getElementById('productName').value;
    const valorProduto = document.getElementById('productValue').value;
    const quantidadeProduto = document.getElementById('productQtd').value;

    const novoProduto = new Produto(nomeProduto, valorProduto, quantidadeProduto);

    produtos.push(novoProduto);

    atualizarLista();
});

function atualizarLista() {
    const ulElement = document.querySelector("#productOnList ul");

    const novoProduto = produtos[produtos.length - 1]; // Pega o último produto adicionado

    const liElement = document.createElement("li");
    const h4Element = document.createElement("h4");
    h4Element.textContent = `${novoProduto.nome}, R$${novoProduto.valor}, qtd: ${novoProduto.quantidade}`;
    liElement.appendChild(h4Element);
    ulElement.appendChild(liElement);
}




