import { CharacterData } from './types';

export const CHARACTER_DATA: CharacterData = {
  name: "Bruna Sampaio",
  class: "Especialista",
  origin: "T.I.",
  nex: "5%",
  stats: {
    pv: { current: 16, max: 16 },
    san: { current: 16, max: 16 },
    pe: { current: 6, max: 6 }
  },
  attributes: {
    agi: 0, for: -1, int: 3, pre: 2, vig: 0
  },
  skills: [
    { name: "Atletismo", attr: "FOR", value: -1, trained: false },
    { name: "Atualidades", attr: "INT", value: 8, trained: true }, 
    { name: "Ciência", attr: "INT", value: 3, trained: false },
    { name: "Diplomacia", attr: "PRE", value: 7, trained: true }, 
    { name: "Enganação", attr: "PRE", value: 7, trained: true }, 
    { name: "Fortitude", attr: "VIG", value: 5, trained: true }, 
    { name: "Furtividade", attr: "AGI", value: 0, trained: false },
    { name: "Intimidação", attr: "PRE", value: 2, trained: false },
    { name: "Intuição", attr: "INT", value: 8, trained: true }, 
    { name: "Investigação", attr: "INT", value: 8, trained: true }, 
    { name: "Luta", attr: "FOR", value: -1, trained: false },
    { name: "Medicina", attr: "INT", value: 3, trained: false },
    { name: "Ocultismo", attr: "INT", value: 3, trained: false },
    { name: "Percepção", attr: "PRE", value: 7, trained: true }, 
    { name: "Pilotagem", attr: "AGI", value: 0, trained: false },
    { name: "Pontaria", attr: "AGI", value: 5, trained: true }, 
    { name: "Profissão", attr: "INT", value: 8, trained: true }, 
    { name: "Reflexos", attr: "AGI", value: 5, trained: true }, 
    { name: "Religião", attr: "PRE", value: 7, trained: true }, 
    { name: "Tática", attr: "INT", value: 3, trained: false },
    { name: "Tecnologia", attr: "INT", value: 8, trained: true }, 
    { name: "Vontade", attr: "PRE", value: 7, trained: true }
  ],
  inventory: [
     { name: "Notebook (Kit Informática)", slots: 1 },
     { name: "Pistola Glock 17", slots: 1 },
     { name: "Parafernalha Hacker", slots: 1 }
  ]
};