<script lang="ts">
  import { translateStat } from "$/lib/services/localize.service";
  import { removeIdFromKeyArray } from "$/lib/utils/removeIds";
  import { getStatsClasses, getWidthPercent } from "$/lib/utils/statsClasses";
  import type { PokemonStats } from "$/shared/types/stats.type";
  export let stats: PokemonStats;
  const isStatsKey = (value: string): value is keyof typeof stats => {
    const keys = Object.keys(stats);
    removeIdFromKeyArray(keys);
    return keys.includes(value);
  };
  $: maxValue = Math.max(...Object.values(stats));
</script>

<div class="grid grid-cols-3 gap-1">
  {#each Object.keys(stats) as stat}
    {#if isStatsKey(stat)}
      <div class="col-span-1">{translateStat(stat)}</div>
      <div class="col-span-2">
        <div class={getStatsClasses(stats[stat])} style={`width: ${getWidthPercent(stats[stat], maxValue)}%`}>{stats[stat]}</div>
      </div>
    {/if}
  {/each}
</div>