<script lang="ts">
  import FormButton from "$/components/base/formButton.svelte";
  import Heading from "$/components/base/heading.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import Sidebar from "$/components/layout/sidebar/sidebar.svelte";
  import type { SidebarItem } from "$/components/layout/sidebar/sidebar.type";

  export let data;
  $: ({ abilitiesCount, pokemonCount, movesCount, buildsCount } = data);

  let sideMenu: SidebarItem[] = [
    { 
      label: 'Abilities',
      target: '/db-manager/crud/abilities',
    },
    {
      label: 'Moves',
      target: '/db-manager/crud/moves',
    },
    { 
      label: 'Pokémon Species',
      target: '/db-manager/crud/pokemon-species',
    },
    {
      label: 'Builds',
      target: '/db-manager/crud/builds',
    },
  ];
</script>
<PageLayout>
  <Heading>Gestionnaire Database</Heading>
  <div class="flex flex-row gap-4">
    <div class="mt-8">
      <Sidebar items={sideMenu} />
    </div>
    <div class="bg-background-light p-4 rounded mb-4 mt-8 w-full">
      <p>Votre base de données comporte actuellement :</p>
      <ul>
        <li>{pokemonCount} espèces de Pokémon</li>
        <li>{abilitiesCount} talents</li>
        <li>{movesCount} attaques</li>
        <li>{buildsCount} builds de raids</li>
      </ul>
      <div class="flex flex-row gap-2 mt-4">
        <form method="POST" action="?/list-abilities">
          <FormButton label="Synchro Talents" />
        </form>
        
        <form method="POST" action="?/list-pokemon">
          <FormButton label="Synchro Pokémon" />
        </form>
      
        <form method="POST" action="?/list-builds">
          <FormButton label="Synchro Builds" />
        </form>
      </div>
    </div>
  </div>
</PageLayout>
