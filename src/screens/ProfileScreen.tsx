import React, { useState, useRef } from 'react';
import { 
    UserIcon, EditIcon, SaveIcon, StarIcon, GuidesIcon, EventsIcon, TrailIcon, FriendsIcon, CloseIcon,
    BadgeMountainIcon, BadgeScopeIcon, BadgeBulbIcon 
} from '../components/icons';
import type { TrailNode } from '../types';

// --- Mock Data & Helper Components ---

const mockReviews: Record<string, { user: string; rating: number; comment: string }[]> = {
  '4': [ // Ativismo Digital
    { user: 'Carla S.', rating: 5, comment: 'Esse saber me ajudou muito a organizar campanhas online! Recomendo.' },
    { user: 'Bruno G.', rating: 4, comment: 'Bom, mas poderia ter mais dicas sobre segurança digital.' },
    { user: 'Mariana L.', rating: 5, comment: 'Essencial para quem quer fazer a diferença nas redes.' },
  ],
  '6': [ // Botânica Básica
    { user: 'Ana P.', rating: 5, comment: 'Finalmente consigo identificar as plantas nativas nos mutirões. Mudou tudo!' },
    { user: 'Marcos R.', rating: 5, comment: 'Muito útil para o projeto da horta comunitária do nosso bairro.' },
  ],
  '9': [ // Oratória
    { user: 'Tiago M.', rating: 4, comment: 'Ajudou a perder o medo de falar em público nos eventos.' },
  ],
};

const RenderRatingStars: React.FC<{ rating: number, max: number }> = ({ rating, max }) => (
    <>
        {Array.from({ length: max }, (_, i) => (
            <StarIcon key={i} fill={i < rating ? "#F5B945" : "#E0E0E0"} />
        ))}
    </>
);

const ReviewModal: React.FC<{ saber: TrailNode; onClose: () => void }> = ({ saber, onClose }) => {
    const reviews = mockReviews[saber.id] || [];
    return (
        <div className="profile-review-modal-overlay" onClick={onClose}>
            <div className="profile-review-modal" onClick={e => e.stopPropagation()}>
                <header className="profile-review-modal-header">
                    <h2>Avaliações de "{saber.title}"</h2>
                    <button onClick={onClose} aria-label="Fechar modal"><CloseIcon /></button>
                </header>
                <div className="profile-review-modal-content">
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className="review-item">
                                <div className="review-header">
                                    <div className="review-user">
                                        <UserIcon />
                                        <span>{review.user}</span>
                                    </div>
                                    <div className="review-rating">
                                        <RenderRatingStars rating={review.rating} max={5} />
                                    </div>
                                </div>
                                <p className="review-comment">{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p>Ainda não há avaliações para este saber.</p>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Profile Screen Component ---

interface ProfileScreenProps {
    userName: string;
    userImage: string | null;
    equippedSaberes: (TrailNode | null)[];
    onUpdateImage: (image: string | null) => void;
    onNavigate: (page: string) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ userName, userImage, equippedSaberes, onUpdateImage, onNavigate }) => {
    const [status, setStatus] = useState('Clique para editar sua frase especial...');
    const [isEditingStatus, setIsEditingStatus] = useState(false);
    const [editedStatus, setEditedStatus] = useState(status);
    const [reviewSaber, setReviewSaber] = useState<TrailNode | null>(null);
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
    
    const badgeIcons = [BadgeMountainIcon, BadgeScopeIcon, BadgeBulbIcon];

    return (
        <div className="screen profile-screen">
            <div className="profile-name-header">
                <h1 className="profile-name">{userName}</h1>
            </div>
            
            <header className="profile-header">
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
                    <button className="edit-avatar-btn" onClick={() => fileInputRef.current?.click()} aria-label="Editar foto de perfil">
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
                            <button onClick={handleStatusSave} className="save-status-btn" aria-label="Salvar status">
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
            </header>
        
            <div className="profile-bottom-content">
                <div className="featured-badges">
                    {equippedSaberes.map((saber, index) => {
                        const BadgeIcon = badgeIcons[index];
                        if (saber) {
                            return (
                                <div key={saber.id} className="badge-card" onClick={() => setReviewSaber(saber)} role="button" tabIndex={0}>
                                    <div className="badge-illustration"><BadgeIcon /></div>
                                    <div className="badge-info">
                                        <p>{saber.title}</p>
                                        <div className="badge-rating rating-green">
                                            <RenderRatingStars rating={saber.meta.saberLevel || 1} max={3} />
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <div key={`empty-${index}`} className="badge-card empty">
                                <div className="badge-illustration"><StarIcon /></div>
                                <p>Slot de Saber Vazio</p>
                            </div>
                        );
                    })}
                </div>
            
                <div className="profile-nav-grid">
                    <div className="profile-nav-card" onClick={() => alert('Navegação para Seus Guias')} style={{cursor: 'pointer'}}><GuidesIcon/><span>Seus Guias</span></div>
                    <div className="profile-nav-card" onClick={() => alert('Navegação para Seus Eventos')} style={{cursor: 'pointer'}}><EventsIcon/><span>Seus Eventos</span></div>
                    <div className="profile-nav-card" onClick={() => onNavigate('trail')} style={{cursor: 'pointer'}}><TrailIcon/><span>Trilha</span></div>
                    <div className="profile-nav-card" onClick={() => alert('Navegação para Amigos')} style={{cursor: 'pointer'}}>
                        <FriendsIcon/>
                        <span>Amigos</span>
                        <span className="notification-badge">2</span>
                    </div>
                </div>
            </div>
            
            {reviewSaber && <ReviewModal saber={reviewSaber} onClose={() => setReviewSaber(null)} />}
        </div>
    );
};