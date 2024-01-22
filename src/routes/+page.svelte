<script lang="ts">
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import SeoHead from "$/components/seo/seoHead.svelte";
  import { page } from '$app/stores'; 
</script>

<SeoHead 
  pageName="Accueil"
  description="Ceci est un site qui propose des builds Pokémon pour faire des raids !"
  path={$page.url.pathname} 
/>

<PageLayout>
  <h1>Hello and welcome to my site!</h1>
  <a href="/pokedex/bulbasaur">Have you heard of moves ?</a>
</PageLayout>
