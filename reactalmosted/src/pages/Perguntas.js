import React from 'react';

const PerguntasFrequentes = () => {
  return (
    <main className="container mt-5">
      <section className="text-center mb-5 d-flex flex-column align-items-center">
        <h1 className="display-4 font-weight-bold text-uppercase mb-4">Perguntas Frequentes</h1>
        <p className="lead mb-0">Encontre respostas rápidas para suas dúvidas.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">1. Como acompanho meu pedido?</h2>
        <p>Você pode acompanhar o status do seu pedido pelo e-mail de confirmação enviado após a compra.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">2. Quais métodos de pagamento são aceitos?</h2>
        <p>Aceitamos cartões de crédito, débito, boleto bancário e Pix.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">3. Como faço para trocar ou devolver um produto?</h2>
        <p>
          Acesse a seção <a href="/devolucao">Devoluções</a> e siga as instruções. Para mais dúvidas, entre em contato pelo{' '}
          <a href="mailto:suporte@almosted.com">nosso e-mail</a>.
        </p>
      </section>
    </main>
  );
};

export default PerguntasFrequentes;
