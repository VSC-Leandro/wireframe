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
