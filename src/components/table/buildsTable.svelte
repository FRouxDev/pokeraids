<script lang="ts">
  import { translateShortStat } from "$/lib/services/localize.service";
  import type { EvSpread } from "$/shared/types/evSpread.type";
  import type { RaidBuild } from "$/lib/data/models/RaidBuild";
  import type { PokemonStats } from "$/shared/types/stats.type";
  import { goto } from "$app/navigation";
  import Tooltip from "../base/tooltip.svelte";
  import TypeChip from "../base/typeChip.svelte";
  import ChevronDownIcon from "../icons/chevronDownIcon.svelte";
  import ChevronUpIcon from "../icons/chevronUpIcon.svelte";
  import ChevronUpDownIcon from "../icons/chevronUpDownIcon.svelte";
  import { removeIdFromKeyArray } from "$/lib/utils/removeIds";

  type HeaderValue = {
    label: string;
    key: keyof RaidBuild;
  };
  type SortOrder = 'asc' | 'desc';

  export let headers: HeaderValue[];
  export let rows: RaidBuild[];

  let sortOrder: SortOrder = 'asc';
  let currentSortKey: keyof RaidBuild = 'slug';
  $: sortValueInf = sortOrder === 'asc' ? -1 : 1;
  $: sortValueSup = sortOrder === 'asc' ? 1 : -1;

  const BUILDS_BASE_URL = 'raid-builds';

  const spreadFormatter = (spread: EvSpread) => {
    let spreadDisplay = '';
    const keys = Object.keys(spread);
    removeIdFromKeyArray(keys);
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
                <ChevronUpIcon size={3} />
              {:else}
                <ChevronDownIcon size={3} />
              {/if}
            {:else}
              <ChevronUpDownIcon size={4} />
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
    <tr class="h-10 hover:bg-background-dark cursor-pointer" on:click={() => goto(`../${BUILDS_BASE_URL}/${row.slug}`)}>
      {#each headers as header, i}
        {#if (row[header.key] !== undefined && (header.key === 'teraType'))}
          <td class="px-2 align-middle pb-1"><TypeChip pokemonType={row[header.key]} /></td>
        {:else if (row[header.key] !== undefined && header.key === 'evSpread')}
          <td class="px-2">{spreadFormatter(row[header.key])}</td>
        {:else if (row[header.key] !== undefined && header.key === 'ability')}
          <td class="px-2 last:pr-3 last:rounded-r-lg"><Tooltip text={row[header.key].nameFr} content={row[header.key].descriptionFr} /></td>
        {:else}
          <td class="first:rounded-l-lg first:pl-3 px-2">{row[header.key] || ''}</td>
        {/if}
      {/each}
    </tr>
  {/each}
</table>
