<script lang="ts">
  import type { PokemonType } from "$/shared/types/pokemonType.type";
  export let pokemonType: PokemonType | undefined;
  export let size: 'regular' | 'small' = 'small';
  $: prefix = size === 'small' ? '80px-' : '';
</script>

{#if pokemonType}
  {@const alt = `Type ${pokemonType}`}
  {@const src = `/types/${size}/${prefix}Miniature_Type_${pokemonType}_EV.png`}
  <img {src} alt="{alt}" class="m-auto inline"/>
{/if}