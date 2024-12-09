import React from 'react';
import { useParams } from 'react-router-dom';

const produtos = {
  zico: {
    img: '/assets/ecobagFlaZICO.png',
    nome: 'ECO BAG - ZICO',
    descricao: 'Uma ecobag inspirada no lendário Zico.',
    preco: 'R$ 59,90',
  },
  corinthians: {
    img: '/assets/ecobagDemocraciaCorinthiana.png',
    nome: 'ECO BAG - DEMOCRACIA CORINTHIANA',
    descricao: 'Uma ecobag representando a Democracia Corinthiana.',
    preco: 'R$ 59,90',
  },
  palmeiras: {
    img: '/assets/ecobagPalmeiras.png',
    nome: 'ECO BAG - PALMEIRAS',
    descricao: 'Uma ecobag para os fãs do Palmeiras.',
    preco: 'R$ 59,90',
  },
};

const Detalhes = () => {
  const { id } = useParams();
  const produto = produtos[id];

  if (!produto) {
    return <p>Produto não encontrado!</p>;
  }

  const handleComprar = () => {
    // Aqui você pode adicionar a lógica de compra (ex: adicionar ao carrinho)
    alert(`Você comprou: ${produto.nome}`);
  };

  return (
    <main className="container my-5 detalhes-container">
      <h1>{produto.nome}</h1>
      <img src={produto.img} alt={produto.nome} className="img-fluid" />
      <p>{produto.descricao}</p>
      <p><strong>Preço: </strong>{produto.preco}</p>
      <button className="btn btn-black" onClick={handleComprar}>Comprar</button>
    </main>
  );
};

export default Detalhes;
