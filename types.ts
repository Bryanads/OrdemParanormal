export interface CurrentMax {
  current: number;
  max: number;
}

export interface Attributes {
  agi: number;
  for: number;
  int: number;
  pre: number;
  vig: number;
}

export interface Skill {
  name: string;
  attr: keyof Attributes | string; // String allowed for uppercase keys in mock
  value: number;
  trained: boolean;
}

export interface InventoryItem {
  name: string;
  slots: number;
}

export interface CharacterData {
  name: string;
  class: string;
  origin: string;
  nex: string;
  stats: {
    pv: CurrentMax;
    san: CurrentMax;
    pe: CurrentMax;
  };
  attributes: Attributes;
  skills: Skill[];
  inventory: InventoryItem[];
}