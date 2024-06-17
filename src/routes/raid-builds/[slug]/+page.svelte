<script>
  import Heading from "$/components/base/heading.svelte";
  import Tooltip from "$/components/base/tooltip.svelte";
  import TypeChip from "$/components/base/typeChip.svelte";
  import StatsChart from "$/components/charts/statsChart.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import YoutubeWrapper from "$/components/utils/youtubeWrapper.svelte";
  import { natureDescMapping } from "$/shared/types/pokemonNature.type";

  export let data;
  $: build = data.build;
  $: ({ pokemon } = build);
</script>

<PageLayout>
  <Heading>{build.nameFr}</Heading>
  <div class="bg-background-light rounded-lg p-4 mt-8">
    <div class="mb-4">{build.descriptionFr}</div>
    <div class="grid grid-cols-2 auto-rows-max">
      <div>
        <img src={`/images/${build.pokemon.picture}`} alt={pokemon.nameFr} class="m-auto" />
      </div>
      <div>
        <div class="grid grid-cols-3">
          <div class="col-span-1">Type</div>
          <div class="col-span-2"><TypeChip pokemonType={pokemon.type1} />{#if pokemon.type2}<span class="ml-1"><TypeChip pokemonType={pokemon.type2} /></span>{/if}</div>
          <div class="col-span-1">Type Téracristal</div>
          <div class="col-span-2"><TypeChip pokemonType={build.teraType} /></div>
          <div class="col-span-1">Talents</div>
          <div class="col-span-2">
            <Tooltip text={build.ability.nameFr} content={build.ability.descriptionFr} />
          </div>
          <div class="col-span-1">Objet</div>
          <div class="col-span-2"><Tooltip text={build.item.nameFr} content={build.item.descriptionFr} /></div>
          <div class="col-span-1">Nature</div>
          <div class="col-span-2"><Tooltip text={build.nature} content={natureDescMapping[build.nature]} /></div>

          <div class="col-span-3 mt-6">
            <StatsChart evSpread={build.evSpread} />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <Heading level={2}>Contenu YouTube</Heading>
      {#if build.youtubeLink}
        <div class="my-2"><YoutubeWrapper url={build.youtubeLink} /></div>
      {:else}
        <p>Aucun contenu YouTube disponible pour ce build</p>
      {/if}
    </div>
    <div class="mt-8">
      <Heading level={2}>Builds similaires</Heading>
      <p>Coming soon...</p>
    </div>
  </div>
</PageLayout>
