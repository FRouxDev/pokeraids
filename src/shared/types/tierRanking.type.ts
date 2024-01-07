export type RankingValue = 'S' | 'A' | 'B' | 'C' | 'D';

export type TierRanking = {
  solo?: RankingValue;
  multiplayer?: RankingValue;
};
