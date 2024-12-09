import React, { useState } from 'react';

const CriarConta = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    // Função para lidar com a submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar se as senhas coincidem
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        // Aqui você pode adicionar a lógica para enviar os dados para o servidor
        console.log('E-mail:', email);
        console.log('Senha:', senha);

        // Limpar os campos após envio
        setEmail('');
        setSenha('');
        setConfirmarSenha('');
    };

    return (
        <main className="container my-5">
            <h3 className="text-center mb-4">CRIAR CONTA</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="emailCadastro">E-MAIL</label>
                    <input
                        type="email"
                        className="form-control"
                        id="emailCadastro"
                        placeholder="exemplo@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="senhaCadastro">SENHA</label>
                    <input
                        type="password"
                        className="form-control"
                        id="senhaCadastro"
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmarSenhaCadastro">CONFIRME SUA SENHA</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmarSenhaCadastro"
                        required
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-custom btn-block">CRIAR CONTA</button>
            </form>
        </main>
    );
};

export default CriarConta;
