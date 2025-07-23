import React, { useState, useMemo } from 'react';
import { UserIcon, BackIcon, PlantIcon, WrenchIcon, FilledUserIcon, ImageIcon, RightArrowIcon, SearchIcon, MapPinIcon } from '../components/icons';
import type { Event, Category } from '../types';

// --- Componente de Detalhes do Evento ---
interface EventDetailProps {
    event: Event;
    onBack: () => void;
    Icon: React.FC<any>;
}

const EventDetailScreen: React.FC<EventDetailProps> = ({ event, onBack, Icon }) => {
    const [isInventoryOpen, setIsInventoryOpen] = useState(true);

    return (
        <div className="screen event-detail-screen">
            <div className="detail-header">
                <button onClick={onBack} className="back-btn-detail"><BackIcon /> Voltar</button>
            </div>
            <div className="event-main-card">
                <div className="event-image-placeholder">
                    <Icon />
                </div>
                <div className="event-info">
                    <div>
                        <div className="event-meta-top">
                            <div className="event-date">
                                <strong>{event.date.split(' ')[0]}</strong>
                                <span>{event.date.split(' ')[1]}</span>
                            </div>
                            <div className="event-participants-box">
                                <span><strong>{event.participants}</strong> participantes</span>
                                <span className="separator">|</span>
                                <div className="participant-icons">
                                    {event.participantAvatars.slice(0, 3).map((avatar, index) => <img key={index} src={avatar} alt="participant" />)}
                                </div>
                            </div>
                        </div>
                        <h1 className="event-title">{event.title}</h1>
                    </div>
                    <div className="event-tags">
                        <span>Tags:</span>
                        <span className="tag"></span><span className="tag"></span><span className="tag"></span>
                    </div>
                </div>
                <button className="signup-btn">Inscreva-se</button>
            </div>
            <div className={`event-body-columns ${isInventoryOpen ? 'inventory-open' : 'inventory-closed'}`}>
                <div className={`inventory-column ${!isInventoryOpen ? 'closed' : ''}`}>
                    <button 
                        className={`inventory-header ${!isInventoryOpen ? 'closed' : ''}`}
                        onClick={() => setIsInventoryOpen(!isInventoryOpen)}
                        aria-label={isInventoryOpen ? "Fechar inventário" : "Abrir inventário"}
                    >
                        {isInventoryOpen ? (
                             <h3><BackIcon /> Inventário</h3>
                        ) : (
                            <RightArrowIcon />
                        )}
                    </button>
                    {isInventoryOpen && (
                        <div className="inventory-list">
                            <div className="inventory-entry">
                                <div className="inventory-item-card">
                                    <div className="item-icon"><PlantIcon /></div>
                                </div>
                                <div className="item-users">
                                    <div className="item-participant-icons">
                                        <FilledUserIcon /><FilledUserIcon /><FilledUserIcon />
                                    </div>
                                </div>
                            </div>
                            <div className="inventory-entry">
                                <div className="inventory-item-card">
                                    <div className="item-icon"><WrenchIcon /></div>
                                </div>
                                <div className="item-users">
                                    <div className="item-participant-icons">
                                        <FilledUserIcon /><FilledUserIcon /><FilledUserIcon />
                                    </div>
                                </div>
                            </div>
                            <div className="inventory-entry">
                                <div className="inventory-item-card">
                                    <div className="item-icon"><PlantIcon /></div>
                                </div>
                               <div className="item-users">
                                    <div className="item-participant-icons">
                                        <FilledUserIcon /><FilledUserIcon /><FilledUserIcon />
                                    </div>
                                </div>
                            </div>
                            <div className="inventory-entry">
                               <div className="inventory-item-card">
                                    <div className="item-icon"><WrenchIcon /></div>
                                </div>
                               <div className="item-users">
                                    <div className="item-participant-icons">
                                        <FilledUserIcon /><FilledUserIcon /><FilledUserIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="details-column">
                    <div className="event-description">
                        <h2>Descrição</h2>
                        <p>{event.description}</p>
                    </div>
                    <div className="event-feed">
                        <h2>Feed</h2>
                        <div className="feed-card">
                            <p>Ainda não há atualizações para este evento. Volte mais tarde!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Componente da Lista de Eventos (Página Inicial) ---
interface EventsListProps {
    events: Event[];
    categories: Category[];
    onSelectEvent: (event: Event) => void;
    onViewAll: () => void;
}

const EventsListScreen: React.FC<EventsListProps> = ({ events, categories, onSelectEvent, onViewAll }) => (
    <div className="screen events-list-screen">
        <div className="section-header">
            <h1 className="section-title">
                Eventos Populares
                <small>Rio de Janeiro</small>
            </h1>
            <button className="view-all-btn" onClick={onViewAll}>
                Ver Todos <RightArrowIcon />
            </button>
        </div>
        <div className="popular-events-list">
            {events.slice(0, 3).map(event => {
                const category = categories.find(c => c.id === event.categoryId);
                const Icon = category ? category.Icon : ImageIcon;
                return (
                    <div key={event.id} className="event-card-item" onClick={() => onSelectEvent(event)}>
                        <div className="event-card-image">
                           <Icon />
                        </div>
                        <div className="event-card-info">
                            <p style={{ color: 'var(--primary-action)', fontWeight: 600, textTransform: 'uppercase' }}>{`${event.date} ${event.dayOfWeek}, ${event.time}`}</p>
                            <h3>{event.title}</h3>
                            <p>{event.location}</p>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="section-header">
            <h2 className="section-title">Navegar por Categoria</h2>
        </div>
        <div className="category-grid">
            {categories.map(category => (
                <div key={category.id} className="category-card">
                    <category.Icon />
                    <h3>{category.name}</h3>
                    <p>{category.eventCount} Eventos</p>
                </div>
            ))}
        </div>
    </div>
);

// --- Componente da Tela de Todos os Eventos (Timeline) ---
interface AllEventsProps {
    events: Event[];
    categories: Category[];
    onSelectEvent: (event: Event) => void;
    onBack: () => void;
}

const AllEventsScreen: React.FC<AllEventsProps> = ({ events, categories, onSelectEvent, onBack }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredEvents = useMemo(() => 
        events.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
        ), [events, searchTerm]);

    const groupedEvents = useMemo(() => 
        filteredEvents.reduce((acc, event) => {
            const dateKey = `${event.date}, ${event.dayOfWeek}`;
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(event);
            return acc;
        }, {} as Record<string, Event[]>),
    [filteredEvents]);

    return (
        <div className="screen all-events-screen">
             <div className="detail-header">
                <button onClick={onBack} className="back-btn-detail"><BackIcon /> Voltar</button>
            </div>
            <h1 className="screen-title">Todos os Eventos</h1>
            <div className="search-bar">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Buscar pelo nome do evento..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="timeline-container">
                {Object.entries(groupedEvents).map(([date, eventsInGroup]) => (
                    <div key={date} className="timeline-group">
                        <div className="timeline-line-container">
                            <div className="timeline-dot"></div>
                            <div className="timeline-line"></div>
                        </div>
                        <div className="timeline-content">
                            <h2 className="timeline-date-header">
                                {date.split(',')[0]}, <span>{date.split(',')[1]}</span>
                            </h2>
                            {eventsInGroup.map(event => {
                                const category = categories.find(c => c.id === event.categoryId);
                                const Icon = category ? category.Icon : ImageIcon;
                                return (
                                <div key={event.id} className="timeline-event-card" onClick={() => onSelectEvent(event)}>
                                    <div className="timeline-event-info">
                                        <p className="time">{event.time}</p>
                                        <h3>{event.title}</h3>
                                        <div className="timeline-event-details">
                                            <div><UserIcon /><p>{event.organizer}</p></div>
                                            <div><MapPinIcon /><p>{event.location}</p></div>
                                        </div>
                                        <div className="timeline-event-participants">
                                            <div className="timeline-participant-avatars">
                                                {event.participantAvatars.slice(0,3).map((avatar, i) => 
                                                    <img key={i} src={avatar} alt="participant" />
                                                )}
                                            </div>
                                            <span className="timeline-participant-count">+{event.participants}</span>
                                        </div>
                                    </div>
                                    <div className="timeline-event-image">
                                        <Icon />
                                    </div>
                                </div>
                            )})}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Componente principal da tela de Eventos ---
interface EventsScreenProps {
    events: Event[];
    categories: Category[];
    userName: string;
    userImage: string | null;
}

export const EventsScreen: React.FC<EventsScreenProps> = ({ events, categories, userName, userImage }) => {
    const [view, setView] = useState<'list' | 'all-events'>('list');
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    // Se um evento está selecionado, sempre mostre a tela de detalhes.
    if (selectedEvent) {
        const category = categories.find(c => c.id === selectedEvent.categoryId);
        const Icon = category ? category.Icon : ImageIcon;
        return <EventDetailScreen 
                    event={selectedEvent}
                    Icon={Icon} 
                    onBack={() => setSelectedEvent(null)} 
               />;
    }
    
    // Se nenhum evento for selecionado, mostre a lista ou a linha do tempo.
    switch (view) {
        case 'all-events':
            return <AllEventsScreen 
                       events={events} 
                       categories={categories}
                       onSelectEvent={setSelectedEvent} 
                       onBack={() => setView('list')} 
                   />;
        case 'list':
        default:
            return <EventsListScreen 
                       events={events} 
                       categories={categories} 
                       onSelectEvent={setSelectedEvent} 
                       onViewAll={() => setView('all-events')}
                   />;
    }
};