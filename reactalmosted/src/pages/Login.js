import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // Função para lidar com a submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
        console.log('E-mail:', email);
        console.log('Senha:', senha);
    };

    return (
        <main className="container my-5">
            <h3 className="text-center mb-4">INICIAR SESSÃO</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="emailLogin">E-MAIL</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="emailLogin" 
                        placeholder="exemplo@email.com" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="senhaLogin">SENHA</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="senhaLogin" 
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                    <a href="/senha" className="d-block mt-2 text-right">Esqueceu sua senha?</a>
                </div>
                <button type="submit" className="btn btn-custom btn-block">INICIAR SESSÃO</button>
                <p className="text-center mt-3">Não possui uma conta? <a href="/criarconta">Criar uma conta</a></p>
            </form>
        </main>
    );
};

export default Login;
