<script lang="ts">
  import FormButton from "$/components/base/formButton.svelte";
  import Heading from "$/components/base/heading.svelte";
  import StatusBanner from "$/components/base/statusBanner.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import DbCollectionTable from "$/components/table/dbCollectionTable.svelte";
  import type { PokemonSpecies } from "$/lib/data/models/PokemonSpecies";
  import SideMenu from "../../components/sideMenu.svelte";
  export let data: { pokemonSpeciesList: PokemonSpecies[] };
  export let form;
  $: ({ pokemonSpeciesList } = data);

  type HeaderValue = {
    label: string;
    key: keyof PokemonSpecies;
  };

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
      <SideMenu />
    </div>
    <div class="bg-background-light p-4 rounded mb-4 mt-8 w-full">
      {#if form}<StatusBanner status="success" content="Espèce de Pokémon supprimée avec succès" />{/if}
      <div class="my-2"><a href="./pokemon-species/new"><FormButton label="Nouveau Pokémon" type="button" /></a></div>
      <DbCollectionTable headers={headers} action="?/deletePokemonSpecies" deleteName="itemId" itemsType="builds" rows={pokemonSpeciesList} />
    </div>
  </div>
</PageLayout>