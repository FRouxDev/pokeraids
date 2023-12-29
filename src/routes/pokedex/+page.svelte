<script lang="ts">
  import Heading from "$/components/base/heading.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import BasicTable from "$/components/table/basicTable.svelte";
  import type { PokemonSpecies } from "$/shared/types/pokemonSpecies.type";
  export let data: { pokemonList: PokemonSpecies[] };

  type HeaderData = {
    label: string;
    key: keyof PokemonSpecies;
    linkId?: keyof PokemonSpecies;
    linkParent?: string;
  };

  let headers: HeaderData[] = [
    {
      label: 'Nom',
      key: 'nameFr',
      linkId: 'id',
      linkParent: '/pokedex',
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

<PageLayout>
  <Heading>Pokédex</Heading>
  <BasicTable headers={headers} rows={data.pokemonList} />
</PageLayout>
