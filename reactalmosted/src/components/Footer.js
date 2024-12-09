import React from 'react';

const Footer = () => {
    return (
        <footer style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', background: '#000000', padding: '20px' }}>
            <div className="footer-section" style={{ flex: '1 1 200px', margin: '10px' }}>
                <h3>FALE CONOSCO</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><a href="/apoiocliente">Apoio ao cliente</a></li>
                    <li><a href="/perguntas">Perguntas frequentes</a></li>
                    <li><a href="/termos">Termos e Condições</a></li>
                    <li><a href="/politica">Política de Privacidade</a></li>
                </ul>
            </div>
            <div className="footer-section" style={{ flex: '1 1 200px', margin: '10px' }}>
                <h3>PEDIDOS E ENTREGAS</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><a href="/devolucao">Devoluções</a></li>
                </ul>
            </div>
            <div className="footer-section" style={{ flex: '1 1 200px', margin: '10px' }}>
                <h3>SUSTENTABILIDADE</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><a href="/impacto">Nosso impacto</a></li>
                    <li><a href="/materiais">Materiais sustentáveis</a></li>
                    <li><a href="/certificacoes">Certificações</a></li>
                </ul>
            </div>
            <div className="footer-section" style={{ flex: '1 1 200px', margin: '10px' }}>
                <h3>DESCONTOS E BENEFÍCIOS</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><a href="/fidelidade">Almosted+</a></li>
                    <li><a href="/desconto">Descontos</a></li>
                    <li><a href="/outlet">Outlet</a></li>
                </ul>
            </div>
            <div className="footer-section" style={{ flex: '1 1 200px', margin: '10px' }}>
                <h3>SOCIAL</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ul className="social-icons" style={{ listStyle: 'none', display: 'flex', gap: '10px', padding: 0 }}>
                        <li><a href="https://www.instagram.com/thiagoceronn/"><img src="assets/instagram.png" alt="Instagram" style={{ height: '45px' }} /></a></li>
                        <li><a href="https://www.instagram.com/edu_larson/"><img src="assets/twitter.png" alt="Twitter" style={{ height: '45px' }} /></a></li>
                        <li><a href="https://www.instagram.com/joao_luy/"><img src="assets/facebook.png" alt="Facebook" style={{ height: '45px' }} /></a></li>
                    </ul>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;
