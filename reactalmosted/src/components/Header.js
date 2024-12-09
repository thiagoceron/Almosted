import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#f8f9fa' }}>
            <nav className="nav-left">
                <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', margin: 0, padding: 0 }}>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/outlet">OUTLET</Link></li>
                    <li><Link to="/sustentavel">SUSTENTÁVEL</Link></li>
                    <li><Link to="/sobre">SOBRE</Link></li>
                </ul>
            </nav>

            <div className="logo">
                <Link to="/">
                    <img src="assets/LogoAlmostedSemFundo.png" alt="Logo Almosted" style={{ height: '50px' }} />
                </Link>
            </div>

            <div className="nav-right" style={{ display: 'flex', gap: '15px' }}>
                <Link to="/login">
                    <img src="assets/signoUser.png" alt="Perfil" className="icon" style={{ height: '30px' }} />
                </Link>
            </div>
        </header>
    );
};

export default Header;
