import React from 'react';

const TermosCondicoes = () => {
  return (
    <main className="container mt-5">
      <section className="text-center mb-5">
        <h1 className="display-4 font-weight-bold text-uppercase mb-4">Termos e Condições</h1>
        <p className="lead">
          Leia atentamente os Termos e Condições da <strong>Almosted</strong>. O uso deste site implica na aceitação das cláusulas descritas abaixo.
        </p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">1. Informações Gerais</h2>
        <p>1.1. A Almosted é uma loja online especializada no setor da moda, comprometida com a qualidade e o atendimento de excelência.</p>
        <p>1.2. O uso do site é permitido apenas para maiores de idade ou com autorização de um responsável legal.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">2. Cadastro e Privacidade</h2>
        <p>2.1. É necessário um cadastro com informações precisas para realizar compras. Garantimos a confidencialidade de seus dados.</p>
        <p>2.2. Consulte nossa <a href="/politica">Política de Privacidade</a> para mais informações.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">3. Produtos e Pagamentos</h2>
        <p>3.1. Esforçamo-nos para apresentar informações precisas sobre os produtos, mas podem ocorrer variações devido a configurações de tela.</p>
        <p>3.2. Preços estão sujeitos a alterações sem aviso prévio.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">4. Envio e Entrega</h2>
        <p>4.1. Prazo e valor do frete variam conforme localidade e método de envio. Essas informações estarão disponíveis no momento da compra.</p>
        <p>4.2. Notificações de status do pedido serão enviadas por e-mail.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">5. Trocas e Devoluções</h2>
        <p>5.1. Devoluções podem ser feitas em até 7 dias corridos após o recebimento, desde que os produtos estejam em perfeitas condições.</p>
        <p>5.2. Trocas por defeito devem ser solicitadas pelos nossos canais de atendimento.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">6. Direitos Autorais</h2>
        <p>6.1. Todo o conteúdo do site é protegido por leis de direitos autorais e não pode ser reproduzido sem permissão.</p>
      </section>

      <section className="text-center py-5">
        <p>
          Ao navegar e utilizar o site Almosted, você concorda com os termos acima. Caso tenha dúvidas, entre em contato conosco pelo e-mail{' '}
          <a href="mailto:suporte@almosted.com">suporte@almosted.com</a>.
        </p>
      </section>
    </main>
  );
};

export default TermosCondicoes;
