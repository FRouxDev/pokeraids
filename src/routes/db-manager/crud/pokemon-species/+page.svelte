<script lang="ts">
  import ActionButton from "$/components/base/actionButton.svelte";
  import Heading from "$/components/base/heading.svelte";
  import StatusBanner from "$/components/base/statusBanner.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import Sidebar from "$/components/layout/sidebar/sidebar.svelte";
  import type { SidebarItem } from "$/components/layout/sidebar/sidebar.type";
  import DbCollectionTable from "$/components/table/dbCollectionTable.svelte";
  import type { PokemonSpecies } from "$/lib/data/models/PokemonSpecies";
  export let data: { pokemonSpeciesList: PokemonSpecies[] };
  export let form;
  $: ({ pokemonSpeciesList } = data);

  type HeaderValue = {
    label: string;
    key: keyof PokemonSpecies;
  };

  let sideMenu: SidebarItem[] = [
    { 
      label: 'Abilities',
      target: '/db-manager/crud/abilities',
    },
    {
      label: 'Moves',
      target: '/db-manager/crud/moves',
    },
    { 
      label: 'Pokémon Species',
      target: '/db-manager/crud/pokemon-species',
    },
    {
      label: 'Builds',
      target: '/db-manager/crud/builds',
    },
  ];

  let headers: HeaderValue[] = [
    {
      label: 'Id',
      key: '_id',
    },
    {
      label: 'Description FR',
      key: 'nameFr',
    },
    {
      label: 'Description EN',
      key: 'nameEn',
    },
  ]
</script>


<PageLayout>
  <Heading>Gestionnaire Database</Heading>
  <div class="flex flex-row gap-4">
    <div class="mt-8">
      <Sidebar items={sideMenu} />
    </div>
    <div class="bg-background-light p-4 rounded mb-4 mt-8 w-full">
      {#if form}<StatusBanner status="success" content="Espèce de Pokémon supprimée avec succès" />{/if}
      <div class="my-2"><a href="./pokemon-species/new"><ActionButton action={() => {}} label="Nouveau Pokémon" /></a></div>
      <DbCollectionTable headers={headers} action="?/deletePokemonSpecies" deleteName="itemId" itemsType="builds" rows={pokemonSpeciesList} />
    </div>
  </div>
</PageLayout>