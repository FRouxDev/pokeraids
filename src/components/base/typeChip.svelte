<script lang="ts">
  import type { PokemonType } from "$/shared/types/pokemonType.type";
  export let pokemonType: PokemonType;
  let alt = `Type ${pokemonType}`;
  let src = `/types/80px-Miniature_Type_${pokemonType}_EV.png`;
</script>

<span>
  <img {src} alt="{alt}" />
</span>