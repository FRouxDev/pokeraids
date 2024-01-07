<script lang="ts">
  import type { PokemonSpecies } from "$/shared/types/pokemonSpecies.type";
  import Heading from "$/components/base/heading.svelte";
  import TypeChip from "$/components/base/typeChip.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import StatsTable from "$/components/table/statsTable.svelte";
  export let data: PokemonSpecies;
</script>

<PageLayout>
  <Heading>{data.nameFr}</Heading>
  <div class="bg-background-light rounded-lg p-4 mt-8">
    <div class="grid grid-cols-2 auto-rows-max">
      <div>
        <img src={`/images/${data.picture}`} alt={data.nameFr} class="m-auto" />
      </div>
      <div>
        <div class="grid grid-cols-3">
          <div class="col-span-1">Type</div>
          <div class="col-span-2"><TypeChip pokemonType={data.type1} /></div>
          <div class="col-span-1">Région</div>
          <div class="col-span-2">{data.origin}</div>
          <div class="col-span-1">Talents</div>
          <div class="col-span-2">
            {#if data.abilities}
              <ul> 
                {#each data.abilities as ability}
                  <li>{ability.nameFr}</li>
                {/each}
              </ul>
            {/if}
          </div>

          {#if data.hiddenAbility}
            <div class="col-span-1">Talent caché</div>
            <div class="col-span-2">{data.hiddenAbility.nameFr}</div>
          {/if}
          {#if data.pokemonStats}
            <div class="col-span-3 mt-6">
              <StatsTable stats={data.pokemonStats} />
            </div>
          {/if}
        </div>
    </div>

    <div class="mt-8">
      <Heading level={2}>Builds avec ce Pokémon</Heading>
    </div>
  </div>
</PageLayout>
