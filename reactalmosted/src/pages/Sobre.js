import React from 'react';

const Sobre = () => {
  return (
    <main className="container mt-5">
      {/* Seção de introdução */}
      <section className="text-center mb-5">
        <h1 className="display-4 font-weight-bold text-uppercase mb-4">Nossa História</h1>
        <p className="lead">
          Fundada em 2010, a <strong>Almosted</strong> nasceu com o propósito de redefinir o mundo da moda, trazendo
          peças que combinam autenticidade, qualidade e estilo. Inspirada pela criatividade e pelas tendências globais,
          a marca cresceu rapidamente e conquistou um espaço único no mercado.
        </p>
        <p className="lead">
          Desde o início, a <strong>Almosted</strong> se comprometeu com a sustentabilidade, utilizando materiais
          ecológicos e processos éticos em sua produção. Cada peça conta uma história e reflete nosso desejo de criar
          moda que inspire confiança e inovação.
        </p>
      </section>

      {/* Seção com imagem e conteúdo */}
      <section className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img src="assets/FotoAlmosted.png" alt="Imagem da História da Marca" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-lg-6">
          <h2 className="h4 text-uppercase font-weight-bold mb-4">Missão e Valores</h2>
          <p className="text-justify">
            Nossa missão é oferecer produtos que não só sejam esteticamente agradáveis, mas também eco-friendly,
            promovendo um futuro sustentável para a moda. Acreditamos que cada escolha importa, e é por isso que
            valorizamos a transparência, a ética e o respeito pelo planeta e pelas pessoas.
          </p>
          <h2 className="h4 text-uppercase font-weight-bold mt-4 mb-4">Conexão com o Cliente</h2>
          <p className="text-justify">
            Mais do que vender roupas, buscamos criar conexões. Cada cliente é parte da nossa jornada, e nossas coleções
            são pensadas para atender os diferentes estilos e personalidades de quem nos escolhe.
          </p>
        </div>
      </section>

      {/* Seção de chamada para ação */}
      <section className="text-center py-5 rounded">
        <h2 className="h3 font-weight-bold text-uppercase mb-3">Faça Parte da Nossa História</h2>
        <p className="lead mb-4">
          Descubra as coleções exclusivas da <strong>Almosted</strong> e seja parte do movimento que une estilo,
          autenticidade e sustentabilidade.
        </p>
        <a href="/shop" className="btn btn-custom btn-lg text-uppercase">Confira Nossa Loja</a>
      </section>
    </main>
  );
};

export default Sobre;
