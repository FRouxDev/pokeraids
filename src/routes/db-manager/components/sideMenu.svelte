<script lang="ts">
  import Sidebar from "$/components/layout/sidebar/sidebar.svelte";
  import type { SidebarItem } from "$/components/layout/sidebar/sidebar.type";
  const sideMenu: SidebarItem[] = [
    { 
      label: 'Talents',
      target: '/db-manager/crud/abilities',
    },
    { 
      label: 'Objets',
      target: '/db-manager/crud/items',
    },
    {
      label: 'Attaques',
      target: '/db-manager/crud/moves',
    },
    { 
      label: 'Pokémon',
      target: '/db-manager/crud/pokemon-species',
    },
    {
      label: 'Builds',
      target: '/db-manager/crud/builds',
    },
  ];  
</script>

<Sidebar items={sideMenu} />