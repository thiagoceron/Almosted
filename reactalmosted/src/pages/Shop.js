import React from 'react';
import { Link } from 'react-router-dom';

const produtos = [
  {
    nome: "T-SHIRT OVERSIZED - BRANCA",
    preco: "R$ 149,90",
    imagem: "assets/camisetaBranca-removebg-preview.png",
    alt: "Camisa Branca"
  },
  {
    nome: "T-SHIRT OVERSIZED - PRETO",
    preco: "R$ 149,90",
    imagem: "assets/camisetaPreta-removebg-preview.png",
    alt: "Camisa Offwhite"
  },
  {
    nome: "T-SHIRT OVERSIZED - BEGE",
    preco: "R$ 149,90",
    imagem: "assets/camisetaBege-removebg-preview.png",
    alt: "Camisa Bege"
  },
  {
    nome: "T-SHIRT OVERSIZED - VERMELHO",
    preco: "R$ 149,90",
    imagem: "assets/camisetaVermelha-removebg-preview.png",
    alt: "Camisa Vermelha"
  },
  {
    nome: "T-SHIRT OVERSIZED - MARROM",
    preco: "R$ 149,90",
    imagem: "assets/camisetaMarrom-removebg-preview.png",
    alt: "Camisa Marrom"
  },
  {
    nome: "T-SHIRT OVERSIZED - VERDE",
    preco: "R$ 149,90",
    imagem: "assets/camisetaVerde-removebg-preview.png",
    alt: "Camisa Verde"
  }
];

const Shop = () => {
  return (
    <main className="container my-5">
      <div className="row text-center">
        {produtos.slice(0, 3).map((produto, index) => (
          <div className="col-md-4" key={index}>
            <Link to={`/roupa/${produto.nome.toLowerCase().replace(/\s/g, '-')}`} className="produto-link">
              <div className="produto">
                <img src={produto.imagem} alt={produto.alt} className="img-fluid" />
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="row text-center mt-4">
        {produtos.slice(3, 6).map((produto, index) => (
          <div className="col-md-4" key={index}>
            <Link to={`/roupa/${produto.nome.toLowerCase().replace(/\s/g, '-')}`} className="produto-link">
              <div className="produto">
                <img src={produto.imagem} alt={produto.alt} className="img-fluid" />
                <p>{produto.nome}</p>
                <p>{produto.preco}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Shop;
