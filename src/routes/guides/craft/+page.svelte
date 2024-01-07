<script lang="ts">
  import Heading from "$/components/base/heading.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import Sidebar from "$/components/layout/sidebar/sidebar.svelte";
  import type { SidebarItem } from "$/components/layout/sidebar/sidebar.type";
  
  let sideMenu: SidebarItem[] = [
    { 
      label: 'Niveau',
      target: '#niveau',
    },
    {
      label: 'Attaques',
      target: '#attaques',
    },
    { 
      label: 'Nature',
      target: '#nature',
    },
    {
      label: 'EVs et IVs',
      target: '#evsivs',
    },
    { 
      label: 'Talent',
      target: '#talent',
    },
    {
      label: 'Type Téracristal',
      target: '#tera',
    },
    {
      label: 'Objets',
      target: '#objets',
    },

  ];
</script>
<PageLayout>
  <Heading>Monter un Pokémon</Heading>
  <div class="flex flex-row gap-4">
    <div class="mt-8">
      <Sidebar items={sideMenu} />
    </div>
    <div class="bg-background-light rounded-lg p-4 mt-8">
      Dans ce guide, découvrez les différentes étapes et méthodes pour monter rapidement un Pokémon prêt à participer à des raids 5 et 6 étoiles.
      <Heading level={2} id="niveau">Niveau</Heading>
      <p>Les raids reset tous les jours à minuit.</p>
      <Heading level={2} id="attaques">Attaques</Heading>
      <p>Les raids reset tous les jours à minuit.</p>
      <Heading level={2} id="nature">Nature</Heading>
      <p>Les raids reset tous les jours à minuit.</p>
      <Heading level={2} id="evsivs">EVs et IVs</Heading>
      <p>Les raids reset tous les jours à minuit.</p>
      <Heading level={2} id="talent">Talent</Heading>
      <p>Les raids reset tous les jours à minuit.</p>
      <Heading level={2} id="tera">Type Téracristal</Heading>
      <p>Les raids reset tous les jours à minuit.</p>
      <Heading level={2} id="objets">Objets</Heading>
      <p>Les raids reset tous les jours à minuit.</p>
    </div>
  </div>
</PageLayout>