<script lang="ts">
  import FormButton from "$/components/base/formButton.svelte";
  import Heading from "$/components/base/heading.svelte";
  import StatusBanner from "$/components/base/statusBanner.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import DbCollectionTable from "$/components/table/dbCollectionTable.svelte";
  import type { Ability } from "$/lib/data/models/Ability";
  import SideMenu from "../../components/sideMenu.svelte";
  export let data: { abilitiesList: Ability[] };
  export let form;
  $: ({ abilitiesList } = data);

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
      {#if form?.success}<StatusBanner status="success" content="Talent supprimé avec succès" />{/if}
      <div class="my-2"><a href="./abilities/new"><FormButton label="Nouveau talent" type="button" /></a></div>
      <DbCollectionTable headers={headers} itemsType="abilities" action="?/deleteAbility" deleteName="abilityId" rows={abilitiesList} />
    </div>
  </div>
</PageLayout>