<script lang="ts">
  import type { EnrichedPokemonSpecies } from "$/lib/services/pokedex.service";
  import PokedexCard from "./pokedexCard.svelte";
  export let rows: EnrichedPokemonSpecies[];
</script>

<div class="grid grid-cols-3 gap-2">
  {#each rows as row}
    {@const { pokemon, buildsCount } = row}  
    <PokedexCard pokemon={pokemon} buildsCount={buildsCount} />
  {/each}
</div>
