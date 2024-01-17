<script lang="ts">
  import Heading from "$/components/base/heading.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import Sidebar from "$/components/layout/sidebar/sidebar.svelte";
  import type { SidebarItem } from "$/components/layout/sidebar/sidebar.type";
  import DbCollectionTable from "$/components/table/dbCollectionTable.svelte";
  import type { RaidBuild } from "$/lib/data/models/RaidBuild";
  export let data: { raidBuildsList: RaidBuild[] };
  $: ({ raidBuildsList } = data);

  type HeaderValue = {
    label: string;
    key: keyof RaidBuild;
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
      key: 'descriptionFr',
    },
    {
      label: 'Description EN',
      key: 'descriptionEn',
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
      <DbCollectionTable headers={headers} itemsType="builds" action="?/deleteRaidBuild" deleteName="itemId" rows={raidBuildsList} />
    </div>
  </div>
</PageLayout>