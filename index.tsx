
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// --- SVG Icon Components ---
const Icon = ({ children, className = '', style = {} }) => <svg viewBox="0 0 24 24" width="24" height="24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>{children}</svg>;
const UserIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></Icon>;
const EditIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></Icon>;
const FlagIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></Icon>;
const MegaphoneIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 0 1-5.8-1.6l-2.8.8a5 5 0 0 0 9.8 2.8Z"></path></Icon>;
const PlanetIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></Icon>;
const StarIcon = ({ fill = "currentColor", className = "" }) => <svg viewBox="0 0 24 24" width="16" height="16" fill={fill} stroke="none" className={className}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>;
const GuidesIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></Icon>;
const EventsIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><path d="m9 16 2 2 4-4"></path></Icon>;
const TrailIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><circle cx="12" cy="12" r="3"></circle><path d="M12 15v-3m0 9v-3m-3-6H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h3m3 0h3a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3"></path><path d="M18 9v2.5a3.5 3.5 0 0 1-3.5 3.5H12"></path></Icon>;
const FriendsIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></Icon>;
const TreeRingIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></Icon>;
const ImageIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></Icon>;
const BackIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><polyline points="15 18 9 12 15 6"/></Icon>;
const PlantIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M14 20c-5.5-2.5-.8-6.4-3-10"/><path d="M12 10V2"/><path d="m7 5 3.13 1.5a1 1 0 0 0 1.14-.32L12 5l.73 1.18a1 1 0 0 0 1.14.32L17 5"/></Icon>;
const WrenchIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></Icon>;
const PauseIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></Icon>;
const PlusIcon = ({ className = '', style = {} }) => <Icon className={className} style={style}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></Icon>;

// --- Helper Components ---
const UserHeader = ({rank, showProgress = true}) => (
    <div className="user-header">
        <div className="user-avatar-small"><UserIcon /></div>
        <div className="user-info">
            <span className="user-name">Nick do Usuário</span>
            <div className="user-rank">
                <StarIcon fill="#F5B945" /><StarIcon fill="#F5B945" /><StarIcon fill="#F5B945" /><StarIcon fill="#F5B945" /><StarIcon fill="#E0E0E0" />
            </div>
        </div>
        {showProgress && (
          <div className="rank-progress">
              <span>Rank 1</span>
              <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: '60%' }}></div>
              </div>
              <span>Rank 2</span>
          </div>
        )}
    </div>
);

// --- Screen Components ---
const ProfileScreen = () => (
  <div className="screen profile-screen">
    <div className="profile-header">
      <div className="profile-avatar-container">
        <div className="profile-avatar"><UserIcon/></div>
        <button className="edit-avatar-btn"><EditIcon/></button>
      </div>
      <h1 className="profile-name">Nick do Usuário</h1>
      <p className="profile-status">Alguma frase especial...</p>
    </div>

    <div className="featured-badges">
        <div className="badge-card">
            <div className="badge-icon-container" style={{backgroundColor: '#E6E4F8'}}><FlagIcon className="icon" style={{color: '#6F69B4'}}/></div>
            <p>Lorem Ipsum</p>
            <div className="badge-stars"><StarIcon fill="#F5B945" /><StarIcon fill="#F5B945" /></div>
        </div>
        <div className="badge-card">
            <div className="badge-icon-container" style={{backgroundColor: '#D7EEF9'}}><MegaphoneIcon className="icon" style={{color: '#4B9BC1'}}/></div>
            <p>Lorem Ipsum</p>
            <div className="badge-stars"><StarIcon fill="#F5B945" /></div>
        </div>
        <div className="badge-card">
            <div className="badge-icon-container" style={{backgroundColor: '#D9F8E9'}}><PlanetIcon className="icon" style={{color: '#50B485'}}/></div>
            <p>Lorem Ipsum</p>
            <div className="badge-stars"><StarIcon fill="#F5B945" /><StarIcon fill="#F5B945" /><StarIcon fill="#F5B945" /></div>
        </div>
    </div>

    <div className="profile-nav-grid">
        <div className="profile-nav-card"><GuidesIcon/><span>Seus Guias</span></div>
        <div className="profile-nav-card"><EventsIcon/><span>Seus Eventos</span></div>
        <div className="profile-nav-card"><TrailIcon/><span>Trilha</span></div>
        <div className="profile-nav-card">
          <FriendsIcon/>
          <span>Amigos</span>
          <span className="notification-badge">2</span>
        </div>
    </div>
  </div>
);

