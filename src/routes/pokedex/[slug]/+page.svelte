<script lang="ts">
  import { type PokemonSpecies } from "$/lib/data/models/PokemonSpecies";
  import TypeChip from "$/components/base/typeChip.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import StatsTable from "$/components/table/statsTable.svelte";
  import BuildsTable from "$/components/table/buildsTable.svelte";
  import Tooltip from "$/components/base/tooltip.svelte";
  import type { RaidBuild } from "$/lib/data/models/RaidBuild";
  import Heading from "$/components/base/heading.svelte";
  type PokedexData = {
    pokemon: PokemonSpecies,
    builds: RaidBuild[]
  };
  export let data: PokedexData;
  $: pokemon = data.pokemon;
  $: builds = data.builds;

  type HeaderData = {
    label: string;
    key: keyof RaidBuild;
  };

  let headers: HeaderData[] = [
    {
      label: 'Description',
      key: 'nameFr',
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
              {#each pokemon.abilities as ability}
                <Tooltip text={ability.nameFr} content={ability.descriptionFr} />
              {/each}
            {/if}
          </div>

          {#if pokemon.hiddenAbility}
            <div class="col-span-1">Talent caché</div>
            <div class="col-span-2"><Tooltip text={pokemon.hiddenAbility.nameFr} content={pokemon.hiddenAbility.descriptionFr} /></div>
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
