<script lang="ts">
  import SelectMultiple from "$/components/base/selectMultiple.svelte";
  import { Origin } from "$/shared/types/origin.type";
  import { PokemonType } from "$/shared/types/pokemonType.type";

  export let activeTypeFilters: PokemonType[] = [];
  export let activeRegionFilter: Origin[] = [];
</script>

<div class="flex flex-row gap-2">
  <SelectMultiple label="Type :" options={Object.values(PokemonType)} bind:selectedOptions={activeTypeFilters} />
  <SelectMultiple label="Région :" options={Object.values(Origin)} bind:selectedOptions={activeRegionFilter} />
</div>