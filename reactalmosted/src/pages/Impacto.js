import React from 'react';

const Impacto = () => {
  return (
    <main className="container my-5">
      <center>
        <h1>Nosso Impacto</h1>
      </center>
      <p>
        Trabalhamos para reduzir o impacto ambiental em cada etapa da produção.
        Desde o uso de energia renovável até a escolha de materiais reciclados,
        nossa meta é ser 100% carbono neutro até 2030.
      </p>
      <div className="text-center my-4">
        <img
          src="assets/sustentabilidade-removebg-preview.png"
          alt="Imagem sobre nosso impacto"
          className="img-fluid"
        />
      </div>
      <h2>Principais Ações:</h2>
      <ul>
        <li>Redução de emissão de carbono</li>
        <li>Uso de água reciclada na produção</li>
        <li>Parcerias com ONGs ambientais</li>
      </ul>
    </main>
  );
};

export default Impacto;
