import React from 'react';

const PoliticaPrivacidade = () => {
  return (
    <main className="container mt-5">
      <section className="text-center mb-5">
        <h1 className="display-4 font-weight-bold text-uppercase mb-4">Política de Privacidade</h1>
        <p className="lead">
          A <strong>Almosted</strong> respeita sua privacidade e se compromete a proteger seus dados. Este documento explica como coletamos, utilizamos e protegemos suas informações.
        </p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">1. Coleta de Dados</h2>
        <p>1.1. Coletamos informações pessoais fornecidas por você ao criar uma conta, como nome, e-mail, endereço e dados de pagamento.</p>
        <p>1.2. Também podemos coletar dados automaticamente, como informações de navegação e uso do site.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">2. Uso das Informações</h2>
        <p>2.1. Os dados coletados são utilizados para processar pedidos, personalizar sua experiência e melhorar nossos serviços.</p>
        <p>2.2. Podemos usar suas informações para enviar notificações sobre promoções, novidades e atualizações, com seu consentimento.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">3. Compartilhamento de Dados</h2>
        <p>3.1. Não vendemos ou compartilhamos seus dados com terceiros, exceto quando necessário para processar pedidos ou cumprir obrigações legais.</p>
        <p>3.2. Parceiros de logística e pagamento terão acesso apenas aos dados necessários para a realização dos serviços contratados.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">4. Segurança</h2>
        <p>4.1. Adotamos medidas de segurança avançadas para proteger suas informações contra acessos não autorizados, perda ou vazamento.</p>
        <p>4.2. Recomendamos que você mantenha sua senha segura e não a compartilhe com terceiros.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">5. Direitos do Usuário</h2>
        <p>5.1. Você pode solicitar a atualização, exclusão ou acesso às suas informações pessoais a qualquer momento.</p>
        <p>5.2. Entre em contato conosco pelo e-mail <a href="mailto:suporte@almosted.com">suporte@almosted.com</a> para exercer seus direitos.</p>
      </section>

      <section>
        <h2 className="h4 text-uppercase font-weight-bold mb-3">6. Cookies</h2>
        <p>6.1. Utilizamos cookies para melhorar sua experiência no site, personalizar conteúdos e analisar o tráfego.</p>
        <p>6.2. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.</p>
      </section>

      <section className="text-center py-5">
        <p>Ao utilizar o site Almosted, você concorda com esta Política de Privacidade. Para dúvidas ou mais informações, entre em contato conosco.</p>
      </section>
    </main>
  );
};

export default PoliticaPrivacidade;