const TrailScreen = () => (
    <div className="screen trail-screen">
        <UserHeader rank={1} />
        <div className="trail-map-container">
            <div className="trail-node node-1"><span className="node-core"></span></div>
            <div className="trail-node node-2"><span className="node-core"></span></div>
            <div className="trail-node node-3"><span className="node-core"></span></div>
            <div className="trail-node node-4"><span className="node-core"></span></div>
            <div className="trail-node node-5"><span className="node-core"></span></div>

            <div className="trail-branch branch-1"></div>
            <div className="trail-branch branch-2"></div>
            <div className="trail-branch branch-3"></div>
            <div className="trail-branch branch-4"></div>
            <div className="trail-branch branch-5"></div>

            <div className="trail-reward reward-1">
                <StarIcon fill="#6A7A9E" />
                <span>Recompensas</span>
            </div>
             <div className="trail-reward reward-2">
                <StarIcon fill="#6A7A9E" />
                <span>Saberes</span>
            </div>
            
            <div className="trail-add-node">
                <PlusIcon />
            </div>
        </div>
    </div>
);

const MapScreen = () => (
  <div className="screen map-screen">
    <UserHeader rank={1} />
    <div className="map-content">
      <div className="map-message">
        <button className="pause-btn"><PauseIcon /></button>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
      <div className="impression-map">
        <div className="ring ring-1">
          <div className="ring ring-2">
            <div className="ring ring-3">
              <div className="ring ring-4">
                <div className="map-user-icon">
                  <UserIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pulse-dot"></div>
      </div>
    </div>
  </div>
);

const GuideDetailScreen = () => (
    <div className="screen guide-detail-screen">
        <div className="guide-header">
            <p className="guide-date">20 DE JULHO, 2025</p>
            <h1 className="guide-title">Lorem Ipsum dolor sit amet consectetur</h1>
            <p className="guide-meta">publicado por <a href="#">Usuáriox</a></p>
            <div className="guide-tags">
                <span>Tags:</span>
                <span className="tag"></span>
                <span className="tag"></span>
                <span className="tag"></span>
            </div>
        </div>
        <div className="guide-content-card">
            <div className="guide-tabs">
                <button className="tab-btn active">IMAGEM</button>
                <button className="tab-btn">DETALHES</button>
                <button className="tab-btn">APLICAÇÕES</button>
                <button className="tab-btn">SEMELHANTES</button>
            </div>
            <div className="guide-image-placeholder">
                <ImageIcon />
            </div>
        </div>
        <div className="guide-description">
            <h2>Descrição</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.
            </p>
        </div>
    </div>
);


