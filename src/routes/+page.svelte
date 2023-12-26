<script lang="ts">
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import Sidebar from "$/components/layout/sidebar/sidebar.svelte";
  import type { SidebarItem } from "$/components/layout/sidebar/sidebar.type";
  let sideMenu: SidebarItem[] = [
    { 
      label: 'Pokedex',
      target: '/pokedex',
    },
    {
      label: 'Console',
      action: () => console.log('Coucou'),
    },
  ];
</script>
<PageLayout>
  <div slot="sidebar">
    <Sidebar items={sideMenu} />
  </div>
  <h1>Hello and welcome to my site!</h1>
  <a href="/pokedex/bulbasaur">Have you heard of Bulbasaur ?</a>
</PageLayout>