import React from 'react';
import { Link } from 'react-router-dom';

const produtos = [
  {
    nome: "T-SHIRT OVERSIZED - BRANCA",
    precoAntigo: "R$ 149,90",
    precoNovo: "R$ 99,90",
    imagem: "assets/camisetaBranca-removebg-preview.png",
    alt: "Camisa Branca"
  },
  {
    nome: "T-SHIRT OVERSIZED - PRETO",
    precoAntigo: "R$ 149,90",
    precoNovo: "R$ 99,90",
    imagem: "assets/camisetaPreta-removebg-preview.png",
    alt: "Camisa Offwhite"
  },
  {
    nome: "T-SHIRT OVERSIZED - BEGE",
    precoAntigo: "R$ 149,90",
    precoNovo: "R$ 99,90",
    imagem: "assets/camisetaBege-removebg-preview.png",
    alt: "Camisa Laranja"
  },
  {
    nome: "T-SHIRT OVERSIZED - VERMELHO",
    precoAntigo: "R$ 149,90",
    precoNovo: "R$ 99,90",
    imagem: "assets/camisetaVermelha-removebg-preview.png",
    alt: "Camisa Preta"
  },
  {
    nome: "T-SHIRT OVERSIZED - MARROM",
    precoAntigo: "R$ 149,90",
    precoNovo: "R$ 99,90",
    imagem: "assets/camisetaMarrom-removebg-preview.png",
    alt: "Camisa Marrom"
  },
  {
    nome: "T-SHIRT OVERSIZED - VERDE",
    precoAntigo: "R$ 149,90",
    precoNovo: "R$ 99,90",
    imagem: "assets/camisetaVerde-removebg-preview.png",
    alt: "Camisa Verde"
  }
];

const Outlet = () => {
  return (
    <main className="container my-5">
      <div className="row text-center">
        {produtos.slice(0, 3).map((produto, index) => (
          <div className="col-md-4" key={index}>
            <div className="produto">
              <Link to={`/roupa/${produto.nome.toLowerCase().replace(/\s/g, '-')}`}>
                <img src={produto.imagem} alt={produto.alt} className="img-fluid" />
              </Link>
              <p>{produto.nome}</p>
              <p>
                <span className="preco-antigo">{produto.precoAntigo}</span> 
                <span className="preco-novo">{produto.precoNovo}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="row text-center mt-4">
        {produtos.slice(3, 6).map((produto, index) => (
          <div className="col-md-4" key={index}>
            <div className="produto">
              <Link to={`/roupa/${produto.nome.toLowerCase().replace(/\s/g, '-')}`}>
                <img src={produto.imagem} alt={produto.alt} className="img-fluid" />
              </Link>
              <p>{produto.nome}</p>
              <p>
                <span className="preco-antigo">{produto.precoAntigo}</span> 
                <span className="preco-novo">{produto.precoNovo}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Outlet;
