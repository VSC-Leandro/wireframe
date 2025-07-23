import { JusticeIcon, PaletteIcon, CircularEconomyIcon, StarIcon, PlantIcon, WrenchIcon, RewardIcon, SearchIcon, TreeRingIcon } from './components/icons';
import type { Guide, Event, Category, TrailNode } from './types';

/**
 * Dados mockados para os guias.
 * Em uma aplicação real, isso seria substituído por uma chamada de API.
 */
export const guidesData: Guide[] = [
  { id: 1, title: 'Como Combater Enchentes', date: '15 DE JUNHO, 2025', author: 'Visão Coop', description: '...' },
  { id: 2, title: 'Plano Verão de Adaptação Climática', date: '01 DE JULHO, 2025', author: 'Coalização o Clima é de Mudança', description: '...' },
  { id: 3, title: 'Protocolo Mutirão', date: '10 DE AGOSTO, 2025', author: 'Visão Coop', description: '...' },
];

/**
 * Dados mockados para os eventos.
 */
export const eventsData: Event[] = [
  { 
    id: 1, 
    title: 'Mutirão de Replantio na Serra da Cantareira', 
    date: '28 AGO', 
    dayOfWeek: 'sábado',
    time: '9:00', 
    location: 'Parque Estadual da Cantareira', 
    organizer: 'SOS Mata Atlântica',
    categoryId: 3,
    description: 'Junte-se a nós para reflorestar uma área crítica da Serra da Cantareira, ajudando a proteger nossas fontes de água e a biodiversidade local.', 
    participants: 50,
    participantAvatars: ['https://randomuser.me/api/portraits/women/1.jpg', 'https://randomuser.me/api/portraits/men/1.jpg', 'https://randomuser.me/api/portraits/women/2.jpg']
  },
  { 
    id: 2, 
    title: 'Limpeza do Manguezal de Santos', 
    date: '28 AGO', 
    dayOfWeek: 'sábado',
    time: '14:00', 
    location: 'Jardim Botânico de Santos', 
    organizer: 'Instituto Mar Limpo',
    categoryId: 3,
    description: 'Participe da limpeza e conservação do manguezal de Santos, um ecossistema vital para a proteção costeira e a vida marinha.', 
    participants: 80,
    participantAvatars: ['https://randomuser.me/api/portraits/men/2.jpg', 'https://randomuser.me/api/portraits/women/3.jpg']
  },
  { 
    id: 3, 
    title: 'Protesto Pacífico por Energias Renováveis', 
    date: '04 SET', 
    dayOfWeek: 'quarta-feira',
    time: '14:00', 
    location: 'Avenida Paulista, São Paulo', 
    organizer: 'Coalização o Clima é de Mudança',
    categoryId: 1,
    description: 'Vamos às ruas para exigir políticas mais fortes de incentivo às energias renováveis e um futuro mais sustentável para o Brasil.', 
    participants: 200,
    participantAvatars: ['https://randomuser.me/api/portraits/men/3.jpg', 'https://randomuser.me/api/portraits/women/4.jpg', 'https://randomuser.me/api/portraits/men/4.jpg']
  },
  { 
    id: 4, 
    title: 'Oficina de Compostagem Doméstica', 
    date: '10 SET', 
    dayOfWeek: 'terça-feira',
    time: '10:00', 
    location: 'Horta Comunitária do Bairro', 
    organizer: 'Cidade Sem Lixo',
    categoryId: 3,
    description: 'Aprenda na prática como transformar seus resíduos orgânicos em adubo rico para suas plantas.', 
    participants: 25,
    participantAvatars: ['https://randomuser.me/api/portraits/women/5.jpg', 'https://randomuser.me/api/portraits/men/5.jpg']
  },
];

/**
 * Dados mockados para as categorias de eventos.
 */
export const categoriesData: Category[] = [
    { id: 1, name: 'Justiça Climática', eventCount: 42, Icon: JusticeIcon },
    { id: 2, name: 'Arte & Cultura', eventCount: 79, Icon: PaletteIcon },
    { id: 3, name: 'Economia Circular', eventCount: 121, Icon: CircularEconomyIcon },
];

/**
 * Dados mockados para a trilha do usuário.
 */
