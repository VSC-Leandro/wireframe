import { JusticeIcon, PaletteIcon, CircularEconomyIcon } from './components/icons';
import type { Guide, Event, Category } from './types';

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