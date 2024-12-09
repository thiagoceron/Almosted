import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';

const Home = () => {
    useEffect(() => {
        // Inicializando o primeiro carrossel
        const carouselElement = document.getElementById('carouselExampleControls');
        new Carousel(carouselElement, {
            interval: 2000, // Intervalo de 2 segundos
            ride: 'carousel', // Gira automaticamente
        });

        // Inicializando o carrossel de produtos
        const carouselProdutosElement = document.getElementById('carouselProdutos');
        new Carousel(carouselProdutosElement, {
            interval: 2000, // Intervalo de 2 segundos
            ride: 'carousel', // Gira automaticamente
        });
    }, []);

    return (
        <main>
            {/* Seção do Carrossel de Banners */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="assets/bannerWINTER.png" alt="Banner Inverno" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="assets/bannerSUMMER.png" alt="Banner Verão" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>

            {/* Seção do Carrossel de Produtos */}
            <div id="carouselProdutos" className="carousel slide mt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <center><h3>WINTER COLLECITION</h3></center>
                        <div className="d-flex justify-content-center">
                            <div className="produto mx-2">
                                <img src="assets/camisetaBranca-removebg-preview.png" alt="Produto Inverno 1" />
                                <p>T-SHIRT OVERSIZED - OFF WHITE</p>
                                <p>R$ 149,90</p>
                            </div>
                            <div className="produto mx-2">
                                <img src="assets/camisetaPreta-removebg-preview.png" alt="Produto Inverno 2" />
                                <p>T-SHIRT OVERSIZED - PRETO</p>
                                <p>R$ 149,90</p>
                            </div>
                            <div className="produto mx-2">
                                <img src="assets/calçaJeansPreta501.png" alt="Produto Inverno 3" />
                                <p>CALÇA STRAIGHT JEANS - PRETO</p>
                                <p>R$ 279,90</p>
                            </div>
                            <div className="produto mx-2">
                                <img src="assets/calçaLinhoBegeFundo.png" alt="Produto Inverno 4" />
                                <p>CALÇA DE LINHO - AREIA</p>
                                <p>R$ 279,90</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <center><h3>SUMMER COLLECITION</h3></center>
                        <div className="d-flex justify-content-center">
                            <div className="produto mx-2">
                                <img src="assets/regataBranca.png" alt="Produto Verão 1" />
                                <p>REGATA - BRANCA</p>
                                <p>R$ 279,90</p>
                            </div>
                            <div className="produto mx-2">
                                <img src="assets/camisetaFEM_Bege-removebg-preview.png" alt="Produto Verão 2" />
                                <p>CROPPED FEMININO - BEGE</p>
                                <p>R$ 279,90</p>
                            </div>
                            <div className="produto mx-2">
                                <img src="assets/shortsBege.png" alt="Produto Verão 3" />
                                <p>SHORTS - BEGE</p>
                                <p>R$ 129,90</p>
                            </div>
                            <div className="produto mx-2">
                                <img src="assets/shortsLilas.png" alt="Produto Verão 4" />
                                <p>SHORTS LILÁS</p>
                                <p>R$129,90</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselProdutos" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselProdutos" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
        </main>
    );
};

export default Home;
