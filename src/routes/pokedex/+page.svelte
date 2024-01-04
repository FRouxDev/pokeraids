<script lang="ts">
  import Heading from "$/components/base/heading.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import PokedexTable from "$/components/table/pokedexTable.svelte";
  import type { PokemonSpecies } from "$/shared/types/pokemonSpecies.type";
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
  <div class="mt-4">
    <PokedexTable headers={headers} rows={data.pokemonList} />
  </div>
</PageLayout>
