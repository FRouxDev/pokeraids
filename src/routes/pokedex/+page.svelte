<script lang="ts">
  import "$/app.css";
  import Heading from "$/components/base/heading.svelte";
  import BasicTable from "$/components/table/basicTable.svelte";
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
      key: 'type1'
    },
    {
      label: 'Type 2',
      key: 'type2',
    },
  ];
</script>

<div class="w-3/4 m-auto flex flex-col">
  <Heading>Pokédex</Heading>
  <BasicTable headers={headers} rows={data.pokemonList} />
</div>
