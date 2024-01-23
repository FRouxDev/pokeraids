<script lang="ts">
  import FormButton from "$/components/base/formButton.svelte";
  import Heading from "$/components/base/heading.svelte";
  import StatusBanner from "$/components/base/statusBanner.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import DbCollectionTable from "$/components/table/dbCollectionTable.svelte";
  import type { RaidBuild } from "$/lib/data/models/RaidBuild";
  import SideMenu from "../../components/sideMenu.svelte";
  export let data: { raidBuildsList: RaidBuild[] };
  export let form;
  $: ({ raidBuildsList } = data);

  type HeaderValue = {
    label: string;
    key: keyof RaidBuild;
  };

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
  <Heading>Gestionnaire Database</Heading>
  <div class="flex flex-row gap-4">
    <div class="mt-8">
      <SideMenu />
    </div>
    <div class="bg-background-light p-4 rounded mb-4 mt-8 w-full">
      {#if form}<StatusBanner status="success" content="Build supprimé avec succès" />{/if}
      <div class="my-2"><a href="./builds/new"><FormButton label="Nouveau Build" type="button" /></a></div>
      <DbCollectionTable headers={headers} itemsType="builds" action="?/deleteRaidBuild" deleteName="itemId" rows={raidBuildsList} />
    </div>
  </div>
</PageLayout>