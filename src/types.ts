import React from 'react';

/**
 * Define a estrutura de dados para um Guia.
 * Centralizar tipos como este melhora a consistência e a manutenibilidade.
 */
export interface Guide {
  id: number;
  title: string;
  date: string;
  author: string;
  description: string;
}

/**
 * Define a estrutura de dados para um Evento.
 */
export interface Event {
  id: number;
  title: string;
  date: string;
  dayOfWeek: string;
  time: string;
  location: string;
  organizer: string;
  categoryId: number;
  description: string;
  participants: number;
  participantAvatars: string[];
}

/**
 * Define a estrutura de dados para uma Categoria de Evento.
 */
export interface Category {
  id: number;
  name: string;
  eventCount: number;
  Icon: React.FC<any>;
}

/**
 * Define a estrutura de dados para um Reporte no mapa.
 */
export interface Report {
  id: number;
  type: 'Queimada' | 'Desmatamento' | 'Enchente';
  position: [number, number];
  timestamp: string;
}

/**
 * Define os tipos de nós possíveis na Trilha.
 */
export type NodeType = 'creation' | 'event' | 'glossary' | 'knowledge' | 'reward';

/**
 * Define a estrutura de metadados para cada tipo de nó.
 */
export type NodeMeta = {
  notes?: string;
  category?: string;
  location?: string;
  saberes_aplicados?: string[];
  description?: string;
  equipped?: boolean;
  requirement?: string;
  levelRequired?: number;
  cost?: number;
  benefit?: string;
  unlocked?: boolean;
  iconName?: string;
  saberLevel?: number;
};

/**
 * Define a estrutura de dados para um nó na Trilha & Histórias.
 */
export interface TrailNode {
  id: string;
  type: NodeType;
  title: string;
  date: string; // ISO 8601 format
  xpEarned: number;
  meta: NodeMeta;
  parentId: string | null;
  position: { top?: number, bottom: number, left: number }; // position in %
}