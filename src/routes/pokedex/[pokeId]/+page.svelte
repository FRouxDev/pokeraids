<script lang="ts">
  import "$/app.css";
  import type { PokemonSpecies } from "$/shared/types/pokemonSpecies.type";
  import Heading from "$/components/base/heading.svelte";
  import TypeChip from "$/components/base/typeChip.svelte";
  import { PokemonType } from "$/shared/types/pokemonType.type";
  export let data: PokemonSpecies;
</script>

<div class="w-3/4 m-auto flex flex-col">
  <Heading>{data.nameFr}</Heading>
  <p>Le type de {data.nameFr} est <TypeChip pokemonType={data.type1} /></p>
</div>