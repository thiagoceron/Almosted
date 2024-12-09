import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const produtos = [
  {
    nome: "T-SHIRT OVERSIZED - BRANCA",
    preco: "R$ 149,90",
    novopreco: "R$ 99,90 no PIX",
    imagem: "/assets/camisetaBranca-removebg-preview.png",
    descricao: "A T-shirt Oversized Branca é a escolha perfeita para quem busca conforto e estilo.",
    tamanho: ["S", "M", "L", "XL"],
    tabelaMedidas: "/assets/tabelamedidasoversized-removebg-preview.png",
  },
  {
    nome: "T-SHIRT OVERSIZED - PRETO",
    preco: "R$ 149,90",
    novopreco: "R$ 99,90 no PIX",
    imagem: "/assets/camisetaPreta-removebg-preview.png",
    descricao: "A T-shirt Oversized Preta combina com qualquer visual, um clássico moderno.",
    tamanho: ["S", "M", "L", "XL"],
    tabelaMedidas: "/assets/tabelamedidasoversized-removebg-preview.png",
  },
  {
    nome: "T-SHIRT OVERSIZED - BEGE",
    preco: "R$ 149,90",
    novopreco: "R$ 99,90 no PIX",
    imagem: "/assets/camisetaBege-removebg-preview.png",
    descricao: "A T-shirt Oversized Bege adiciona sofisticação e leveza ao seu look casual.",
    tamanho: ["S", "M", "L", "XL"],
    tabelaMedidas: "/assets/tabelamedidasoversized-removebg-preview.png",
  },
  {
    nome: "T-SHIRT OVERSIZED - VERMELHO",
    preco: "R$ 149,90",
    novopreco: "R$ 99,90 no PIX",
    imagem: "/assets/camisetaVermelha-removebg-preview.png",
    descricao: "A T-shirt Oversized Vermelha traz um toque vibrante e ousado ao seu guarda-roupa.",
    tamanho: ["S", "M", "L", "XL"],
    tabelaMedidas: "/assets/tabelamedidasoversized-removebg-preview.png",
  },
  {
    nome: "T-SHIRT OVERSIZED - MARROM",
    preco: "R$ 149,90",
    novopreco: "R$ 99,90 no PIX",
    imagem: "/assets/camisetaMarrom-removebg-preview.png",
    descricao: "A T-shirt Oversized Marrom é versátil e perfeita para looks descontraídos.",
    tamanho: ["S", "M", "L", "XL"],
    tabelaMedidas: "/assets/tabelamedidasoversized-removebg-preview.png",
  },
  {
    nome: "T-SHIRT OVERSIZED - VERDE",
    preco: "R$ 149,90",
    novopreco: "R$ 99,90 no PIX",
    imagem: "/assets/camisetaVerde-removebg-preview.png",
    descricao: "A T-shirt Oversized Verde é ideal para quem procura um estilo mais natural e relaxante.",
    tamanho: ["S", "M", "L", "XL"],
    tabelaMedidas: "/assets/tabelamedidasoversized-removebg-preview.png",
  },
];

const Roupas = () => {
  const { nomeProduto } = useParams();
  const [modalAberto, setModalAberto] = useState(false); // Estado para controlar o modal

  const produto = produtos.find(
    (p) =>
      p.nome.toLowerCase().replace(/\s/g, '-') === nomeProduto.toLowerCase().replace(/\s/g, '-')
  );

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <main className="container my-5">
      <div className="row">
        {/* Imagens do Produto */}
        <div className="col-md-6">
          <div className="product-images">
            <div className="main-image mb-3">
              <img src={produto.imagem} alt={produto.nome} className="img-fluid border" />
            </div>
          </div>
        </div>

        {/* Detalhes do Produto */}
        <div className="col-md-6">
          <h2>{produto.nome}</h2>
          <p>{produto.descricao}</p>
          <p>
            <strong>Preço: </strong>
            {produto.preco}
          </p>
          <p>
            <strong>Oferta: </strong>
            {produto.novopreco}
          </p>
          <p>
            <strong>Tamanhos:</strong>
          </p>
          <div className="sizes mb-3">
            {produto.tamanho.map((tamanho, index) => (
              <button key={index} className="btn btn-outline-secondary">
                {tamanho}
              </button>
            ))}
          </div>

          {/* Botões Comprar e Tabela de Medidas */}
          <div className="product-buttons d-flex flex-column">
            {/* Botão Comprar */}
            <button className="btn btn-custom btn-lg mb-3">
              COMPRAR
            </button>

            {/* Botão Tabela de Medidas */}
            <button
              className="btn btn-outline-secondary btn-lg"
              onClick={() => setModalAberto(true)}
            >
              Tabela de Medidas
            </button>
          </div>
        </div>
      </div>

      {/* Modal para Tabela de Medidas */}
      {modalAberto && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Tabela de Medidas</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setModalAberto(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={produto.tabelaMedidas}
                  alt="Tabela de Medidas"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Roupas;


