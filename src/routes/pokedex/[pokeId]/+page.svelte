<script lang="ts">
  import type { PokemonSpecies } from "$/shared/types/pokemonSpecies.type";
  import Heading from "$/components/base/heading.svelte";
  import TypeChip from "$/components/base/typeChip.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import StatsTable from "$/components/table/statsTable.svelte";
  import type { Pokemon } from "$/shared/types/pokemon.type";
  import BuildsTable from "$/components/table/buildsTable.svelte";
  type PokedexData = {
    pokemon: PokemonSpecies,
    builds: Pokemon[]
  };
  export let data: PokedexData;
  $: pokemon = data.pokemon;
  $: builds = data.builds;

  type HeaderData = {
    label: string;
    key: keyof Pokemon;
  };

  let headers: HeaderData[] = [
    {
      label: 'Description',
      key: 'description',
    },
    {
      label: 'Type Téracristal',
      key: 'teraType',
    },
    {
      label: 'Statistiques',
      key: 'evSpread',
    },
    {
      label: 'Talent',
      key: 'ability'
    }
  ];
</script>

<PageLayout>
  <Heading>{pokemon.nameFr}</Heading>
  <div class="bg-background-light rounded-lg p-4 mt-8">
    <div class="grid grid-cols-2 auto-rows-max">
      <div>
        <img src={`/images/${pokemon.picture}`} alt={pokemon.nameFr} class="m-auto" />
      </div>
      <div>
        <div class="grid grid-cols-3">
          <div class="col-span-1">Type</div>
          <div class="col-span-2"><TypeChip pokemonType={pokemon.type1} /></div>
          <div class="col-span-1">Région</div>
          <div class="col-span-2">{pokemon.origin}</div>
          <div class="col-span-1">Talents</div>
          <div class="col-span-2">
            {#if pokemon.abilities}
              <ul> 
                {#each pokemon.abilities as ability}
                  <li>{ability.nameFr}</li>
                {/each}
              </ul>
            {/if}
          </div>

          {#if pokemon.hiddenAbility}
            <div class="col-span-1">Talent caché</div>
            <div class="col-span-2">{pokemon.hiddenAbility.nameFr}</div>
          {/if}
          {#if pokemon.pokemonStats}
            <div class="col-span-3 mt-6">
              <StatsTable stats={pokemon.pokemonStats} />
            </div>
          {/if}
        </div>
      </div>
    </div>
    <div class="mt-8">
      <Heading level={2}>Builds avec ce Pokémon</Heading>
      {#if builds}
        <div class="mt-2">
          <BuildsTable headers={headers} rows={builds} />
        </div>
      {:else}
        <p>Aucun build répertorié pour ce Pokémon :(</p>
      {/if}
    </div>
  </div>
</PageLayout>
