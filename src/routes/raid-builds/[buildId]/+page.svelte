<script>
  import Heading from "$/components/base/heading.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";

  export let data;
  $: build = data.build;
</script>

<PageLayout>
  <Heading>{build.description}</Heading>
</PageLayout>