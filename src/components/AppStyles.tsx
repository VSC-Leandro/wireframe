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
      --yellow-accent: #F5B945;
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
      overflow: hidden;
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
      position: relative;
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
        flex-shrink: 0;
    }
    .profile-name { 
        font-size: 1.25rem; 
        font-weight: 600; 
        margin: 0; 
    }
    .profile-header { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; margin-bottom: 0; flex-shrink: 0; }
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
        flex-shrink: 0;
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

    .profile-bottom-content {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    .featured-badges { 
        display: grid; 
        grid-template-columns: repeat(3, 1fr); 
        gap: 1rem; 
        width: 100%; 
        align-items: start;
    }
    .badge-card { 
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem; /* Space between icon and info block */
        background-color: transparent; 
        padding: 0; 
        border-radius: 0;
        text-align: center; 
        font-size: 0.8rem; 
        font-weight: 500;
        cursor: pointer;
    }
    .badge-info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .badge-card.empty {
        cursor: default;
    }
    .badge-card.empty .badge-illustration {
        background-color: var(--card-bg);
        opacity: 0.6;
    }
    .badge-card.empty .badge-illustration svg {
        width: 40%;
        height: 40%;
        color: var(--text-secondary);
    }
    .badge-card.empty p {
        color: var(--text-secondary);
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
        font-weight: 600;
        font-size: 0.85rem;
        line-height: 1.3;
        min-height: 34px; /* 2 lines, for layout consistency */
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 2px; /* Small space so rating bg doesn't touch text */
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
        margin-top: -6px; /* Pulls the rating up, "sticking" it to the title */
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

    /* --- Profile Review Modal --- */
    .profile-review-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .profile-review-modal {
        background-color: var(--bg-color);
        border-radius: 16px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.15);
        width: 90%;
        max-width: 380px;
        max-height: 80vh;
        display: flex;
        flex-direction: column;
        animation: slide-up 0.3s ease-out;
    }
    .profile-review-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--progress-bar-bg);
        flex-shrink: 0;
    }
    .profile-review-modal-header h2 {
        font-size: 1.1rem;
        margin: 0;
        flex-grow: 1;
        padding-right: 1rem;
    }
    .profile-review-modal-header button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        color: var(--text-secondary);
    }
    .profile-review-modal-header button svg {
        width: 28px;
        height: 28px;
    }
    .profile-review-modal-content {
        padding: 1.5rem;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .review-item {
        border-bottom: 1px solid var(--progress-bar-bg);
        padding-bottom: 1rem;
    }
    .review-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
    .review-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;
    }
    .review-user {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
        font-size: 0.9rem;
    }
    .review-user svg {
        width: 24px;
        height: 24px;
        color: var(--text-secondary);
    }
    .review-rating {
        display: flex;
        gap: 2px;
    }
    .review-rating svg {
      width: 14px;
      height: 14px;
    }
    .review-comment {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.5;
        color: var(--text-secondary);
    }

    /* --- User Header (shared) --- */
    .user-header { background-color: var(--card-bg); border-radius: 16px; padding: 1rem; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 1rem; width: 100%; cursor: pointer; }
    .user-avatar-small { width: 48px; height: 48px; background-color: var(--progress-bar-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .user-avatar-small img { width: 100%; height: 100%; object-fit: cover; }
    .user-avatar-small svg { width: 24px; height: 24px; color: var(--text-secondary); }
    .user-info { display: flex; flex-direction: column; gap: 4px; }
    .user-name { font-weight: 600; }
    .user-rank { display: flex; gap: 2px; }
    .rank-progress { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: var(--text-secondary); }
    .progress-bar-container { width: 80px; height: 6px; background-color: var(--progress-bar-bg); border-radius: 3px; overflow: hidden; }
    .progress-bar { height: 100%; background-color: var(--progress-bar-fill); border-radius: 3px; }

    /* --- New Trail Screen --- */
    .trail-screen { 
        padding: 1.5rem 0.5rem 0 0.5rem; 
        gap: 1rem;
        flex-grow: 1;
        overflow: hidden;
    }
    .trail-screen .user-header {
      margin: 0 0.7rem;
      width: calc(100% - 1.4rem);
    }
    .trail-history-container {
        flex-grow: 1;
        width: 100%;
        position: relative;
        overflow-y: scroll;
        padding-bottom: 80px;
    }
    .trail-canvas {
        position: relative;
        width: 100%;
        min-height: 150vh;
    }
    .trail-connections {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .trail-connections path {
        stroke: var(--accent-color);
        stroke-width: 3;
        fill: none;
    }
    .trail-node {
        position: absolute;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .trail-node:hover {
        transform: scale(1.1);
        box-shadow: 0 0 15px rgba(96, 92, 141, 0.3);
    }
    .trail-node .node-icon-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4px solid var(--bg-color);
        box-shadow: 0 3px 6px rgba(0,0,0,0.15);
        overflow: hidden;
    }
    .trail-node svg { 
        color: white; 
        width: 24px;
        height: 24px;
    }
    .node-type-creation .node-icon-wrapper,
    .node-type-event .node-icon-wrapper { background-color: var(--text-primary); }
    .node-type-glossary .node-icon-wrapper { background-color: #3498DB; }
    .node-type-knowledge .node-icon-wrapper { background-color: var(--yellow-accent); }
    .node-type-reward .node-icon-wrapper { background-color: var(--green-accent); }

    /* Trail Dock */
    .trail-dock {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70px;
        background: var(--bg-color);
        border-top: 1px solid var(--progress-bar-bg);
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 10;
        padding: 0 1rem;
        gap: 0.5rem;
    }
    .dock-button {
        background: var(--card-bg);
        border: none;
        border-radius: 12px;
        padding: 0.5rem 0.75rem;
        font-family: inherit;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-primary);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    .dock-button:hover { background-color: var(--card-bg-highlighted); }
    .dock-button.add-manual { background-color: var(--text-primary); color: white; min-width: 48px; height: 48px; border-radius: 50%; justify-content: center; padding: 0; }
    .dock-button.add-manual svg { width: 28px; height: 28px; }
    .dock-button svg { width: 20px; height: 20px; }

    /* --- Modals (Saberes & Recompensas) --- */
    .trail-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.4);
        z-index: 200;
        display: flex;
        align-items: flex-end;
    }
    .trail-modal {
        width: 100%;
        height: 90%;
        background-color: var(--app-bg);
        border-radius: 24px 24px 0 0;
        box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
        display: flex;
        flex-direction: column;
        transform: translateY(100%);
        animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes slide-up {
        to { transform: translateY(0); }
    }
    .trail-modal-header {
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--progress-bar-bg);
        background: white;
        border-radius: 24px 24px 0 0;
    }
    .trail-modal-header h2 { font-size: 1.25rem; margin: 0; }
    .trail-modal-header p { margin: 0; color: var(--text-secondary); font-weight: 500; }
    .trail-modal-content {
        flex-grow: 1;
        overflow-y: hidden;
        padding: 1rem 0 1.5rem;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
    
    /* Saberes Modal - Drag & Drop */
    .saberes-inventory { gap: 1rem; width: 100%; }
    .saberes-inventory-header {
      padding: 0 1.5rem 1rem;
      border-bottom: 1px solid var(--progress-bar-bg);
    }
    .saberes-inventory-header h3 { margin: 0 0 0.5rem 0; font-size: 1rem; }
    .saberes-inventory-header p { margin: 0; font-size: 0.9rem; color: var(--text-secondary); }
    .equipped-saberes-slots {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
      margin: 1rem auto 0;
      width: 100%;
      max-width: 280px;
    }
    .saber-slot {
      aspect-ratio: 1 / 1;
      border: 2px dashed var(--accent-color);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--card-bg);
      transition: background-color 0.2s, border-color 0.2s;
    }
    .saber-slot.drag-over {
      background-color: var(--card-bg-highlighted);
      border-color: var(--primary-action);
      transform: scale(1.05);
    }
    .saber-slot > .plus-icon {
        color: var(--accent-color);
        width: 30%;
        height: 30%;
    }
    /* Style for equipped saber item */
    .equipped-saber-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem; /* Space between slot and title */
    }

    .equipped-saber-title {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-primary);
        text-align: center;
        margin: 0;
        width: 100%;
    }

    .saber-slot .saber-item-equipped-icon {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: grab;
    }

    .saber-slot .saber-item-equipped-icon:active {
        cursor: grabbing;
    }
    
    .saber-slot .saber-item-icon {
        width: 60%;
        height: 60%;
    }

    
    .saberes-list-container {
        padding: 1rem 1.5rem 0;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-height: 0;
    }
    .saberes-list-container h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
        flex-shrink: 0;
    }
    .saberes-list {
        flex-grow: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    .saber-item { 
      display: flex; 
      gap: 1rem; 
      align-items: center; 
      background: white; 
      padding: 0.75rem 1rem; 
      border-radius: 12px; 
      cursor: grab;
      transition: opacity 0.2s, box-shadow 0.2s, background-color 0.2s;
      user-select: none;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      flex-shrink: 0;
    }
    .saber-item:active {
        cursor: grabbing;
    }
    .saber-item.dragging {
      opacity: 0.5;
      background: var(--card-bg-highlighted);
      box-shadow: 0 4px 12px rgba(96, 92, 141, 0.3);
    }
    .saber-item-icon { 
      flex-shrink: 0;
      width: 48px; 
      height: 48px; 
      border-radius: 50%; 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      background-color: var(--card-bg);
    }
    .saber-item-icon svg { color: var(--text-primary); width: 24px; height: 24px; }
    .saber-item-info { flex-grow: 1; }
    .saber-item-info h3 { margin: 0 0 0.1rem; font-size: 1rem; font-weight: 600; }
    .saber-item-info p { margin: 0; font-size: 0.8rem; color: var(--text-secondary); }
    .saber-equip-btn { display: none; }

    /* --- Saber Detail View --- */
    .saber-detail-view {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: var(--bg-color);
    }
    .saber-detail-view .back-btn-detail {
        padding-left: 1.5rem;
    }
    .saber-detail-content {
      flex-grow: 1;
      overflow-y: auto;
      padding: 0 1.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .saber-detail-main-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: var(--card-bg);
        padding: 1rem;
        border-radius: 12px;
    }
    .saber-detail-main-info .saber-item-icon {
      width: 64px;
      height: 64px;
    }
    .saber-detail-main-info .saber-item-icon svg { width: 32px; height: 32px; }
    .saber-detail-title {
        font-size: 1.4rem;
        line-height: 1.3;
        font-weight: 700;
        margin: 0;
    }
    .saber-detail-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    .saber-stat-card {
        background: var(--card-bg);
        padding: 1rem;
        border-radius: 12px;
        text-align: center;
    }
    .saber-stat-card dt {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-secondary);
        text-transform: uppercase;
        margin-bottom: 0.25rem;
    }
    .saber-stat-card dd {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-action);
    }
    .saber-detail-description, .saber-detail-history {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .saber-detail-description h3, .saber-detail-history h3 {
        margin: 0;
        font-size: 1.1rem;
    }
    .saber-detail-description p {
        margin: 0;
        line-height: 1.6;
        color: var(--text-secondary);
        font-size: 0.95rem;
        background: var(--card-bg);
        padding: 1rem;
        border-radius: 12px;
    }
    .history-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    .history-item {
        background-color: var(--card-bg);
        padding: 0.75rem 1rem;
        border-radius: 12px;
        font-size: 0.9rem;
    }
    .history-item p { margin: 0; }
    .history-item .history-date {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--primary-action);
    }


    /* Recompensas Modal */
    .recompensas-store { display: flex; flex-direction: column; gap: 2rem; }
    .recompensa-category h3 { margin: 0 0 1rem 0; font-size: 1.1rem; }
    .recompensa-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
    .recompensa-item { display: grid; grid-template-columns: auto 1fr; gap: 1rem; background: white; padding: 1rem; border-radius: 12px; }
    .recompensa-item.unlocked, .recompensa-item.locked { opacity: 0.7; }
    .recompensa-item-icon { width: 64px; height: 64px; border-radius: 12px; background: var(--card-bg); display: flex; align-items: center; justify-content: center; }
    .recompensa-item-icon svg { width: 32px; height: 32px; color: var(--primary-action); }
    .recompensa-item-info h4 { margin: 0; font-size: 1rem; }
    .recompensa-item-info .recompensa-req { font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); background: var(--card-bg); padding: 2px 6px; border-radius: 6px; display: inline-block; margin: 0.25rem 0 0.5rem; }
    .recompensa-item-info p { margin: 0; font-size: 0.85rem; color: var(--text-secondary); }
    .recompensa-unlock-btn { grid-column: 1 / -1; margin-top: 0.5rem; width: 100%; padding: 0.75rem; border-radius: 8px; border: none; font-weight: 600; cursor: pointer; background: var(--green-accent); color: white; }
    .recompensa-unlock-btn:disabled { background: var(--accent-color); cursor: not-allowed; }
    .recompensa-item.unlocked .recompensa-unlock-btn { background: var(--primary-action); }
    
    /* --- Tooltip --- */
    .tooltip-container { position: relative; }
    .tooltip-text { visibility: hidden; width: 180px; background-color: #333; color: #fff; text-align: center; border-radius: 6px; padding: 5px 10px; position: absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -90px; opacity: 0; transition: opacity 0.3s; font-size: 0.8rem; }
    .tooltip-container:hover .tooltip-text { visibility: visible; opacity: 1; }


    /* Detail Panel (Slide from Right) */
    .trail-panel-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.4);
      z-index: 100;
    }
    .trail-detail-panel {
      position: absolute;
      top: 0;
      right: 0;
      width: 85%;
      max-width: 360px;
      height: 100%;
      background-color: var(--card-bg-alt);
      box-shadow: -4px 0 15px rgba(0,0,0,0.1);
      transform: translateX(100%);
      transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 110;
      display: flex;
      flex-direction: column;
    }
    .trail-detail-panel.open {
      transform: translateX(0);
    }
    .panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        background-color: var(--card-bg);
        flex-shrink: 0;
    }
    .panel-header h2 {
        font-size: 1.2rem;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    .panel-header .node-icon-wrapper {
        width: 36px;
        height: 36px;
        border: none;
        box-shadow: none;
    }
    .panel-header .node-icon-wrapper svg {
        width: 20px;
        height: 20px;
    }
    .close-panel-btn, .close-modal-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.25rem;
    }
    .close-panel-btn svg, .close-modal-btn svg { width: 28px; height: 28px; color: var(--text-secondary); }
    .panel-content {
        padding: 1.5rem;
        overflow-y: auto;
        flex-grow: 1;
    }
    .panel-content h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.2;
    }
    .panel-content .date {
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
    }
    .meta-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .meta-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
    .meta-item dt {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--text-secondary);
        text-transform: uppercase;
    }
    .meta-item dd {
        margin: 0;
        font-size: 1rem;
        color: var(--text-primary);
        padding: 0.75rem;
        background-color: var(--card-bg);
        border-radius: 8px;
    }
    .panel-footer {
        padding: 1rem 1.5rem;
        margin-top: auto;
        border-top: 1px solid var(--progress-bar-bg);
        flex-shrink: 0;
    }
    .panel-action-btn {
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: 12px;
        background-color: var(--primary-action);
        color: var(--primary-action-text);
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
    }
    .panel-action-btn.equipped {
        background-color: var(--green-accent);
    }
    .panel-action-btn:disabled {
        background-color: var(--accent-color);
        cursor: not-allowed;
    }


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