<script lang="ts">
  import Heading from "$/components/base/heading.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import Sidebar from "$/components/layout/sidebar/sidebar.svelte";
  import type { SidebarItem } from "$/components/layout/sidebar/sidebar.type";
  
  let sideMenu: SidebarItem[] = [
    { 
      label: 'Raids',
      target: '#raids',
    },
    {
      label: 'Encouragements',
      target: '#encouragements',
    },
  ];
</script>
<PageLayout>
  <Heading>Les mécaniques de raids</Heading>
  <div class="flex flex-row gap-4">
    <div class="mt-8">
      <Sidebar items={sideMenu} />
    </div>
    <div class="bg-background-light rounded-lg p-4 mt-8">
      Dans ce guide, découvrez le fonctionnement des différentes mécaniques concernant les raids Téracristal.
      <Heading level={2} id="raids">Raids</Heading>
      <p>Les raids reset tous les jours à minuit.</p>
      <Heading level={2} id="encouragements">Encouragements</Heading>
      <p>Les raids reset tous les jours à minuit.</p>
    </div>
  </div>
</PageLayout>