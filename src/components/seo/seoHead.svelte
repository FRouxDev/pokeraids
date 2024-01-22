<script lang="ts">
  export let pageName: string;
  export let description: string;
  export let path: string;
  $: title = `${pageName} | PokéRaids`;

  console.log(path);

  const SITE_ROOT = 'http://localhost:5173';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={`${SITE_ROOT}${path}`} />
  <meta property="og:image" content={`${SITE_ROOT}/assets/logoPokeraids_md.png`} />
</svelte:head>
