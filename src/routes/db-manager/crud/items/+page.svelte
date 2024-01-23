<script lang="ts">
  import ActionButton from "$/components/base/actionButton.svelte";
  import Heading from "$/components/base/heading.svelte";
  import StatusBanner from "$/components/base/statusBanner.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import DbCollectionTable from "$/components/table/dbCollectionTable.svelte";
  import type { Ability } from "$/lib/data/models/Ability";
  import type { Item } from "$/lib/data/models/Item";
  import SideMenu from "../../components/sideMenu.svelte";
  export let data: { itemsList: Item[] };
  export let form;
  $: ({ itemsList } = data);

  type HeaderValue = {
    label: string;
    key: keyof Ability;
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
  <Heading>Gestion des talents</Heading>
  <div class="flex flex-row gap-4">
    <div class="mt-8">
      <SideMenu />
    </div>
    <div class="bg-background-light p-4 rounded mb-4 mt-8 w-full">
      {#if form?.success}<StatusBanner status="success" content="Objet supprimé avec succès" />{/if}
      <div class="my-2"><a href="./items/new"><ActionButton action={() => {}} label="Nouvel objet" /></a></div>
      <DbCollectionTable headers={headers} itemsType="items" action="?/deleteItem" deleteName="itemId" rows={itemsList} />
    </div>
  </div>
</PageLayout>