<script lang="ts">
  import Heading from "$/components/base/heading.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import PokedexGrid from "$/components/table/pokedexTable/pokedexGrid/pokedexGrid.svelte";
  import PokedexTable from "$/components/table/pokedexTable/pokedexTable.svelte";
  import PokedexTableFilters from "$/components/table/pokedexTable/pokedexTableFilters.svelte";
  import PokedexViewToggle from "$/components/table/pokedexTable/pokedexViewToggle.svelte";
  import type { PokemonSpecies } from "$/lib/data/models/PokemonSpecies"; 
  import type { Origin } from "$/shared/types/origin.type";
  import type { PokemonType } from "$/shared/types/pokemonType.type";
  export let data: { pokemonList: PokemonSpecies[] };
  let activeTypeFilters: PokemonType[] = [];
  let activeRegionFilter: Origin[] = [];
  let displayMode: 'grid' | 'list' = 'grid';

  type HeaderData = {
    label: string;
    key: keyof PokemonSpecies;
  };

  let headers: HeaderData[] = [
    {
      label: 'Nom',
      key: 'nameFr',
    },
    {
      label: 'Type 1',
      key: 'type1',
    },
    {
      label: 'Type 2',
      key: 'type2',
    },
    {
      label: 'Région(s)',
      key: 'origin'
    }
  ];
</script>

<PageLayout>
  <Heading>Pokédex</Heading>
  <p class="my-8">Retrouvez sur cette page la liste des Pokémon disposant de builds de raids sur notre site.</p>
  <div class="bg-background-light rounded-lg p-4 mb-4 flex flex-row justify-between">
    <PokedexTableFilters bind:activeTypeFilters={activeTypeFilters} bind:activeRegionFilter={activeRegionFilter} />
    <PokedexViewToggle bind:viewMode={displayMode} />
  </div>
  <div class="bg-background-light rounded-lg p-4">
    {#if displayMode === 'list'}
      <PokedexTable headers={headers} rows={data.pokemonList} activeRegionFilter={activeRegionFilter} activeTypeFilters={activeTypeFilters} />
    {:else if displayMode === 'grid'}
      <PokedexGrid rows={data.pokemonList} />
    {/if}
  </div>
</PageLayout>
