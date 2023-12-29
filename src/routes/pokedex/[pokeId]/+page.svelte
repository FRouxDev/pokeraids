<script lang="ts">
  import type { PokemonSpecies } from "$/shared/types/pokemonSpecies.type";
  import Heading from "$/components/base/heading.svelte";
  import TypeChip from "$/components/base/typeChip.svelte";
  import RoleChip from "$/components/base/roleChip.svelte";
  import { Role } from "$/shared/types/role.type";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  export let data: PokemonSpecies;
</script>

<PageLayout>
  <Heading>{data.nameFr}</Heading>
  <p>Le type de {data.nameFr} est <TypeChip pokemonType={data.type1} /></p>
  <p>Role : <RoleChip label={Role.ATTACKER} /></p>
</PageLayout>
