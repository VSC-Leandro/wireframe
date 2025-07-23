import React from 'react';

/**
 * Componente que injeta todos os estilos CSS globais da aplicação.
 * Manter os estilos aqui centraliza a estilização e a separa da lógica dos componentes.
 */
export const AppStyles = () => (
  <style>{`
    :root {
      --bg-color: #FFFFFF;
      --app-bg: #F0F4F8;
      --card-bg: #EEF1FA;
      --card-bg-highlighted: #d1dcf4;
      --card-bg-alt: #FFFFFF;
      --text-primary: #3D405B;
      --text-secondary: #6A7A9E;
      --accent-color: #8D99AE;
      --primary-action: #605C8D;
      --primary-action-text: #FFFFFF;
      --error-color: #E53935;
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
        height: 100vh;
    }
    
    /* --- Global Scrollbar Hiding --- */
    * {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    *::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }

    .app-container {
      width: 100%;
      max-width: 420px;
      height: 100%;
      background-color: var(--bg-color);
      display: flex;
      flex-direction: column;
      position: relative;
      box-shadow: 0 0 20px rgba(0,0,0,0.05);
    }
    .main-content {
      flex-grow: 1;
      overflow-y: auto;
      padding-bottom: 70px; /* Space for nav bar */
      display: flex;
      flex-direction: column;
    }
    .screen {
      padding: 1.5rem 1.2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
    }
    .screen-title {
        width: 100%;
        text-align: left;
        font-size: 1.8rem;
        margin: 0 0 1rem 0;
        font-weight: 700;
    }
    
    /* --- Login Screen --- */
    .login-screen {
        justify-content: center;
        gap: 1rem;
        padding: 2rem;
        height: 100%;
        box-sizing: border-box;
    }
    .login-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-primary);
        margin: 0;
    }
    .login-subtitle {
        font-size: 1rem;
        color: var(--text-secondary);
        margin: 0 0 2rem 0;
    }
    .login-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .input-group label {
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--text-secondary);
    }
    .input-group input {
        padding: 0.8rem 1rem;
        border: 1px solid var(--progress-bar-bg);
        border-radius: 8px;
        font-size: 1rem;
        font-family: inherit;
        color: var(--text-primary);
        background-color: #F8F9FD;
    }
    .input-group input:focus {
        outline: none;
        border-color: var(--primary-action);
        box-shadow: 0 0 0 2px rgba(96, 92, 141, 0.2);
    }
    .login-button {
        padding: 1rem;
        border: none;
        border-radius: 8px;
        background-color: var(--primary-action);
        color: var(--primary-action-text);
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        margin-top: 1rem;
    }
    .login-error {
        color: var(--error-color);
        font-size: 0.9rem;
        text-align: center;
        margin: -0.5rem 0 0 0;
    }

    /* --- Bottom Nav --- */
    .bottom-nav {
      position: absolute;
      bottom: 0;
      left: 0;
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
    .nav-btn svg {
      color: var(--icon-color);
      transition: color 0.2s;
    }
    .nav-btn.active {
      background-color: var(--card-bg);
    }
    .nav-btn.active svg {
      color: var(--text-primary);
    }

    /* --- Profile Screen --- */
    .profile-screen {
        gap: 0.75rem;
        padding: 1.5rem 1.2rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .profile-name-header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 0.25rem;
        min-height: 44px;
    }
    .profile-name { 
        font-size: 1.25rem; 
        font-weight: 600; 
        margin: 0; 
    }
    .profile-header { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; margin-bottom: 0; }
    .profile-avatar-container { position: relative; }
    .profile-avatar { width: 120px; height: 120px; background-color: #A9B4C9; border-radius: 50%; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .profile-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .profile-avatar svg { width: 60px; height: 60px; color: var(--bg-color); }
    .edit-avatar-btn { 
        position: absolute; 
        bottom: 5px; right: 5px; 
        background-color: #D8DEE9; 
        color: #3D405B;
        border: 3px solid var(--bg-color); 
        border-radius: 50%; 
        width: 32px; 
        height: 32px; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        cursor: pointer;
        padding: 0;
    }
    .edit-avatar-btn svg { width: 16px; height: 16px; }

    .profile-status-container {
        width: 100%;
        min-height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .profile-status {
        color: var(--text-secondary);
        margin: 0;
        font-size: 0.9rem;
        font-style: italic;
        cursor: pointer;
        padding: 8px 12px;
        border-radius: 8px;
        transition: background-color 0.2s;
    }
    .profile-status:hover {
        background-color: var(--card-bg);
    }
    .status-editor { display: flex; gap: 0.5rem; width: 100%; max-width: 300px; justify-content: center; align-items: center; }
    .status-edit-input {
        font-size: 0.9rem;
        font-style: italic;
        font-family: inherit;
        border: none;
        border-bottom: 2px solid var(--primary-action);
        background: transparent;
        text-align: center;
        flex-grow: 1;
        padding: 4px 0;
        color: var(--text-primary);
    }
    .status-edit-input:focus { outline: none; }
    .save-status-btn {
        background: var(--primary-action);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .save-status-btn svg { width: 18px; height: 18px; }

    .featured-badges { 
        display: grid; 
        grid-template-columns: repeat(3, 1fr); 
        gap: 1rem; 
        width: 100%; 
        align-items: start;
        margin-top: auto;
    }
    .badge-card { 
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
        background-color: transparent; 
        padding: 0; 
        border-radius: 0;
        text-align: center; 
        font-size: 0.8rem; 
        font-weight: 500;
    }
    .badge-illustration {
        width: 100%;
        max-width: 96px;
        aspect-ratio: 1 / 1;
        border-radius: 16px; 
        display: flex; 
        align-items: center; 
        justify-content: center;
        overflow: hidden;
    }
    .badge-illustration svg {
        width: 100%;
        height: 100%;
    }
    .badge-card p {
        margin: 0;
        color: var(--text-primary);
    }
    .badge-rating {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 4px 10px;
        border-radius: 12px;
        min-height: 24px;
        box-sizing: border-box;
    }
    .badge-rating.rating-dark {
        background-color: #2F3349;
    }
    .badge-rating.rating-green {
        background-color: #36A376;
    }
    .badge-rating svg {
        width: 12px;
        height: 12px;
    }
    .profile-nav-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        width: 100%;
    }
    .profile-nav-card { background-color: var(--card-bg-highlighted); padding: 1.25rem; border-radius: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; font-weight: 600; position: relative; transition: background-color 0.2s; }
    .profile-nav-card:hover { background-color: #c1cde4; }
    .profile-nav-card svg { color: var(--text-primary); width: 32px; height: 32px; }
    .notification-badge { position: absolute; top: 1rem; right: 1rem; background-color: var(--green-accent); color: white; border-radius: 50%; width: 24px; height: 24px; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; font-weight: 500;}


    /* --- User Header (shared) --- */
    .user-header { background-color: var(--card-bg); border-radius: 16px; padding: 1rem; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 1rem; width: 100%; }
    .user-avatar-small { width: 48px; height: 48px; background-color: var(--progress-bar-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .user-avatar-small img { width: 100%; height: 100%; object-fit: cover; }
    .user-avatar-small svg { width: 24px; height: 24px; color: var(--text-secondary); }
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
    .trail-add-node svg { color: var(--text-primary); width: 32px; height: 32px; }

    /* --- Map Screen --- */
    .map-screen {
      padding: 1.5rem 1.2rem;
      gap: 1.5rem;
      flex-grow: 1;
    }
    .map-container {
      flex-grow: 1;
      width: 100%;
      border-radius: 16px;
      overflow: hidden;
      position: relative;
    }
    .leaflet-container {
      height: 100%;
      width: 100%;
    }
    .map-error-banner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: var(--error-color);
      color: white;
      padding: 0.5rem;
      text-align: center;
      font-size: 0.9rem;
      z-index: 1001; /* Above map */
    }
    .report-fab {
      position: absolute;
      bottom: 2rem;
      right: 1.5rem;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: var(--primary-action);
      color: white;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      cursor: pointer;
      z-index: 1000;
    }
    .report-fab:disabled {
        background-color: var(--accent-color);
        cursor: not-allowed;
    }
    .report-fab svg {
      width: 32px;
      height: 32px;
    }
    .report-modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
    }
    .report-modal {
      background-color: var(--bg-color);
      padding: 1.5rem;
      border-radius: 16px;
      width: 90%;
      max-width: 340px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      position: relative;
      text-align: center;
    }
    .report-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    .report-modal-header h2 {
        margin: 0;
        font-size: 1.25rem;
    }
    .close-modal-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.25rem;
    }
    .close-modal-btn svg {
        width: 28px;
        height: 28px;
        color: var(--text-secondary);
    }
    .report-options-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
    .report-option-btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 8px;
        transition: background-color 0.2s;
        font-family: inherit;
        font-size: 0.9rem;
        color: var(--text-primary);
    }
    .report-option-btn:hover {
        background-color: var(--card-bg);
    }
    .report-option-btn svg {
        width: 40px;
        height: 40px;
        padding: 0.75rem;
        border-radius: 50%;
        background-color: var(--card-bg);
        color: var(--primary-action);
    }
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(22, 160, 133, 0.7); }
        70% { box-shadow: 0 0 0 20px rgba(22, 160, 133, 0); }
        100% { box-shadow: 0 0 0 0 rgba(22, 160, 133, 0); }
    }
    .user-location-marker {
        width: 20px;
        height: 20px;
        background-color: #16A085;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
        animation: pulse 2s infinite;
    }
    .report-marker-icon {
        width: 40px;
        height: 40px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    .report-marker-icon svg {
      transform: rotate(45deg);
      width: 20px;
      height: 20px;
      color: white;
    }
    .report-marker-queimada { background-color: #E74C3C; }
    .report-marker-desmatamento { background-color: #9B59B6; }
    .report-marker-enchente { background-color: #3498DB; }


    /* --- Guides List Screen --- */
    .guides-list-screen { gap: 1rem; }
    .search-bar {
        width: 100%;
        position: relative;
        margin-bottom: 1rem;
    }
    .search-bar input {
        width: 100%;
        padding: 0.8rem 1rem 0.8rem 2.5rem;
        border: 1px solid var(--progress-bar-bg);
        border-radius: 12px;
        font-size: 1rem;
        font-family: inherit;
        color: var(--text-primary);
        background-color: #F8F9FD;
        box-sizing: border-box;
    }
    .search-bar svg {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-secondary);
        width: 20px;
        height: 20px;
    }
    .guides-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    .guide-list-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background-color: var(--card-bg-highlighted);
        border-radius: 12px;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .guide-list-item:hover { background-color: #c1cde4; }
    .guide-item-icon {
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(96, 92, 141, 0.1);
    }
    .guide-item-icon svg {
        color: var(--primary-action);
    }
    .guide-item-info h3 {
        margin: 0 0 0.25rem 0;
        font-size: 1rem;
        font-weight: 600;
    }
    .guide-item-info p {
        margin: 0;
        font-size: 0.9rem;
        color: var(--text-secondary);
    }


    /* --- Guide/Event Detail Screens --- */
    .detail-header {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 0.5rem;
    }
    .back-btn-detail {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        margin-left: -0.5rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-weight: 600;
        color: var(--text-primary);
    }
    .back-btn-detail svg {
        color: var(--text-primary);
        width: 24px;
        height: 24px;
    }
    .guide-header, .event-description, .event-feed { width: 100%; text-align: left; }
    .guide-date, .guide-meta { font-size: 0.8rem; color: var(--text-secondary); }
    .guide-title, .event-title { font-size: 1.4rem; margin: 0.5rem 0; }
    .guide-meta a { color: var(--text-primary); text-decoration: none; font-weight: 600; }
    .guide-tags, .event-tags { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem; }
    .tag { width: 30px; height: 16px; background-color: var(--progress-bar-bg); border-radius: 8px; }
    .guide-content-card { width: 100%; background-color: var(--card-bg-highlighted); border-radius: 16px; padding: 1rem; margin: 1.5rem 0; }
    .guide-tabs { display: flex; border-bottom: 1px solid var(--progress-bar-bg); margin-bottom: 1rem; }
    .tab-btn { background: none; border: none; padding: 0.5rem 1rem; font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); border-bottom: 2px solid transparent; cursor: pointer; }
    .tab-btn.active { color: var(--text-primary); border-bottom-color: var(--text-primary); }
    .guide-image-placeholder { width: 100%; height: 180px; background-color: var(--progress-bar-bg); border-radius: 12px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .guide-image-placeholder img { width: 100%; height: 100%; object-fit: cover; }
    .guide-image-placeholder svg { width: 60px; height: 60px; color: var(--text-secondary); }
    .guide-description h2, .event-description h2, .event-feed h2 { margin-bottom: 0.5rem; font-size: 1rem; }
    .guide-description p, .event-description p { font-size: 0.9rem; line-height: 1.6; color: var(--text-secondary); margin-top: 0; }
    
    /* --- Event List Screen --- */
    .events-list-screen { gap: 1.5rem; }
    .section-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0 0.5rem 0;
    }
    .section-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
    }
    .section-title small {
        display: block;
        font-size: 1rem;
        font-weight: 400;
        color: var(--text-secondary);
    }
    .view-all-btn {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: none;
        border: none;
        color: var(--text-primary);
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
    }
    .view-all-btn svg {
        width: 18px;
        height: 18px;
    }
    .popular-events-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }
    .event-card-item {
        display: grid;
        grid-template-columns: 80px 1fr;
        gap: 1rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 12px;
        transition: background-color 0.2s;
    }
    .event-card-item:hover {
        background-color: var(--card-bg);
    }
    .event-card-image {
        width: 80px;
        height: 80px;
        border-radius: 12px;
        background-color: var(--card-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .event-card-image img { width: 100%; height: 100%; object-fit: cover; }
    .event-card-image svg {
        width: 40px;
        height: 40px;
        color: var(--primary-action);
    }
    .event-card-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .event-card-info h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 0 0 0.25rem 0;
    }
    .event-card-info p {
        font-size: 0.85rem;
        color: var(--text-secondary);
        margin: 0;
    }

    .category-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
        width: 100%;
    }
    .category-card {
        background-color: var(--card-bg);
        border-radius: 12px;
        padding: 1rem 0.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .category-card:hover {
        background-color: var(--card-bg-highlighted);
    }
    .category-card svg {
        width: 28px;
        height: 28px;
        color: var(--primary-action);
    }
    .category-card h3 {
        margin: 0.5rem 0 0 0;
        font-size: 1rem;
        font-weight: 600;
    }
    .category-card p {
        margin: 0;
        font-size: 0.9rem;
        color: var(--text-secondary);
    }

    /* --- Event Detail Screen --- */
    .event-detail-screen {
        padding: 1.5rem 1.2rem 0 1.2rem;
        gap: 1.5rem;
        display: flex;
        flex-direction: column;
        height: 100%;
        box-sizing: border-box;
    }
    .event-main-card { 
        display: grid; 
        grid-template-columns: 100px 1fr; 
        gap: 0.5rem 1rem;
        width: 100%;
        grid-template-areas: 
            "image info"
            "button info";
        flex-shrink: 0;
    }
    .event-image-placeholder {
        grid-area: image;
        width: 100px;
        height: 100px;
        background-color: var(--card-bg);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .event-image-placeholder svg {
        width: 50px;
        height: 50px;
        color: var(--primary-action);
    }
    .event-info { 
      grid-area: info;
      display: flex; 
      flex-direction: column; 
      text-align: left;
      justify-content: space-between;
    }
    .event-meta-top { display: flex; align-items: center; gap: 0.75rem; font-size: 0.8rem; }
    .event-date, .event-participants-box {
      background-color: var(--card-bg);
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
    }
    .event-date {
      flex-direction:column; 
      line-height: 1; 
    }
    .event-date span { 
      font-weight: 400; 
      font-size: 0.75rem;
      margin-top: 2px;
    }
    .event-participants-box {
        gap: 0.75rem;
        font-weight: 500;
    }
    .event-participants-box .separator {
        color: var(--accent-color);
        font-weight: 100;
    }
    .event-participants-box span {
        white-space: nowrap;
    }
    .event-participants-box strong {
        font-weight: 700;
    }
    .participant-icons { display: flex; align-items: center; }
    .participant-icons img { width: 18px; height: 18px; border-radius: 50%; object-fit: cover; margin-left: -6px; border: 1px solid white; }
    .event-title { font-size: 1.2rem; margin: 0.75rem 0; line-height: 1.3; }
    .signup-btn { 
      grid-area: button;
      background-color: var(--card-bg);
      border: none;
      border-radius: 10px; 
      padding: 0.6rem;
      font-weight: 600; 
      cursor: pointer; 
      text-align: center; 
      font-family: inherit;
      font-size: 0.9rem;
      color: var(--text-primary);
      margin-top: 0.5rem;
    }
    .event-description, .event-feed { margin-top: 0; }
    .feed-card { background-color: var(--card-bg); padding: 1rem; border-radius: 12px; font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); }

    .event-body-columns {
        display: grid;
        gap: 1.5rem;
        align-items: start;
        flex-grow: 1;
        min-height: 0;
        transition: grid-template-columns 0.35s ease-in-out;
        margin-left: -1.2rem;
        margin-right: -1.2rem;
    }
    .event-body-columns.inventory-open {
        grid-template-columns: 140px 1fr;
    }
    .event-body-columns.inventory-closed {
        grid-template-columns: 60px 1fr;
    }
    .inventory-column {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        background-color: var(--card-bg);
        border-radius: 0 16px 16px 0;
        padding: 1rem;
        height: 100%;
        box-sizing: border-box;
        transition: padding 0.35s ease-in-out;
        overflow: hidden;
    }
    .inventory-column.closed {
        padding: 1rem 0;
        align-items: center;
    }
    .details-column {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        height: 100%;
        overflow-y: auto;
        padding-right: 1.2rem;
        min-height: 0;
    }
    .inventory-header {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-primary);
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        width: 100%;
        flex-shrink: 0;
    }
    .inventory-header.closed {
      justify-content: center;
    }
    .inventory-header h3 {
        margin: 0;
        font: inherit;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
    .inventory-header svg {
        width: 24px;
        height: 24px;
    }
    .inventory-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow-y: auto;
        padding-right: 4px;
    }
    .inventory-entry {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
    }
    .inventory-item-card {
        background-color: var(--card-bg-alt);
        border-radius: 12px;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        box-sizing: border-box;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }
    .item-icon { 
      width: 48px; 
      height: 48px; 
      background: var(--card-bg); 
      color: var(--text-primary); 
      border-radius: 8px; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
    }
    .item-icon svg { width: 28px; height: 28px; }
    .item-users { 
        display:flex;
        align-items:center;
        justify-content: center;
    }
    .item-participant-icons {
        display: flex;
        align-items: center;
    }
    .item-participant-icons svg {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--progress-bar-bg);
        border: 2px solid var(--bg-color);
        margin-left: -10px;
        color: var(--text-secondary);
        padding: 3px;
        box-sizing: border-box;
    }
    .item-participant-icons svg:first-child {
        margin-left: 0;
    }

    /* --- All Events Timeline Screen --- */
    .all-events-screen { gap: 1rem; padding-top: 0.5rem; }
    .timeline-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .timeline-group {
        display: flex;
        gap: 1rem;
        position: relative;
    }
    .timeline-line-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
    }
    .timeline-dot {
        width: 16px;
        height: 16px;
        background-color: var(--bg-color);
        border: 4px solid var(--accent-color);
        border-radius: 50%;
        z-index: 1;
    }
    .timeline-line {
        width: 2px;
        background-color: var(--progress-bar-bg);
        flex-grow: 1;
    }
    .timeline-content {
        padding-bottom: 2.5rem;
        flex-grow: 1;
    }
    .timeline-date-header {
        padding-top: 2px;
        margin-bottom: 1rem;
        font-weight: 600;
    }
    .timeline-date-header span {
        font-weight: 400;
        color: var(--text-secondary);
    }
    .timeline-event-card {
        background-color: var(--card-bg);
        border-radius: 12px;
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 80px;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1rem;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .timeline-event-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    .timeline-event-info p {
        margin: 0;
        font-size: 0.9rem;
    }
    .timeline-event-info p.time {
        text-transform: uppercase;
        font-weight: 600;
        color: var(--primary-action);
        margin-bottom: 0.5rem;
    }
    .timeline-event-info h3 {
        margin: 0 0 0.75rem 0;
        font-size: 1.1rem;
        font-weight: 600;
    }
    .timeline-event-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 0.9rem;
        color: var(--text-secondary);
    }
    .timeline-event-details > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .timeline-event-details svg {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
    }
    .timeline-event-participants {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .timeline-participant-avatars {
        display: flex;
    }
    .timeline-participant-avatars img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 2px solid var(--bg-color);
        margin-left: -8px;
        object-fit: cover;
    }
    .timeline-participant-avatars img:first-child {
        margin-left: 0;
    }
    .timeline-participant-count {
        font-size: 0.8rem;
    }
    .timeline-event-image {
        width: 80px;
        height: 100px;
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--card-bg);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .timeline-event-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .timeline-event-image svg {
        width: 40px;
        height: 40px;
        color: var(--primary-action);
    }

  `}</style>
);