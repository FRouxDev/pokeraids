<script lang="ts">
  import Heading from "$/components/base/heading.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import PokedexTable from "$/components/table/pokedexTable.svelte";
  import type { PokemonSpecies } from "$/lib/data/models/PokemonSpecies"; 
  export let data: { pokemonList: PokemonSpecies[] };

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
  <div class="bg-background-light rounded-lg p-4">
    <PokedexTable headers={headers} rows={data.pokemonList} />
  </div>
</PageLayout>
