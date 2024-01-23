<script lang="ts">
  import Heading from "$/components/base/heading.svelte";
  import TypeChip from "$/components/base/typeChip.svelte";
  import type { PokemonSpecies } from "$/lib/data/models/PokemonSpecies";
  import { plurals } from "$/lib/utils/plurals";

  export let pokemon: PokemonSpecies;
  export let buildsCount: number = 0;
</script>

<a href={`/pokedex/${pokemon.slug}`}>
  <div class="rounded-lg p-2 pb-4 bg-pokeblue-darker border-2 border-opacity-0 hover:border-opacity-100 border-sky-500 flex flex-row gap-4 h-full">
    <img src={`/sprites/${pokemon.picture}`} alt={pokemon.nameFr} class="h-16 w-16 self-center" />
    <div class="flex flex-col gap-1">
      <div>
        <Heading level={2}>{pokemon.nameFr}</Heading>
        {#if pokemon.formFr !== undefined}
          <Heading level={3}>{pokemon.formFr}</Heading>
        {/if}
      </div>
      <div>
      <TypeChip pokemonType={pokemon.type1} />
      {#if pokemon.type2 !== undefined}
        <TypeChip pokemonType={pokemon.type2} />
      {/if}
      </div>
      <div>{pokemon.origin}</div>
      <div>{buildsCount} build{plurals(buildsCount)} disponible{plurals(buildsCount)}</div>
    </div>
  </div>
</a>
