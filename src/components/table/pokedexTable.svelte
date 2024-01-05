<script lang="ts">
  import type { PokemonSpecies } from "$/shared/types/pokemonSpecies.type";
  import { onMount } from "svelte";

  import FooterLink from "../layout/footer/footerLink.svelte";
  import TypeChip from "../base/typeChip.svelte";
  import { PokemonType } from "$/shared/types/pokemonType.type";
  import ChevronUpDown from "../icons/chevronUpDown.svelte";
  import ChevronUp from "../icons/chevronUp.svelte";
  import ChevronDown from "../icons/chevronDown.svelte";

  type HeaderValue = {
    label: string;
    key: keyof PokemonSpecies;
  };
  type SortOrder = 'asc' | 'desc';
  export let headers: HeaderValue[];
  export let rows: PokemonSpecies[];  
  let sortOrder: SortOrder = 'asc';
  let currentSortKey: keyof PokemonSpecies = 'nameFr';
  let sortedRows = [...rows];

  const POKEDEX_BASE_URL = 'pokedex';

  const setSortRows = (key: keyof PokemonSpecies) => {
    if (currentSortKey === key) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      currentSortKey = key;
      sortOrder = 'asc';
    }
    sortRows(currentSortKey, sortOrder);
  }

  const sortRows = (key: keyof PokemonSpecies, order: SortOrder = 'asc') => {
    const sortValueInf = order === 'asc' ? -1 : 1;
    const sortValueSup = order === 'asc' ? 1 : -1;
    sortedRows = sortedRows.sort((pkmn1, pkmn2) => {
      const value1 = pkmn1[key];
      const value2 = pkmn2[key];
      if (value1 !== undefined && value2 !== undefined) {       
        return value1 < value2 ? sortValueInf : sortValueSup;
      } else {
        return sortValueInf;
      }      
    });
  }

  onMount(() => {
    sortRows(currentSortKey, sortOrder);
  });
</script>

<table class="table-fixed">
  <tr>
    {#each headers as header}
      <th scope="col" class="cursor-pointer" on:click={() => setSortRows(header.key)}>
        <div class="flex flex-row gap-1 items-center">
          <span class="w-4 h-4">
            {#if currentSortKey === header.key}
              {#if sortOrder === 'asc'}
                <ChevronUp size={4} />
              {:else}
                <ChevronDown size={4} />
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
  {#each sortedRows as row}
    <tr>
      {#each headers as header}
        {#if header.key === 'nameFr'}
          <td class="w-80"><FooterLink href={`${POKEDEX_BASE_URL}/${row[header.key]}`} label={`${row[header.key]}`} /></td>
        {:else if (row[header.key] !== undefined && (header.key === 'type1' || header.key === 'type2'))}
          <td class="w-24"><TypeChip pokemonType={row[header.key]} /></td>
        {:else}
          <td class="w-24">{row[header.key]}</td>
        {/if}
      {/each}
    </tr>
  {/each}
</table>
