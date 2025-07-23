import React from 'react';
import { TreeRingIcon, GuidesIcon, EventsIcon, UserIcon } from './icons';

interface BottomNavProps {
    activePage: string;
    onNavClick: (page: string) => void;
}

/**
 * Componente da barra de navegação inferior.
 * @param activePage - A página atualmente ativa, para destacar o botão correto.
 * @param onNavClick - Função para ser chamada quando um botão de navegação é clicado.
 */
export const BottomNav: React.FC<BottomNavProps> = ({ activePage, onNavClick }) => (
    <nav className="bottom-nav">
        <button className={`nav-btn ${activePage === 'map' ? 'active' : ''}`} onClick={() => onNavClick('map')} aria-label="Mapa">
            <TreeRingIcon />
        </button>
        <button className={`nav-btn ${activePage === 'guides' ? 'active' : ''}`} onClick={() => onNavClick('guides')} aria-label="Guias">
            <GuidesIcon />
        </button>
        <button className={`nav-btn ${activePage === 'events' ? 'active' : ''}`} onClick={() => onNavClick('events')} aria-label="Eventos">
            <EventsIcon />
        </button>
        <button className={`nav-btn ${activePage === 'profile' ? 'active' : ''}`} onClick={() => onNavClick('profile')} aria-label="Perfil">
            <UserIcon />
        </button>
    </nav>
);
