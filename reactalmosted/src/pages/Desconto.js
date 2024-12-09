import React from "react";

const Beneficios = () => {
    return (
        <main className="container mt-5">
            <section className="text-center mb-5 d-flex flex-column align-items-center">
                <h1 className="display-4 font-weight-bold text-uppercase mb-4">Descontos e Benefícios</h1>
                <p className="lead mb-0">Aproveite nossas promoções e benefícios exclusivos para você.</p>
            </section>

            <section>
                <h2 className="h4 text-uppercase font-weight-bold mb-3">1. Programa de Fidelidade Almosted+</h2>
                <p>
                    O <strong>Almosted+</strong> é o nosso programa de fidelidade exclusivo, onde você acumula pontos a cada compra realizada. Esses pontos podem ser trocados por descontos, ofertas exclusivas e outros benefícios. Além disso, o programa oferece vantagens adicionais para clientes frequentes, como atendimento prioritário e acesso antecipado a promoções especiais.
                </p>
                <p>
                    Ao se inscrever no Almosted+, você começa a acumular pontos desde a sua primeira compra. A cada R$50 gastos, você acumula 10 pontos. Quanto mais você compra, mais benefícios você recebe! Acesse sua conta para ver o seu saldo de pontos e as recompensas disponíveis.
                </p>
            </section>

            <section>
                <h2 className="h4 text-uppercase font-weight-bold mb-3">2. Descontos para Novos Clientes</h2>
                <p>
                    Se você é um novo cliente, aproveite <strong>10% de desconto</strong> na sua primeira compra. Basta se cadastrar em nosso site e o desconto será automaticamente aplicado no seu primeiro pedido.
                </p>
            </section>

            <section>
                <h2 className="h4 text-uppercase font-weight-bold mb-3">3. Descontos sazonais e ofertas especiais</h2>
                <p>
                    Fique atento às nossas promoções sazonais, como a Black Friday, e outras ofertas especiais ao longo do ano. Inscreva-se na nossa newsletter para ser o primeiro a saber sobre os descontos mais recentes.
                </p>
            </section>

            <section>
                <h2 className="h4 text-uppercase font-weight-bold mb-3">4. Desconto em Compras no Outlet</h2>
                <p>
                    O Almosted oferece descontos exclusivos para produtos do nosso Outlet. Acesse nossa página <a href="/outlet">Outlet</a> e descubra produtos de qualidade a preços imperdíveis.
                </p>
            </section>

            <section>
                <h2 className="h4 text-uppercase font-weight-bold mb-3">5. Como resgatar descontos?</h2>
                <p>
                    Para resgatar um desconto, basta seguir as instruções fornecidas na promoção ou no programa de fidelidade. O desconto será automaticamente aplicado ao total da sua compra no momento do pagamento, dependendo da forma de resgatar (código, ponto de fidelidade, etc.).
                </p>
            </section>
        </main>
    );
};

export default Beneficios;
