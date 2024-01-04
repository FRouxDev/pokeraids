<script lang="ts">
  import type { PokemonType } from "$/shared/types/pokemonType.type";
  export let pokemonType: PokemonType | undefined;
</script>

{#if pokemonType}
  {@const alt = `Type ${pokemonType}`}
  {@const src = `/types/80px-Miniature_Type_${pokemonType}_EV.png`}
  <span>
    <img {src} alt="{alt}" />
  </span>
{/if}