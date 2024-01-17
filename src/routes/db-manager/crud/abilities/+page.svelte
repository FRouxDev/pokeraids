<script lang="ts">
  import ActionButton from "$/components/base/actionButton.svelte";
  import Heading from "$/components/base/heading.svelte";
  import StatusBanner from "$/components/base/statusBanner.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import Sidebar from "$/components/layout/sidebar/sidebar.svelte";
  import type { SidebarItem } from "$/components/layout/sidebar/sidebar.type";
  import DbCollectionTable from "$/components/table/dbCollectionTable.svelte";
  import type { Ability } from "$/lib/data/models/Ability";
  export let data: { abilitiesList: Ability[] };
  export let form;
  $: ({ abilitiesList } = data);

  type HeaderValue = {
    label: string;
    key: keyof Ability;
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
      label: 'Nom FR',
      key: 'nameFr',
    },
    {
      label: 'Nom EN',
      key: 'nameEn',
    },
  ]
</script>


<PageLayout>
  <Heading>Gestion des talents</Heading>
  <div class="flex flex-row gap-4">
    <div class="mt-8">
      <Sidebar items={sideMenu} />
    </div>
    <div class="bg-background-light p-4 rounded mb-4 mt-8 w-full">
      {#if form?.success}<StatusBanner status="success" content="Talent supprimé avec succès" />{/if}
      <div class="my-2"><a href="./abilities/new"><ActionButton action={() => {}} label="Nouveau talent" /></a></div>
      <DbCollectionTable headers={headers} itemsType="abilities" action="?/deleteAbility" deleteName="itemId" rows={abilitiesList} />
    </div>
  </div>
</PageLayout>