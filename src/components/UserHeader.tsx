import React from 'react';
import { StarIcon, UserIcon } from './icons';

interface UserHeaderProps {
    rank: number;
    showProgress?: boolean;
    userName: string;
    userImage: string | null;
    onClick?: () => void;
}

/**
 * Componente de cabeçalho do usuário, exibido em várias telas.
 * Mostra avatar, nome, estrelas de rank e barra de progresso.
 * Pode ser clicável para navegar para o perfil.
 */
export const UserHeader: React.FC<UserHeaderProps> = ({ rank, showProgress = true, userName, userImage, onClick }) => (
    <div className="user-header">
        <div className="user-avatar-small" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
          {userImage ? <img src={userImage} alt="User Avatar" /> : <UserIcon />}
        </div>
        <div className="user-info" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
            <span className="user-name">{userName}</span>
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