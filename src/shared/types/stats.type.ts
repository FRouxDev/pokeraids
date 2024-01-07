export enum Stats {
  HP = 'hp',
  ATTACK = 'attack',
  DEFENSE = 'defense',
  SPECIAL_ATTACK = 'spattack',
  SPECIAL_DEFENSE = 'spdefense',
  SPEED = 'speed',
}

export type PokemonStats = Record<Stats, number>;