const EventDetailScreen = () => {
    const [isInventoryOpen, setInventoryOpen] = useState(false);
    return (
        <div className={`screen event-detail-screen ${isInventoryOpen ? 'inventory-open' : ''}`}>
            <div className={`inventory-drawer ${isInventoryOpen ? 'open' : ''}`}>
                <div className="inventory-header">
                    <button onClick={() => setInventoryOpen(false)} className="back-btn"><BackIcon /> Inventário</button>
                </div>
                <div className="inventory-list">
                    <div className="inventory-item">
                        <div className="item-icon"><PlantIcon /></div>
                        <div className="item-users"><FriendsIcon /></div>
                    </div>
                    <div className="inventory-item">
                        <div className="item-icon"><WrenchIcon /></div>
                        <div className="item-users"><FriendsIcon /></div>
                    </div>
                    <div className="inventory-item">
                        <div className="item-icon"><PlantIcon /></div>
                        <div className="item-users"><FriendsIcon /></div>
                    </div>
                    <div className="inventory-item">
                        <div className="item-icon"><WrenchIcon /></div>
                        <div className="item-users"><FriendsIcon /></div>
                    </div>
                </div>
            </div>
            <div className="event-content" onClick={() => isInventoryOpen && setInventoryOpen(false)}>
                <div className="event-main-card">
                    <div className="event-image-placeholder"><ImageIcon /></div>
                    <div className="event-info">
                        <div className="event-meta-top">
                            <span className="event-date"><strong>14</strong> JUL</span>
                            <span className="event-participants"><strong>35</strong> participantes</span>
                            <div className="participant-icons">
                                <UserIcon/><UserIcon/><UserIcon/>
                            </div>
                        </div>
                        <h1 className="event-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                        <button className="signup-btn" onClick={() => setInventoryOpen(true)}>Inscreva-se</button>
                        <div className="event-tags">
                            <span>Tags:</span>
                            <span className="tag"></span><span className="tag"></span><span className="tag"></span>
                        </div>
                    </div>
                </div>
                <div className="event-description">
                    <h2>Descrição</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                </div>
                <div className="event-feed">
                    <h2>Feed</h2>
                    <div className="feed-card">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---
const App = () => {
    const [activePage, setActivePage] = useState('profile');

    const renderPage = () => {
        switch (activePage) {
            case 'map':
                return <MapScreen />;
            case 'guides':
                return <GuideDetailScreen />;
            case 'events':
                return <EventDetailScreen />;
            case 'trail':
                return <TrailScreen />;
            case 'profile':
            default:
                return <ProfileScreen />;
        }
    };
    
    // This is a workaround since this app is in a single file
    // In a real app this would be in an index.css file
    const AppStyles = () => (
      <style>{`
        :root {
          --bg-color: #FFFFFF;
          --app-bg: #F0F4F8;
          --card-bg: #EEF1FA;
          --card-bg-alt: #FFFFFF;
          --text-primary: #3D405B;
          --text-secondary: #6A7A9E;
          --accent-color: #8D99AE;
          --progress-bar-bg: #D9E2EC;
          --progress-bar-fill: #8D99AE;
          --font-family: 'Lexend', sans-serif;
          --icon-color: #6A7A9E;
          --green-accent: #50D194;
        }
        body {
          margin: 0;
          font-family: var(--font-family);
          background-color: var(--app-bg);
          color: var(--text-primary);
        }
        #root {
            display: flex;
            justify-content: center;
        }
        .app-container {
          width: 100%;
          max-width: 420px;
          min-height: 100vh;
          background-color: var(--bg-color);
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 0 20px rgba(0,0,0,0.05);
          padding-bottom: 80px; /* Space for nav bar */
        }
        .screen {
          padding: 1.5rem 1.2rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }
        
        /* --- Bottom Nav --- */
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 420px;
          height: 70px;
          background-color: var(--card-bg-alt);
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
          border-top: 1px solid var(--progress-bar-bg);
          z-index: 100;
        }
        .nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 56px;
          height: 56px;
          transition: background-color 0.2s;
        }
        .nav-btn .icon {
          color: var(--icon-color);
          transition: color 0.2s;
        }
        .nav-btn.active {
          background-color: var(--card-bg);
        }
        .nav-btn.active .icon {
          color: var(--text-primary);
        }

        /* --- Profile Screen --- */
        .profile-screen { gap: 1.5rem; }
        .profile-header { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .profile-avatar-container { position: relative; }
        .profile-avatar { width: 100px; height: 100px; background-color: var(--progress-bar-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .profile-avatar .icon { width: 50px; height: 50px; color: var(--text-secondary); }
        .edit-avatar-btn { position: absolute; bottom: 0; right: 0; background-color: var(--text-primary); color: white; border: 2px solid white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .edit-avatar-btn .icon { width: 16px; height: 16px; }
        .profile-name { font-size: 1.5rem; font-weight: 600; margin: 0; }
        .profile-status { color: var(--text-secondary); margin: 0; font-size: 0.9rem; }
        .featured-badges { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; width: 100%; }
        .badge-card { background-color: var(--card-bg); padding: 1rem; border-radius: 16px; text-align: center; font-size: 0.8rem; font-weight: 500;}
        .badge-icon-container { width: 60px; height: 60px; margin: 0 auto 0.5rem; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .badge-icon-container .icon { width: 32px; height: 32px; }
        .badge-stars { display: flex; justify-content: center; gap: 2px; margin-top: 0.5rem; }
        .profile-nav-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%; }
        .profile-nav-card { background-color: var(--card-bg); padding: 1.25rem; border-radius: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; font-weight: 600; position: relative; }
        .profile-nav-card .icon { color: var(--text-primary); width: 32px; height: 32px; }
        .notification-badge { position: absolute; top: 1rem; right: 1rem; background-color: var(--green-accent); color: white; border-radius: 50%; width: 24px; height: 24px; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; }

        /* --- User Header (shared) --- */
        .user-header { background-color: var(--card-bg); border-radius: 16px; padding: 1rem; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 1rem; width: 100%; }
        .user-avatar-small { width: 48px; height: 48px; background-color: var(--progress-bar-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .user-avatar-small .icon { width: 24px; height: 24px; color: var(--text-secondary); }
        .user-info { display: flex; flex-direction: column; gap: 4px; }
        .user-name { font-weight: 600; }
        .user-rank { display: flex; gap: 2px; }
        .rank-progress { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-secondary); }
        .progress-bar-container { width: 80px; height: 6px; background-color: var(--progress-bar-bg); border-radius: 3px; overflow: hidden; }
        .progress-bar { height: 100%; background-color: var(--progress-bar-fill); border-radius: 3px; }

        /* --- Trail Screen --- */
        .trail-screen { gap: 2rem; }
        .trail-map-container { position: relative; width: 300px; height: 450px; margin: 0 auto; }
        .trail-node { position: absolute; width: 40px; height: 40px; background-color: var(--text-primary); border-radius: 50%; display:flex; align-items:center; justify-content:center; }
        .node-core { width: 16px; height: 16px; background: var(--card-bg); border-radius: 50%; }
        .trail-branch { position: absolute; background-color: var(--text-primary); z-index: -1; }
        .node-1 { top: 10px; left: 60px; }
        .node-2 { top: 140px; left: 60px; }
        .node-3 { top: 80px; left: 180px; }
        .node-4 { top: 180px; left: 230px; }
        .node-5 { top: 250px; left: 130px; }
        .branch-1 { top: 30px; left: 78px; width: 4px; height: 110px; }
        .branch-2 { top: 98px; left: 80px; width: 104px; height: 4px; }
        .branch-3 { top: 100px; left: 198px; width: 4px; height: 100px; }
        .branch-4 { top: 198px; left: 150px; width: 84px; height: 4px; }
        .branch-5 { top: 270px; left: 148px; width: 4px; height: 120px; }
        .trail-reward { position: absolute; background: var(--card-bg); padding: 0.5rem 1rem; border-radius: 12px; display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; font-weight: 500; }
        .reward-1 { bottom: 90px; left: 0; }
        .reward-2 { bottom: 90px; right: 0; }
        .trail-add-node { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 60px; height: 60px; background: white; border: 2px solid var(--text-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .trail-add-node .icon { color: var(--text-primary); width: 32px; height: 32px; }

        /* --- Map Screen --- */
        .map-screen { gap: 2rem; }
        .map-content { flex-grow: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem; }
        .map-message { display: flex; align-items: center; gap: 1rem; background-color: var(--card-bg); padding: 0.75rem 1.25rem; border-radius: 20px 20px 20px 5px; }
        .pause-btn { background-color: var(--text-primary); color: white; border: none; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; }
        .pause-btn .icon { width: 16px; height: 16px; }
        .impression-map { position: relative; width: 250px; height: 250px; display:flex; align-items:center; justify-content:center; }
        .ring { border: 1px solid var(--progress-bar-bg); border-radius: 50%; display:flex; align-items:center; justify-content:center; padding: 20px; }
        .ring-4 { padding: 10px; background: rgba(80, 209, 148, 0.2); }
        .map-user-icon { background-color: var(--green-accent); color: white; width: 48px; height: 48px; border-radius: 50%; display:flex; align-items:center; justify-content:center; }
        .map-user-icon .icon { width: 24px; height: 24px; }
        .pulse-dot { position: absolute; width: 16px; height: 16px; background-color: var(--green-accent); border-radius: 50%; bottom: 45px; right: 60px; border: 3px solid white; box-shadow: 0 0 0 4px var(--green-accent); }
        
        /* --- Guide/Event Detail Screens --- */
        .guide-header, .event-description, .event-feed { width: 100%; text-align: left; }
        .guide-date, .guide-meta { font-size: 0.8rem; color: var(--text-secondary); }
        .guide-title, .event-title { font-size: 1.4rem; margin: 0.5rem 0; }
        .guide-meta a { color: var(--text-primary); text-decoration: none; font-weight: 600; }
        .guide-tags, .event-tags { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem; }
        .tag { width: 30px; height: 16px; background-color: var(--progress-bar-bg); border-radius: 8px; }
        .guide-content-card { width: 100%; background-color: var(--card-bg); border-radius: 16px; padding: 1rem; margin: 1.5rem 0; }
        .guide-tabs { display: flex; border-bottom: 1px solid var(--progress-bar-bg); margin-bottom: 1rem; }
        .tab-btn { background: none; border: none; padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); border-bottom: 2px solid transparent; cursor: pointer; }
        .tab-btn.active { color: var(--text-primary); border-bottom-color: var(--text-primary); }
        .guide-image-placeholder, .event-image-placeholder { width: 100%; height: 180px; background-color: var(--progress-bar-bg); border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .guide-image-placeholder .icon, .event-image-placeholder .icon { width: 60px; height: 60px; color: var(--text-secondary); }
        .guide-description h2, .event-description h2, .event-feed h2 { margin-bottom: 0.5rem; font-size: 1rem; }
        .guide-description p, .event-description p { font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0; }
        
        /* --- Event Screen --- */
        .event-detail-screen { overflow-x: hidden; position: relative; }
        .event-main-card { display: grid; grid-template-columns: 100px 1fr; gap: 1rem; width: 100%; }
        .event-info { display: flex; flex-direction: column; text-align: left; }
        .event-meta-top { display: flex; align-items: center; gap: 0.75rem; font-size: 0.8rem; }
        .event-date { display:flex; flex-direction:column; align-items:center; line-height: 1; }
        .participant-icons { display: flex; }
        .participant-icons .icon { width: 18px; height: 18px; border-radius: 50%; background: var(--progress-bar-bg); color: var(--text-secondary); margin-left: -6px; border: 1px solid white; }
        .event-title { font-size: 1rem; margin: 0.75rem 0; }
        .signup-btn { background-color: var(--card-bg); border: 1px solid var(--progress-bar-bg); border-radius: 10px; padding: 0.75rem; font-weight: 600; cursor: pointer; text-align: center; margin-bottom: 0.75rem; }
        .event-description, .event-feed { margin-top: 1.5rem; }
        .feed-card { background-color: var(--card-bg); padding: 1rem; border-radius: 12px; font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); }

        /* --- Inventory Drawer --- */
        .inventory-drawer {
          position: fixed;
          top: 0;
          left: 0;
          width: 75%;
          max-width: 300px;
          height: 100%;
          background-color: var(--card-bg);
          box-shadow: 4px 0 15px rgba(0,0,0,0.1);
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
          z-index: 200;
          padding: 1.5rem 1rem;
          box-sizing: border-box;
        }
        .inventory-drawer.open { transform: translateX(0); }
        .event-content { transition: transform 0.3s ease-in-out; }
        .event-detail-screen.inventory-open .event-content { transform: translateX(calc(75% + 1rem)); }

        .inventory-header { display: flex; align-items: center; font-size: 1.2rem; font-weight: 600; margin-bottom: 2rem; }
        .back-btn { background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; font: inherit; padding: 0; }
        .inventory-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .inventory-item { background: white; border-radius: 12px; padding: 1rem; position: relative; height: 80px; }
        .item-icon { width: 48px; height: 48px; background: var(--progress-bar-bg); color: var(--text-primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; }
        .item-icon .icon { width: 28px; height: 28px; }
        .item-users { position: absolute; bottom: 0.5rem; right: 0.5rem; }
        .item-users .icon { width: 20px; height: 20px; color: var(--text-secondary); }
      `}</style>
    );

    return (
        <div className="app-container">
            <AppStyles />
            {renderPage()}
            <nav className="bottom-nav">
                <button className={`nav-btn ${activePage === 'map' ? 'active' : ''}`} onClick={() => setActivePage('map')} aria-label="Mapa">
                    <TreeRingIcon className="icon" />
                </button>
                <button className={`nav-btn ${activePage === 'guides' ? 'active' : ''}`} onClick={() => setActivePage('guides')} aria-label="Guias">
                    <GuidesIcon className="icon" />
                </button>
                <button className={`nav-btn ${activePage === 'events' ? 'active' : ''}`} onClick={() => setActivePage('events')} aria-label="Eventos">
                    <EventsIcon className="icon" />
                </button>
                <button className={`nav-btn ${activePage === 'profile' ? 'active' : ''}`} onClick={() => setActivePage('profile')} aria-label="Perfil">
                    <UserIcon className="icon" />
                </button>
            </nav>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
