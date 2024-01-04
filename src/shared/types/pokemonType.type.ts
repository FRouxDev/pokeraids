export enum PokemonType {
  FIGHTING = 'Combat',
  FLYING = 'Vol',
  POISON = 'Poison',
  GROUND = 'Sol',
  ROCK = 'Roche',
  BUG = 'Insecte',
  GHOST = 'Spectre',
  STEEL = 'Acier',
  FIRE = 'Feu',
  WATER = 'Eau',
  GRASS = 'Plante',
  ELECTRIC = 'Électrik',
  PSY = 'Psy',
  ICE = 'Glace',
  DRAGON = 'Dragon',
  FAIRY = 'Fée',
  DARK = 'Ténèbres',
  NORMAL = 'Normal',
}

export const isStringPokemonType = (str: string | unknown): str is PokemonType => {
  if (typeof str !== 'string') return false;
  const pokemonTypes = Object.values(PokemonType) as string[];
  return pokemonTypes.includes(str);
};
