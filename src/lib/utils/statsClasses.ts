const STATS_CLASSES = {
  veryLow: 'bg-orange-600 text-gray-100',
  low: 'bg-amber-400 text-gray-100',
  average: 'bg-amber-200 text-gray-900',
  good: 'bg-emerald-400 text-gray-100',
  veryGood: 'bg-emerald-600 text-gray-100',
};

const COMMON_CLASSES = 'text-center';

const getStatsRank = (value: number): keyof typeof STATS_CLASSES => {
  if (value < 60) return 'veryLow';
  if (value >= 60 && value < 80) return 'low';
  if (value >= 80 && value < 100) return 'average';
  if (value >= 100 && value < 120) return 'good';
  if (value >= 120) return 'veryGood';
  return 'average';
};

export const getStatsClasses = (value: number) => {
  return [COMMON_CLASSES, STATS_CLASSES[getStatsRank(value)]].join(' ');
};

export const getWidthPercent = (value: number, maxValue: number) => {
  const percent = Math.round((value / maxValue) * 100);
  return percent;
};
