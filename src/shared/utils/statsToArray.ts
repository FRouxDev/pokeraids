import { translateStat } from '$/lib/services/localize.service';
import { Stats } from '../types/stats.type';

export const statsToDisplayArray = () => {
  return Object.values(Stats).map((stat) => translateStat(stat));
};
