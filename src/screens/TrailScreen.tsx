import React, { useState, useMemo, useRef, useEffect } from 'react';
import { UserHeader } from '../components/UserHeader';
import { StarIcon, PlusIcon, EventsIcon, DiamondIcon, RewardIcon, CloseIcon, TreeRingIcon, GuidesIcon, WrenchIcon, PlantIcon, JusticeIcon, PaletteIcon, CircularEconomyIcon, SearchIcon, RightArrowIcon, BackIcon } from '../components/icons';
import type { TrailNode, NodeType } from '../types';

// --- Configuration & Mock Data ---
const KNOWLEDGE_MAX_EQUIPPED = 3;
const MOCK_USER_LEVEL = 4;
const MOCK_USER_XP = 450;

// --- Helper Components & Functions ---

const NODE_ICON_MAP: Record<NodeType, React.FC<any>> = {
    creation: TreeRingIcon,
    event: EventsIcon,
    glossary: DiamondIcon,
    knowledge: StarIcon,
    reward: RewardIcon,
};

const KNOWLEDGE_ICON_MAP: Record<string, React.FC> = {
    justice: JusticeIcon,
    plant: PlantIcon,
    palette: PaletteIcon,
    wrench: WrenchIcon,
    tree: TreeRingIcon,
    reward: RewardIcon,
    search: SearchIcon,
    circular: CircularEconomyIcon,
    default: StarIcon,
};

const NodeIcon = ({ type }: { type: NodeType }) => {
    const IconComponent = NODE_ICON_MAP[type] || EventsIcon;
    return <IconComponent />;
};

const KnowledgeIcon = ({ iconName }: { iconName?: string }) => {
    const IconComponent = iconName ? KNOWLEDGE_ICON_MAP[iconName] : KNOWLEDGE_ICON_MAP.default;
    return <IconComponent />;
};


const getPathD = (fromPos: { bottom: number; left: number }, toPos: { bottom: number; left: number }) => {
    const from = { x: fromPos.left, y: 100 - fromPos.bottom };
    const to = { x: toPos.left, y: 100 - toPos.bottom };
    
    const nodeHeightPerc = 4; 
    const from_y_connect = from.y - nodeHeightPerc / 2;
    const to_y_connect = to.y + nodeHeightPerc / 2;

    const midY = from_y_connect + (to_y_connect - from_y_connect) / 2;

    return `M ${from.x},${from_y_connect} C ${from.x},${midY} ${to.x},${midY} ${to.x},${to_y_connect}`;
};

const formatPanelDate = (dateString: string) => new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
});

const SaberItem: React.FC<{
    saber: TrailNode;
    isDragging: boolean;
    onDragStart: (e: React.DragEvent) => void;
    onDragEnd: (e: React.DragEvent) => void;
    onDoubleClick: () => void;
}> = React.memo(({ saber, isDragging, onDragStart, onDragEnd, onDoubleClick }) => (
    <div
        className={`saber-item ${isDragging ? 'dragging' : ''}`}
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDoubleClick={onDoubleClick}
    >
        <div className="saber-item-icon">
            <KnowledgeIcon iconName={saber.meta.iconName} />
        </div>
        <div className="saber-item-info">
            <h3>{saber.title}</h3>
            <p>{saber.meta.description}</p>
        </div>
    </div>
));


