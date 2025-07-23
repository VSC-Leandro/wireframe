import React, { useState } from 'react';

interface LoginScreenProps {
    onLogin: (username: string) => void;
}

// Em uma aplicação real, isso viria de uma API segura.
const validUsers = [
    { username: 'Leandro', password: '13579' },
    { username: 'Arthur', password: 'admin' },
    { username: 'Victoria', password: 'admin' },
    { username: 'Denner', password: 'admin' },
    { username: 'Alan', password: 'admin' },
    { username: 'Karen', password: 'admin' },
    { username: 'Millene', password: 'admin' },
    { username: 'Fabricia', password: 'admin' },
    { username: 'Lennon', password: 'admin' },
];

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const user = validUsers.find(u => u.username === username && u.password === password);
        
        if (user) {
            setError('');
            onLogin(username);
        } else {
            setError('Usuário ou senha inválidos.');
        }
    };

    return (
        <div className="screen login-screen">
            <h1 className="login-title">TERRITÓRIO</h1>
            <p className="login-subtitle">Faça login para continuar</p>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label htmlFor="username">Usuário</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="login-error">{error}</p>}
                <button type="submit" className="login-button">Entrar</button>
            </form>
        </div>
    );
};