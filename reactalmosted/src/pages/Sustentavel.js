import React from 'react';
import { Link } from 'react-router-dom';

const Sustentavel = () => {
  const produtos = [
    {
      id: 'zico',
      img: '/assets/ecobagFlaZICO.png',
      nome: 'ECO BAG - ZICO',
      preco: 'R$ 59,90',
    },
    {
      id: 'corinthians',
      img: '/assets/ecobagDemocraciaCorinthiana.png',
      nome: 'ECO BAG - DEMOCRACIA CORINTHIANA',
      preco: 'R$ 59,90',
    },
    {
      id: 'palmeiras',
      img: '/assets/ecobagPalmeiras.png',
      nome: 'ECO BAG - PALMEIRAS',
      preco: 'R$ 59,90',
    },
  ];

  return (
    <main className="container my-5">
      <h1 className="text-center mb-5">Produtos Sustentáveis</h1>
      <p className="text-center mb-4">
        Contribua para um futuro melhor com nossa linha de produtos ecológicos e éticos.
      </p>
      <div className="row text-center">
        {produtos.map((produto) => (
          <div className="col-md-4" key={produto.id}>
            <Link to={`/detalhes/${produto.id}`} className="produto-link">
              <div className="produto">
                <img
                  src={produto.img}
                  alt={produto.nome}
                  className="img-fluid"
                />
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

export default Sustentavel;


