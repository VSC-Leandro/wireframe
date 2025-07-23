import React, { useState } from 'react';
import { AppStyles } from './components/AppStyles';
import { BottomNav } from './components/BottomNav';
import { LoginScreen } from './screens/LoginScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { MapScreen } from './screens/MapScreen';
import { GuidesScreen } from './screens/GuidesScreen';
import { EventsScreen } from './screens/EventsScreen';
import { TrailScreen } from './screens/TrailScreen';
import { guidesData, eventsData, categoriesData } from './data';

/**
 * Componente principal da aplicação.
 * Gerencia o estado geral, como autenticação e navegação,
 * e renderiza a tela apropriada.
 */
const App = () => {
    // --- State Management ---
    // Controla se o usuário está logado ou não.
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // Armazena o nome do usuário, definido no login.
    const [userName, setUserName] = useState('Nick do Usuário');
    // Armazena a URL da imagem de perfil do usuário.
    const [userImage, setUserImage] = useState<string | null>(null);
    // Controla qual página está ativa no menu de navegação.
    const [activePage, setActivePage] = useState('profile');

    /**
     * Atualiza a página ativa. Chamado pelos botões de navegação.
     * @param page A identificação da página para ativar.
     */
    const handleNavClick = (page: string) => {
        setActivePage(page);
    };

    /**
     * Renderiza a tela correta com base no estado `activePage`.
     * Passa as props necessárias para cada tela.
     */
    const renderPage = () => {
        const pageProps = { userName, userImage };
        switch (activePage) {
            case 'map':
                return <MapScreen {...pageProps} />;
            case 'guides':
                return <GuidesScreen guides={guidesData} userName={userName} userImage={userImage} />;
            case 'events':
                return <EventsScreen events={eventsData} categories={categoriesData} {...pageProps} />;
            case 'trail':
                return <TrailScreen {...pageProps} />;
            case 'profile':
            default:
                return <ProfileScreen 
                            userName={userName}
                            userImage={userImage}
                            onUpdateImage={setUserImage}
                       />;
        }
    };
    
    // Se o usuário não estiver autenticado, mostra a tela de login.
    if (!isAuthenticated) {
        return (
            <div className="app-container">
                <AppStyles />
                <LoginScreen onLogin={(loggedInUser) => {
                    setUserName(loggedInUser);
                    setIsAuthenticated(true);
                }} />
            </div>
        );
    }
    
    // Se autenticado, mostra o layout principal com a tela ativa e a navegação.
    return (
        <div className="app-container">
            <AppStyles />
            <main className="main-content">
              {renderPage()}
            </main>
            <BottomNav activePage={activePage} onNavClick={handleNavClick} />
        </div>
    );
};

export default App;