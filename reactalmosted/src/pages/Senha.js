import React, { useState } from 'react';

const Senha = () => {
    const [email, setEmail] = useState('');

    // Função para lidar com a submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o e-mail de recuperação
        console.log('E-mail para recuperação:', email);
    };

    return (
        <main className="container my-5">
            <h3 className="text-center mb-4">ESQUECEU SUA SENHA?</h3>
            <p className="text-center">Informe seu e-mail cadastrado para enviarmos as instruções de redefinição de senha.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="emailRecuperacao">E-MAIL</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="emailRecuperacao" 
                        placeholder="exemplo@email.com" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <button type="submit" className="btn btn-custom btn-block">ENVIAR</button>
            </form>
        </main>
    );
};

export default Senha;
