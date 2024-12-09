import React from 'react';

const Devolucao = () => {
    return (
        <main className="container mt-5">
            <section className="text-center mb-5 d-flex flex-column align-items-center">
                <h1 className="display-4 font-weight-bold text-uppercase mb-4">Devoluções</h1>
                <p className="lead mb-0">Saiba como devolver produtos de maneira fácil e rápida.</p>
            </section>

            <section>
                <h2 className="h4 text-uppercase font-weight-bold mb-3">1. Qual o prazo para devolução?</h2>
                <p>Você pode solicitar a devolução de um produto dentro de 30 dias após a data de recebimento. Lembre-se de que o item deve estar em perfeitas condições, sem sinais de uso.</p>
            </section>

            <section>
                <h2 className="h4 text-uppercase font-weight-bold mb-3">2. Como faço para devolver um produto?</h2>
                <p>Para devolver um produto, basta entrar em contato com os canais de contato (E-mail, Telefone e ou WhatsApp). Em seguida, você receberá as instruções sobre como proceder com o envio de volta ao nosso centro de distribuição.</p>
            </section>

            <section>
                <h2 className="h4 text-uppercase font-weight-bold mb-3">3. O que acontece depois que a devolução é feita?</h2>
                <p>Após o recebimento do produto, nossa equipe irá verificar as condições do item e, se aprovado, o valor será reembolsado na mesma forma de pagamento utilizada na compra. O processo pode levar de 5 a 10 dias úteis.</p>
            </section>

            <section>
                <h2 className="h4 text-uppercase font-weight-bold mb-3">4. Quem arca com os custos de envio da devolução?</h2>
                <p>Em caso de devolução por defeito ou erro no envio, os custos de envio serão arcados pela Almosted. Se a devolução for por outros motivos, o custo do frete será de responsabilidade do cliente.</p>
            </section>
        </main>
    );
};

export default Devolucao;
