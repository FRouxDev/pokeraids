enum Stats {
  HP = 'hp',
  ATTACK = 'atk',
  DEFENSE = 'def',
  SPECIAL_ATTACK = 'spatk',
  SPECIAL_DEFENSE = 'spdef',
  SPEED = 'speed',
}

export type EvSpread = Partial<Record<Stats, number>>;
