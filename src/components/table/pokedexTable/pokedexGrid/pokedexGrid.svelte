<script lang="ts">
  import type { PokemonSpecies } from "$/lib/data/models/PokemonSpecies";
  import PokedexCard from "./pokedexCard.svelte";
  export let rows: PokemonSpecies[];
</script>

<div class="grid grid-cols-3 gap-2">
  {#each rows as pokemon}  
    <PokedexCard pokemon={pokemon} />
  {/each}
</div>
