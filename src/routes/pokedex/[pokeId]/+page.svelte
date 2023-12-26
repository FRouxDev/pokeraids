<script lang="ts">
  import type { PokemonSpecies } from "$/shared/types/pokemonSpecies.type";
  import Heading from "$/components/base/heading.svelte";
  import TypeChip from "$/components/base/typeChip.svelte";
  export let data: PokemonSpecies;
</script>

<div class="flex flex-col">
  <Heading>{data.nameFr}</Heading>
  <p>Le type de {data.nameFr} est <TypeChip pokemonType={data.type1} /></p>
</div>