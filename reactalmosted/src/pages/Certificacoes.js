import React from 'react';

const Certificacoes = () => {
  return (
    <main className="container my-5">
      <center>
        <h1>Certificações</h1>
      </center>
      <center>
        <p>Nosso compromisso com a sustentabilidade é garantido por certificações reconhecidas internacionalmente.</p>
      </center>
      <div className="text-center my-4">
        <img
          src="assets/certificacoes.jpg.png"
          alt="Certificações"
          className="img-fluid"
        />
      </div>
      <h2>Certificações Obtidas:</h2>
      <ul>
        <li><strong>GOTS</strong> (Global Organic Textile Standard) - Algodão orgânico certificado</li>
        <li><strong>Fair Trade</strong> - Comércio justo e ético</li>
        <li><strong>OEKO-TEX</strong> - Produtos livres de substâncias nocivas</li>
        <li><strong>CarbonNeutral</strong> - Redução de emissão de carbono</li>
      </ul>
    </main>
  );
};

export default Certificacoes;
