import type { Stats } from '$/shared/types/stats.type';

const STATS_TRANSLATION = {
  fr: {
    hp: 'PV',
    attack: 'Attaque',
    defense: 'Défense',
    spattack: 'Attaque Spéciale',
    spdefense: 'Défense Spéciale',
    speed: 'Vitesse',
  },
  en: {
    hp: 'PV',
    attack: 'Attaque',
    defense: 'Défense',
    spattack: 'Attaque Spéciale',
    spdefense: 'Défense Spéciale',
    speed: 'Vitesse',
  },
};

const SHORTER_STATS_TRANSLATION = {
  fr: {
    hp: 'PV',
    attack: 'Atq.',
    defense: 'Déf.',
    spattack: 'Atq. Spé',
    spdefense: 'Déf. Spé',
    speed: 'Vit.',
  },
  en: {
    hp: 'HP',
    attack: 'Atk',
    defense: 'Def',
    spattack: 'Sp Atk',
    spdefense: 'Sp Def',
    speed: 'Spe',
  },
};

export function translateStat(stat: Stats, lang: 'fr' | 'en' = 'fr') {
  return STATS_TRANSLATION[lang][stat];
}

export function translateShortStat(stat: Stats, lang: 'fr' | 'en' = 'fr') {
  return SHORTER_STATS_TRANSLATION[lang][stat];
}
