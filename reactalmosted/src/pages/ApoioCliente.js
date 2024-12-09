import React from 'react';

const ApoioCliente = () => {
  return (
    <main className="container mt-5">
      <section className="text-center mb-5 d-flex flex-column align-items-center">
        <h1 className="display-4 font-weight-bold text-uppercase mb-4">Apoio ao Cliente</h1>
        <p className="lead mb-0">Estamos aqui para ajudar! Entre em contato conosco pelos canais abaixo.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">Contato Rápido</h2>
        <p>
          Email: <a href="mailto:suporte@almosted.com">suporte@almosted.com</a>
        </p>
        <p>Telefone: (11) 1234-4321</p>
        <p>
          WhatsApp: <a href="https://wa.me/554212344321" target="_blank" rel="noopener noreferrer">(42) 91234-4321</a>
        </p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">Horário de Atendimento</h2>
        <p>Segunda a Sexta: 9h às 18h</p>
        <p>Sábado: 10h às 14h</p>
        <p>Domingo e feriados: Fechado</p>
      </section>
    </main>
  );
};

export default ApoioCliente;
