import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './estilo.css'; // Se quiser estilizar com CSS.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
