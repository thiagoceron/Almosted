import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Outlet from './pages/Outlet';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Senha from './pages/Senha';
import CriarConta from './pages/CriarConta';
import Roupas from './pages/Roupas';
import Desconto from './pages/Desconto';
import Devolucao from './pages/Devolucao';
import Fidelidade from './pages/Fidelidade';
import ApoioCliente from './pages/ApoioCliente';
import Perguntas from './pages/Perguntas';
import Termos from './pages/Termos';
import Politica from './pages/Politica';
import Materias from './pages/Materias';
import Certificações from './pages/Certificacoes';
import Impacto from './pages/Impacto';
import Sustentavel from './pages/Sustentavel';
import Detalhes from './pages/Detalhes';


const App = () => {
    return (
        <Router>
            <Header />
            <main style={{ minHeight: '70vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/outlet" element={<Outlet />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/senha" element={<Senha />} />
                    <Route path="/criarconta" element={<CriarConta />} />
                    <Route path="/roupa/:nomeProduto" element={<Roupas />} />
                    <Route path="/desconto" element={<Desconto />} />
                    <Route path="/devolucao" element={<Devolucao />} />
                    <Route path="/fidelidade" element={<Fidelidade />} />
                    <Route path="/perguntas" element={<Perguntas />} />
                    <Route path="/apoiocliente" element={<ApoioCliente />} />
                    <Route path="/termos" element={<Termos />} />
                    <Route path="/politica" element={<Politica />} />
                    <Route path="/materiais" element={<Materias />} />
                    <Route path="/certificacoes" element={<Certificações />} />
                    <Route path="/impacto" element={<Impacto />} />
                    <Route path="/sustentavel" element={<Sustentavel />} />
                    <Route path="/detalhes/:id" element={<Detalhes />} />       
                    
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
