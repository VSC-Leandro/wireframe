import React, { useState, useRef } from 'react';
import { 
    UserIcon, EditIcon, SaveIcon, StarIcon, GuidesIcon, EventsIcon, TrailIcon, FriendsIcon,
    BadgeMountainIcon, BadgeScopeIcon, BadgeBulbIcon 
} from '../components/icons';

interface ProfileScreenProps {
    userName: string;
    userImage: string | null;
    onUpdateImage: (image: string | null) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ userName, userImage, onUpdateImage }) => {
    const [status, setStatus] = useState('Clique para editar sua frase especial...');
    const [isEditingStatus, setIsEditingStatus] = useState(false);
    const [editedStatus, setEditedStatus] = useState(status);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleStatusSave = () => {
        setStatus(editedStatus.trim() || 'Clique para editar sua frase especial...');
        setIsEditingStatus(false);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onUpdateImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="screen profile-screen">
            <div className="profile-name-header">
                <h1 className="profile-name">{userName}</h1>
            </div>
            
            <div className="profile-header">
                <div className="profile-avatar-container">
                    <div className="profile-avatar">
                        {userImage ? <img src={userImage} alt="User Avatar"/> : <UserIcon/>}
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                    <button className="edit-avatar-btn" onClick={() => fileInputRef.current?.click()}>
                        <EditIcon/>
                    </button>
                </div>

                <div className="profile-status-container">
                    {isEditingStatus ? (
                        <div className="status-editor">
                            <input
                                type="text"
                                value={editedStatus}
                                onChange={(e) => setEditedStatus(e.target.value)}
                                onBlur={handleStatusSave}
                                onKeyDown={(e) => { if (e.key === 'Enter') handleStatusSave(); }}
                                className="status-edit-input"
                                placeholder="Sua frase especial..."
                                autoFocus
                            />
                            <button onClick={handleStatusSave} className="save-status-btn">
                                <SaveIcon />
                            </button>
                        </div>
                    ) : (
                        <p className="profile-status" onClick={() => {
                            setEditedStatus(status === 'Clique para editar sua frase especial...' ? '' : status);
                            setIsEditingStatus(true);
                        }}>
                            {status}
                        </p>
                    )}
                </div>
            </div>
        
            <div className="featured-badges">
                <div className="badge-card">
                    <div className="badge-illustration"><BadgeMountainIcon /></div>
                    <p>Lorem Ipsum</p>
                    <div className="badge-rating rating-dark"><StarIcon fill="#FFFFFF" /><StarIcon fill="#FFFFFF" /></div>
                </div>
                <div className="badge-card">
                    <div className="badge-illustration"><BadgeScopeIcon /></div>
                    <p>Lorem Ipsum</p>
                    <div className="badge-rating rating-dark"><StarIcon fill="#FFFFFF" /></div>
                </div>
                <div className="badge-card">
                    <div className="badge-illustration"><BadgeBulbIcon /></div>
                    <p>Lorem Ipsum</p>
                    <div className="badge-rating rating-green"><StarIcon fill="#FFFFFF" /><StarIcon fill="#FFFFFF" /><StarIcon fill="#FFFFFF" /></div>
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
};