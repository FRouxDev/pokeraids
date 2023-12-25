<script>
  import "$/app.css";
  import Heading from "$/components/base/heading.svelte";
  export let data;
</script>

<div class="w-3/4 m-auto flex flex-col">
  <Heading>{data.nameFr}</Heading>
  <p>Le type de {data.nameFr} est {data.type1}{data.type2 ? `/${data.type2}` : ''}</p>
</div>