import React from 'react';

const Materiais = () => {
  return (
    <main className="container my-5">
      <center>
        <h1>Materiais Sustentáveis</h1>
      </center>
      <p>
        Nossos produtos são feitos com materiais de baixo impacto ambiental.
        Investimos em pesquisa para oferecer o que há de melhor em sustentabilidade.
      </p>
      <div className="text-center my-4">
        <img
          src="assets/simboloRecicla.png"
          alt="Logo Recicla"
          className="img-fluid"
        />
      </div>
      <h2>Principais Materiais:</h2>
      <ul>
        <li>Algodão orgânico</li>
        <li>Fibras recicladas</li>
        <li>Poliéster reciclado</li>
        <li>Linho natural</li>
      </ul>
    </main>
  );
};

export default Materiais;