const SaberDetailView: React.FC<{saber: TrailNode, onBack: () => void}> = ({ saber, onBack }) => (
    <div className="saber-detail-view">
        <div className="detail-header">
            <button onClick={onBack} className="back-btn-detail"><BackIcon /> Voltar</button>
        </div>
        <div className="saber-detail-content">
            <div className="saber-detail-main-info">
                <div className="saber-item-icon">
                    <KnowledgeIcon iconName={saber.meta.iconName} />
                </div>
                <div>
                    <h2 className="saber-detail-title">{saber.title}</h2>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{saber.meta.category}</p>
                </div>
            </div>

            <dl className="saber-detail-stats">
                <div className="saber-stat-card">
                    <dt>Nível Atual</dt>
                    <dd>{saber.meta.saberLevel || 1}</dd>
                </div>
                <div className="saber-stat-card">
                    <dt>XP para Nv. Up</dt>
                    <dd>{(saber.meta.saberLevel || 1) * 250} / {(saber.meta.saberLevel || 1) * 500}</dd>
                </div>
            </dl>

            <div className="saber-detail-description">
                <h3>Descrição</h3>
                <p>{saber.meta.description}</p>
            </div>

            <div className="saber-detail-history">
                <h3>Histórico de Uso</h3>
                <div className="history-list">
                    <div className="history-item">
                        <p className="history-date">18 DE JUNHO, 2024</p>
                        <p>Usado em: <strong>Mutirão de Replantio</strong></p>
                    </div>
                    <div className="history-item">
                        <p className="history-date">10 DE JUNHO, 2024</p>
                        <p>Usado em: <strong>Protesto por Energias Renováveis</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


// --- Modals ---
const SaberesModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    nodes: TrailNode[];
    slots: (TrailNode | null)[];
    setNodes: React.Dispatch<React.SetStateAction<TrailNode[]>>;
}> = ({ isOpen, onClose, nodes, slots, setNodes }) => {
    
    const [draggedItem, setDraggedItem] = useState<{ id: string; from: 'list' | 'slot' } | null>(null);
    const [dragOverSlot, setDragOverSlot] = useState<number | null>(null);
    const [saberForDetail, setSaberForDetail] = useState<TrailNode | null>(null);
    const unequippedSaberes = useMemo(() => nodes.filter(n => n.type === 'knowledge' && !n.meta.equipped), [nodes]);

    if (!isOpen) return null;

    const handleDragStart = (e: React.DragEvent, id: string, from: 'list' | 'slot') => {
        setDraggedItem({ id, from });
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
        setDragOverSlot(null);
    }
    
    const handleDoubleClick = (saber: TrailNode) => {
        setSaberForDetail(saber);
    };

    const handleDrop = (e: React.DragEvent, dropTarget: { type: 'slot'; index: number } | { type: 'list' } | { type: 'item'; id: string }) => {
        e.preventDefault();
        e.stopPropagation();
        if (!draggedItem) return;

        const { id: draggedId, from } = draggedItem;

        // EQUIP: Dragging from list to an empty slot
        if (from === 'list' && dropTarget.type === 'slot' && !slots[dropTarget.index]) {
            const currentEquippedCount = slots.filter(s => s).length;
            if (currentEquippedCount < KNOWLEDGE_MAX_EQUIPPED) {
                setNodes(prev => prev.map(n => n.id === draggedId ? { ...n, meta: { ...n.meta, equipped: true } } : n));
            }
        }
        // UNEQUIP: Dragging from slot back to the list
        else if (from === 'slot' && (dropTarget.type === 'list' || dropTarget.type === 'item')) {
            setNodes(prev => prev.map(n => n.id === draggedId ? { ...n, meta: { ...n.meta, equipped: false } } : n));
        }
        // REORDER: Dragging from list to another item in the list
        else if (from === 'list' && dropTarget.type === 'item' && dropTarget.id !== draggedId) {
            setNodes(prevNodes => {
                const newNodes = [...prevNodes];
                const sourceIndex = newNodes.findIndex(n => n.id === draggedId);
                let targetIndex = newNodes.findIndex(n => n.id === dropTarget.id);

                if (sourceIndex === -1 || targetIndex === -1) return prevNodes;
                
                const [movedItem] = newNodes.splice(sourceIndex, 1);
                
                // Adjust target index because of the splice
                if (sourceIndex < targetIndex) {
                    targetIndex--;
                }
                
                newNodes.splice(targetIndex, 0, movedItem);
                return newNodes;
            });
        }
        handleDragEnd();
    };

    return (
        <div className="trail-modal-overlay" onClick={onClose}>
            <div className="trail-modal" onClick={e => e.stopPropagation()}>
                {saberForDetail ? (
                    <SaberDetailView saber={saberForDetail} onBack={() => setSaberForDetail(null)} />
                ) : (
                <>
                    <header className="trail-modal-header">
                        <h2>Inventário de Saberes</h2>
                        <p>{slots.filter(s => s).length} / {KNOWLEDGE_MAX_EQUIPPED} Equipados</p>
                        <button onClick={onClose} className="close-modal-btn"><CloseIcon /></button>
                    </header>
                    <div className="trail-modal-content saberes-inventory">
                        <div className="saberes-inventory-header">
                            <h3>Saberes Equipados</h3>
                            <p>Arraste um saber da sua lista para um espaço vazio para equipar.</p>
                            <div className="equipped-saberes-slots">
                                {slots.map((saber, i) => (
                                    <div className="equipped-saber-wrapper" key={`slot-wrapper-${i}`}>
                                        <div
                                            className={`saber-slot ${dragOverSlot === i ? 'drag-over' : ''}`}
                                            onDrop={(e) => handleDrop(e, { type: 'slot', index: i })}
                                            onDragOver={(e) => {
                                                e.preventDefault();
                                                if (draggedItem?.from === 'list' && !saber) setDragOverSlot(i);
                                            }}
                                            onDragLeave={() => setDragOverSlot(null)}
                                        >
                                            {saber ? (
                                                <div 
                                                    className="saber-item-equipped-icon"
                                                    draggable
                                                    onDragStart={(e) => handleDragStart(e, saber.id, 'slot')}
                                                    onDragEnd={handleDragEnd}
                                                    onDoubleClick={() => handleDoubleClick(saber)}
                                                    onDrop={(e) => e.stopPropagation()}
                                                >
                                                    <div className="saber-item-icon">
                                                        <KnowledgeIcon iconName={saber.meta.iconName} />
                                                    </div>
                                                </div>
                                            ) : <PlusIcon className="plus-icon"/> }
                                        </div>
                                        {saber && <p className="equipped-saber-title">{saber.title}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="saberes-list-container">
                            <h3>Sua Lista de Saberes</h3>
                            <div 
                                className="saberes-list"
                                onDrop={(e) => handleDrop(e, { type: 'list' })}
                                onDragOver={(e) => e.preventDefault()}
                            >
                                {unequippedSaberes.map(saber => (
                                    <div key={saber.id} onDrop={(e) => handleDrop(e, { type: 'item', id: saber.id })}>
                                       <SaberItem
                                            saber={saber}
                                            isDragging={draggedItem?.id === saber.id}
                                            onDragStart={(e) => handleDragStart(e, saber.id, 'list')}
                                            onDragEnd={handleDragEnd}
                                            onDoubleClick={() => handleDoubleClick(saber)}
                                       />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                 </>
                )}
            </div>
        </div>
    );
};

const RecompensasModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    nodes: TrailNode[];
    userLevel: number;
    onUnlock: (id: string) => void;
}> = ({ isOpen, onClose, nodes, userLevel, onUnlock }) => {
    
    const groupedRewards = useMemo(() => {
        return nodes.reduce((acc, node) => {
            const category = node.meta.category || 'Geral';
            if (!acc[category]) acc[category] = [];
            acc[category].push(node);
            return acc;
        }, {} as Record<string, TrailNode[]>);
    }, [nodes]);
    
    if (!isOpen) return null;
    
    const ICON_MAP: Record<string, React.FC> = { "Vestuário": GuidesIcon, "Acessórios": WrenchIcon, "Papelaria": EventsIcon, "Geral": RewardIcon };

    return (
        <div className="trail-modal-overlay" onClick={onClose}>
            <div className="trail-modal" onClick={e => e.stopPropagation()}>
                <header className="trail-modal-header">
                    <h2>Loja de Recompensas</h2>
                    <p>Nível {userLevel} | {MOCK_USER_XP} XP</p>
                    <button onClick={onClose} className="close-modal-btn"><CloseIcon /></button>
                </header>
                <div className="trail-modal-content recompensas-store">
                    {Object.entries(groupedRewards).map(([category, items]) => (
                        <section key={category} className="recompensa-category">
                            <h3>{category}</h3>
                            <div className="recompensa-grid">
                                {items.map(node => {
                                    const canUnlock = userLevel >= (node.meta.levelRequired || 0);
                                    const CategoryIcon = ICON_MAP[category] || RewardIcon;
                                    return (
                                        <div key={node.id} className={`recompensa-item ${node.meta.unlocked ? 'unlocked' : ''} ${!canUnlock ? 'locked' : ''}`}>
                                            <div className="recompensa-item-icon"><CategoryIcon/></div>
                                            <div className="recompensa-item-info">
                                                <h4>{node.title}</h4>
                                                <span className="recompensa-req">Req: Nível {node.meta.levelRequired || 1}</span>
                                                <p>{node.meta.benefit}</p>
                                            </div>
                                            <div className="tooltip-container">
                                                 <button 
                                                    className="recompensa-unlock-btn"
                                                    disabled={node.meta.unlocked || !canUnlock}
                                                    onClick={() => onUnlock(node.id)}
                                                 >
                                                    {node.meta.unlocked ? 'Adquirido' : canUnlock ? `Desbloquear (${node.meta.cost} XP)` : 'Bloqueado'}
                                                 </button>
                                                 { !node.meta.unlocked && !canUnlock && <span className="tooltip-text">Você precisa alcançar o Nível {node.meta.levelRequired} para desbloquear.</span> }
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

// --- Main Component ---
interface TrailScreenProps {
    userName: string;
    userImage: string | null;
    onNavigate: (page: string) => void;
    nodes: TrailNode[];
    setNodes: React.Dispatch<React.SetStateAction<TrailNode[]>>;
}

export const TrailScreen: React.FC<TrailScreenProps> = ({ userName, userImage, onNavigate, nodes, setNodes }) => {
    const [selectedNode, setSelectedNode] = useState<TrailNode | null>(null);
    const [isSaberesOpen, setSaberesOpen] = useState(false);
    const [isRecompensasOpen, setRecompensasOpen] = useState(false);
    const trailContainerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const container = trailContainerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, []);

    const trailDisplayNodes = useMemo(() => nodes.filter(n => n.parentId || n.type === 'creation'), [nodes]);
    const rewardItems = useMemo(() => nodes.filter(n => n.type === 'reward'), [nodes]);

    const equippedSaberes = useMemo(() => nodes.filter(s => s.type === 'knowledge' && s.meta.equipped), [nodes]);
    
    const slots: (TrailNode | null)[] = useMemo(() => {
        const slotsArray: (TrailNode | null)[] = Array(KNOWLEDGE_MAX_EQUIPPED).fill(null);
        equippedSaberes.forEach((saber, index) => {
            if (index < KNOWLEDGE_MAX_EQUIPPED) slotsArray[index] = saber;
        });
        return slotsArray;
    }, [equippedSaberes]);

    const connections = useMemo(() => {
        return trailDisplayNodes.map(node => {
            if (!node.parentId) return null;
            const parent = trailDisplayNodes.find(p => p.id === node.parentId);
            if (!parent) return null;
            return { id: `${parent.id}-${node.id}`, d: getPathD(parent.position, node.position) };
        }).filter(Boolean);
    }, [trailDisplayNodes]);

    const handleNodeClick = (node: TrailNode) => setSelectedNode(node);
    const handleClosePanel = () => setSelectedNode(null);

    const handleUnlockReward = (id: string) => {
        setNodes(prev => prev.map(n => n.id === id ? {...n, meta: {...n.meta, unlocked: true}} : n));
    };

    return (
        <div className="screen trail-screen">
            <UserHeader rank={1} userName={userName} userImage={userImage} onClick={() => onNavigate('profile')} />
            
            <div className="trail-history-container" ref={trailContainerRef}>
                <div className="trail-canvas">
                    <svg className="trail-connections" preserveAspectRatio="none" viewBox="0 0 100 100">
                        {connections.map(conn => conn && <path key={conn.id} d={conn.d} vectorEffect="non-scaling-stroke"/>)}
                    </svg>

                    {trailDisplayNodes.map(node => (
                        <button
                            key={node.id}
                            className={`trail-node node-type-${node.type}`}
                            style={{ bottom: `${node.position.bottom}%`, left: `${node.position.left}%`, transform: 'translateX(-50%)' }}
                            onClick={() => handleNodeClick(node)}
                            aria-label={`Nó de ${node.type}: ${node.title}`}
                        >
                            <div className="node-icon-wrapper"><NodeIcon type={node.type} /></div>
                        </button>
                    ))}
                </div>
            </div>

            <footer className="trail-dock">
                <button className="dock-button" onClick={() => setSaberesOpen(true)}>
                    <StarIcon fill="var(--yellow-accent)" /><span>Saberes</span>
                </button>
                <button className="dock-button add-manual" aria-label="Registrar Atividade Manual"><PlusIcon /></button>
                <button className="dock-button" onClick={() => setRecompensasOpen(true)}>
                    <RewardIcon /><span>Recompensas</span>
                </button>
            </footer>
            
            <SaberesModal 
                isOpen={isSaberesOpen} 
                onClose={() => setSaberesOpen(false)}
                nodes={nodes}
                slots={slots}
                setNodes={setNodes}
            />
            <RecompensasModal isOpen={isRecompensasOpen} onClose={() => setRecompensasOpen(false)} nodes={rewardItems} userLevel={MOCK_USER_LEVEL} onUnlock={handleUnlockReward} />

            {selectedNode && (
                <div className="trail-panel-overlay" onClick={handleClosePanel}>
                    <div className={`trail-detail-panel open`} onClick={e => e.stopPropagation()}>
                        <header className="panel-header">
                            <h2><div className={`node-icon-wrapper node-type-${selectedNode.type}`}><NodeIcon type={selectedNode.type} /></div>{selectedNode.type.charAt(0).toUpperCase() + selectedNode.type.slice(1)}</h2>
                            <button onClick={handleClosePanel} className="close-panel-btn" aria-label="Fechar painel"><CloseIcon /></button>
                        </header>
                        <div className="panel-content">
                            <h3>{selectedNode.title}</h3>
                            <p className="date">{formatPanelDate(selectedNode.date)}</p>
                            <dl className="meta-list">
                                {selectedNode.xpEarned > 0 && <div className="meta-item"><dt>XP Ganhos</dt><dd>+{selectedNode.xpEarned} XP</dd></div>}
                                {selectedNode.meta.location && <div className="meta-item"><dt>Local</dt><dd>{selectedNode.meta.location}</dd></div>}
                                {selectedNode.meta.category && <div className="meta-item"><dt>Categoria</dt><dd>{selectedNode.meta.category}</dd></div>}
                                {selectedNode.meta.description && <div className="meta-item"><dt>Descrição</dt><dd>{selectedNode.meta.description}</dd></div>}
                                {selectedNode.meta.benefit && <div className="meta-item"><dt>Benefício</dt><dd>{selectedNode.meta.benefit}</dd></div>}
                                {selectedNode.meta.requirement && <div className="meta-item"><dt>Requisito</dt><dd>{selectedNode.meta.requirement}</dd></div>}
                                {selectedNode.meta.notes && <div className="meta-item"><dt>Notas</dt><dd>{selectedNode.meta.notes}</dd></div>}
                            </dl>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};