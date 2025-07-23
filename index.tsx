import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';

// Ponto de entrada da aplicação.
// Encontra o elemento 'root' no HTML e renderiza o componente principal 'App' dentro dele.
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
