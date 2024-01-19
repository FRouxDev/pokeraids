<script lang="ts">
  import { type PokemonSpecies } from "$/lib/data/models/PokemonSpecies";
  import TypeChip from "../../base/typeChip.svelte";
  import { PokemonType } from "$/shared/types/pokemonType.type";
  import ChevronUpDownIcon from "../../icons/chevronUpDownIcon.svelte";
  import ChevronUpIcon from "../../icons/chevronUpIcon.svelte";
  import ChevronDownIcon from "../../icons/chevronDownIcon.svelte";
  import { Origin } from "$/shared/types/origin.type";
  import SelectMultiple from "../../base/selectMultiple.svelte";
  import { goto } from "$app/navigation";
  import { removeAccents } from "$/lib/utils/removeAccent";

  type HeaderValue = {
    label: string;
    key: keyof PokemonSpecies;
  };
  type SortOrder = 'asc' | 'desc';

  export let headers: HeaderValue[];
  export let rows: PokemonSpecies[];
  
  export let activeTypeFilters: PokemonType[] = [];
  let activeNameFilter: string = '';
  export let activeRegionFilter: Origin[] = [];
  let sortOrder: SortOrder = 'asc';
  let currentSortKey: keyof PokemonSpecies = 'nameFr';
  $: sortValueInf = sortOrder === 'asc' ? -1 : 1;
  $: sortValueSup = sortOrder === 'asc' ? 1 : -1;
  $: filteredRows = (activeNameFilter || activeTypeFilters.length > 0 || activeRegionFilter.length > 0) ? filterRows() : rows;

  $: sortedRows = [...filteredRows].sort((pkmn1, pkmn2) => {
    const value1 = pkmn1[currentSortKey];
    const value2 = pkmn2[currentSortKey];

    // TODO: Refacto
    if (value1 !== undefined && value2 !== undefined) {
      if (typeof value1 === 'string' && typeof value2 === 'string') {
        const flatValue1 = removeAccents(value1);
        const flatValue2 = removeAccents(value2);
        return flatValue1 < flatValue2 ? sortValueInf : sortValueSup;
      }
      return value1 < value2 ? sortValueInf : sortValueSup;    
    } 
    if (value1 !== undefined && value2 === undefined) {
      return sortValueInf;
    }
    if (value2 !== undefined && value1 === undefined) {
      return sortValueSup;
    }
    return sortValueSup;
  });

  const POKEDEX_BASE_URL = 'pokedex';

  const setSortRows = (key: keyof PokemonSpecies) => {
    if (currentSortKey === key) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      currentSortKey = key;
      sortOrder = 'asc';
    }
  }

  const filterRows = () => {
    return rows.filter((row) => {
      if (activeNameFilter && row.nameFr.includes(activeNameFilter) === false) {
        return false;
      }
      if (activeTypeFilters.length > 0 && (activeTypeFilters.includes(row.type1) === false) && (!row.type2 || activeTypeFilters.includes(row.type2) === false)) {
        return false;
      }
      if (activeRegionFilter.length > 0 && (activeRegionFilter.includes(row.origin) === false)) {
        return false;
      }
      return true;
    });
  };
</script>

<table class="table-auto w-full border-separate border-spacing-0">
  <tr class="h-10">
    <th></th>
    {#each headers as header}
      <th scope="col" class="cursor-pointer select-none" on:click={() => setSortRows(header.key)}>
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
    <th class="text-left px-2">Builds disponibles</th>
  </tr>
  {#each sortedRows as row}
    <tr class="h-10 hover:bg-background-dark cursor-pointer" on:click={() => goto(`${POKEDEX_BASE_URL}/${row.slug}`)}>
      <td class="first:rounded-l-lg py-2 pl-2"><img src={`/sprites/${row.picture}`} alt={row.nameFr} class="w-12 h-12"/></td>
      {#each headers as header, i}
        {#if header.key === 'nameFr'}
          <td class="w-80 pl-2 pr-1">
            <span class="font-semibold hover:text-pokeyellow">
              {row.formFr ? `${row[header.key]} ${row.formFr}` : row[header.key]}
            </span>
          </td>
        {:else if (row[header.key] !== undefined && (header.key === 'type1' || header.key === 'type2'))}
          <td class="w-24 pb-1 align-middle"><TypeChip pokemonType={row[header.key]} /></td>
        {:else}
          <td class="px-2">{row[header.key] || ''}</td>
        {/if}
      {/each}
      <td class="pl-2 last:pr-3 last:rounded-r-lg text-sm">0 build(s) disponible(s)</td>
    </tr>
  {/each}
</table>
