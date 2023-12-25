<script lang="ts">
  import "$/app.css";
  import Heading from "$/components/base/heading.svelte";
  import BasicTable from "$/components/table/basicTable.svelte";
  export let data;

  type HeaderData = {
    label: string;
    key: keyof typeof data.pokemonList[0];
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