const rawInitialNodes: TrailNode[] = [
  // Nodes visible on the trail
  { id: '1', type: 'creation', title: 'Conta Criada', date: '2024-06-01T10:00:00Z', xpEarned: 0, meta: { notes: 'Início da sua jornada no Território.' }, parentId: null, position: { bottom: 5, left: 50 } },
  { id: '2', type: 'glossary', title: 'Leitura: Justiça Climática', date: '2024-06-05T14:20:00Z', xpEarned: 50, meta: { category: 'Leitura' }, parentId: '1', position: { bottom: 20, left: 50 } },
  { id: '3', type: 'event', title: 'Protesto por Energias Renováveis', date: '2024-06-10T11:00:00Z', xpEarned: 150, meta: { location: 'Avenida Paulista, SP' }, parentId: '2', position: { bottom: 38, left: 50 } },
  { id: '4', type: 'knowledge', title: 'Ativismo Digital', date: '2024-06-10T13:00:00Z', xpEarned: 0, meta: { category: 'Justiça Climática', description: 'Usa redes sociais para ampliar o alcance de pautas.', equipped: false, iconName: 'justice', saberLevel: 2 }, parentId: '3', position: { bottom: 42, left: 20 } },
  { id: '5', type: 'event', title: 'Mutirão de Replantio', date: '2024-06-18T09:00:00Z', xpEarned: 200, meta: { location: 'Serra da Cantareira' }, parentId: '3', position: { bottom: 58, left: 50 } },
  { id: '6', type: 'knowledge', title: 'Botânica Básica', date: '2024-06-18T12:00:00Z', xpEarned: 0, meta: { category: 'Economia Circular', description: 'Ajuda a identificar espécies nativas.', equipped: false, iconName: 'plant', saberLevel: 3 }, parentId: '5', position: { bottom: 62, left: 80 } },
  { id: '7', type: 'reward', title: 'Recompensa: Kit Jardinagem', date: '2024-06-25T17:00:00Z', xpEarned: 0, meta: { requirement: 'Nível 5', benefit: '+10% XP em eventos de plantio.', unlocked: false, levelRequired: 5, cost: 500 }, parentId: '6', position: { bottom: 78, left: 80 } },
  { id: '8', type: 'glossary', title: 'Leitura: Economia Circular', date: '2024-07-02T18:00:00Z', xpEarned: 50, meta: { category: 'Leitura' }, parentId: '5', position: { bottom: 80, left: 50 } },

  // Extra nodes just for inventories/stores
  { id: '9', type: 'knowledge', title: 'Oratória', date: '2024-07-03T10:00:00Z', xpEarned: 0, meta: { category: 'Engajamento', description: 'Melhora a capacidade de mobilização em eventos.', equipped: false, iconName: 'palette', saberLevel: 1 }, parentId: null, position: { bottom: 0, left: 0 } },
  { id: '10', type: 'knowledge', title: 'Primeiros Socorros', date: '2024-07-04T10:00:00Z', xpEarned: 0, meta: { category: 'Segurança', description: 'Conhecimento básico para emergências.', equipped: false, iconName: 'wrench', saberLevel: 1 }, parentId: null, position: { bottom: 0, left: 0 } },
  { id: '11', type: 'reward', title: 'Camiseta Exclusiva', date: '2024-07-05T10:00:00Z', xpEarned: 0, meta: { category: "Vestuário", requirement: 'Nível 3', benefit: 'Item de vestuário cosmético.', unlocked: false, levelRequired: 3, cost: 250 }, parentId: null, position: { bottom: 0, left: 0 } },
  { id: '12', type: 'reward', title: 'Garrafa Térmica', date: '2024-07-06T10:00:00Z', xpEarned: 0, meta: { category: "Acessórios", requirement: 'Nível 2', benefit: 'Acessório útil para eventos.', unlocked: true, levelRequired: 2, cost: 150 }, parentId: null, position: { bottom: 0, left: 0 } },
  { id: '13', type: 'reward', title: 'Voucher Papelaria', date: '2024-07-07T10:00:00Z', xpEarned: 0, meta: { category: "Papelaria", requirement: 'Nível 6', benefit: 'Desconto em lojas parceiras.', unlocked: false, levelRequired: 6, cost: 800 }, parentId: null, position: { bottom: 0, left: 0 } },

  // New Saberes
  { id: '14', type: 'knowledge', title: 'Mobilização', date: '2024-07-08T10:00:00Z', xpEarned: 0, meta: { category: 'Engajamento', description: 'Organiza e engaja comunidades para ações.', equipped: false, iconName: 'justice', saberLevel: 1 }, parentId: null, position: { bottom: 0, left: 0 } },
  { id: '15', type: 'knowledge', title: 'Captação', date: '2024-07-09T10:00:00Z', xpEarned: 0, meta: { category: 'Recursos', description: 'Habilidade de conseguir recursos para projetos.', equipped: false, iconName: 'reward', saberLevel: 2 }, parentId: null, position: { bottom: 0, left: 0 } },
  { id: '16', type: 'knowledge', title: 'Análise de Dados', date: '2024-07-10T10:00:00Z', xpEarned: 0, meta: { category: 'Estratégia', description: 'Interpreta dados para tomar decisões melhores.', equipped: false, iconName: 'search', saberLevel: 1 }, parentId: null, position: { bottom: 0, left: 0 } },
  { id: '17', type: 'knowledge', title: 'Compostagem', date: '2024-07-11T10:00:00Z', xpEarned: 0, meta: { category: 'Economia Circular', description: 'Transforma resíduos orgânicos em adubo.', equipped: false, iconName: 'circular', saberLevel: 1 }, parentId: null, position: { bottom: 0, left: 0 } },
  { id: '18', type: 'knowledge', title: 'Adubação', date: '2024-07-12T10:00:00Z', xpEarned: 0, meta: { category: 'Agricultura', description: 'Nutre o solo para plantas mais saudáveis.', equipped: false, iconName: 'plant', saberLevel: 2 }, parentId: null, position: { bottom: 0, left: 0 } },
  { id: '19', type: 'knowledge', title: 'Semeadura', date: '2024-07-13T10:00:00Z', xpEarned: 0, meta: { category: 'Agricultura', description: 'Técnicas para iniciar o cultivo de plantas.', equipped: false, iconName: 'tree', saberLevel: 1 }, parentId: null, position: { bottom: 0, left: 0 } },
];

export const initialNodesData: TrailNode[] = rawInitialNodes.map(node => {
    // Reset all knowledge items to be unequipped by default
    if (node.type === 'knowledge') {
        return { ...node, meta: { ...node.meta, equipped: false } };
    }
    return node;
});
