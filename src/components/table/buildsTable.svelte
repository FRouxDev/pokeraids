<script lang="ts">
  import { translateShortStat } from "$/lib/services/localize.service";
  import type { EvSpread } from "$/shared/types/evSpread.type";
  import type { Pokemon } from "$/shared/types/pokemon.type";
  import type { PokemonStats } from "$/shared/types/stats.type";
  import Tooltip from "../base/tooltip.svelte";
  import TypeChip from "../base/typeChip.svelte";
  import ChevronDown from "../icons/chevronDown.svelte";
  import ChevronUp from "../icons/chevronUp.svelte";
  import ChevronUpDown from "../icons/chevronUpDown.svelte";

  type HeaderValue = {
    label: string;
    key: keyof Pokemon;
  };
  type SortOrder = 'asc' | 'desc';

  export let headers: HeaderValue[];
  export let rows: Pokemon[];

  let sortOrder: SortOrder = 'asc';
  let currentSortKey: keyof Pokemon = 'pokemonId';
  $: sortValueInf = sortOrder === 'asc' ? -1 : 1;
  $: sortValueSup = sortOrder === 'asc' ? 1 : -1;

  const spreadFormatter = (spread: EvSpread) => {
    let spreadDisplay = '';
    const keys = Object.keys(spread);
    for (const [index, key] of keys.entries()) {
      spreadDisplay += `${spread[key as keyof EvSpread]} ${translateShortStat(key as keyof PokemonStats)}`;
      if (index < keys.length - 1) {
        spreadDisplay += ' / ';
      }
    }
    return spreadDisplay;
  }
</script>

<table class="table-auto w-full border-separate border-spacing-0">
  <tr class="h-10">
    {#each headers as header}
      <th scope="col" class="cursor-pointer select-none">
        <div class="flex flex-row gap-1 items-center">
          <span class="w-4 h-4">
            {#if currentSortKey === header.key}
              {#if sortOrder === 'asc'}
                <ChevronUp size={3} />
              {:else}
                <ChevronDown size={3} />
              {/if}
            {:else}
              <ChevronUpDown size={4} />
            {/if}
          </span>
          <span class="text-left">
            {header.label}
          </span>
        </div>
      </th>
    {/each}
  </tr>
  {#each rows as row}
    <tr class="h-10 hover:bg-background-dark cursor-pointer">
      {#each headers as header, i}
        {#if (row[header.key] !== undefined && (header.key === 'teraType'))}
          <td class="px-2 align-middle pb-1"><TypeChip pokemonType={row[header.key]} /></td>
        {:else if (row[header.key] !== undefined && header.key === 'evSpread')}
          <td class="px-2">{spreadFormatter(row[header.key])}</td>
        {:else if (row[header.key] !== undefined && header.key === 'ability')}
          <td class="px-2 last:pr-3 last:rounded-r-lg"><Tooltip text={row[header.key].nameFr} content={row[header.key].effectFr} /></td>
        {:else}
          <td class="first:rounded-l-lg first:pl-3 px-2">{row[header.key] || ''}</td>
        {/if}
      {/each}
    </tr>
  {/each}
</table>
