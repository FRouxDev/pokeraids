import type { PokemonStats } from '$/shared/types/stats.type';

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

export function translateStat(stat: keyof PokemonStats, lang: 'fr' | 'en' = 'fr') {
  return STATS_TRANSLATION[lang][stat];
}
