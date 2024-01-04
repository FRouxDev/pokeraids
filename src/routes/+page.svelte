<script lang="ts">
  import SelectMultiple from "$/components/base/selectMultiple.svelte";
  import SelectSimple from "$/components/base/selectSimple.svelte";
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
  <p><SelectMultiple options={['test 1', 'test 2']} /></p>
  <p><SelectSimple options={['test 3', 'test 4']} /></p>
</PageLayout>