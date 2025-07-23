import React, { useState } from 'react';
import { GuidesIcon, ImageIcon, BackIcon, SearchIcon } from '../components/icons';
import type { Guide } from '../types';

// --- Componente da Lista de Guias ---
interface GuidesListProps {
    guides: Guide[];
    onSelectGuide: (guide: Guide) => void;
}

const GuidesListScreen: React.FC<GuidesListProps> = ({ guides, onSelectGuide }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredGuides = guides.filter(guide => 
        guide.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="screen guides-list-screen">
            <h1 className="screen-title">Guias</h1>
            <div className="search-bar">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Procurar guia..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="guides-list">
                {filteredGuides.map(guide => (
                    <div key={guide.id} className="guide-list-item" onClick={() => onSelectGuide(guide)}>
                        <div className="guide-item-icon"><GuidesIcon /></div>
                        <div className="guide-item-info">
                            <h3>{guide.title}</h3>
                            <p>{guide.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Componente de Detalhes do Guia ---
interface GuideDetailProps {
    guide: Guide;
    onBack: () => void;
}

const GuideDetailScreen: React.FC<GuideDetailProps> = ({ guide, onBack }) => (
    <div className="screen guide-detail-screen">
        <div className="detail-header">
           <button onClick={onBack} className="back-btn-detail"><BackIcon /></button>
        </div>
        <div className="guide-header">
            <p className="guide-date">{guide.date}</p>
            <h1 className="guide-title">{guide.title}</h1>
            <p className="guide-meta">publicado por <a href="#">{guide.author}</a></p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan.
            </p>
        </div>
    </div>
);

// --- Componente principal da tela de Guias ---
interface GuidesScreenProps {
    guides: Guide[];
    userName: string;
    userImage: string | null;
}

export const GuidesScreen: React.FC<GuidesScreenProps> = ({ guides, userName, userImage }) => {
    const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

    if (selectedGuide) {
        return <GuideDetailScreen guide={selectedGuide} onBack={() => setSelectedGuide(null)} />;
    }

    return <GuidesListScreen guides={guides} onSelectGuide={setSelectedGuide} />;
};
