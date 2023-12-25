<script>
  export let data;
</script>

<h1>Page de {data.nameFr}</h1>
<p>Le type de {data.nameFr} est {data.type1}{data.type2 ? `/${data.type2}` : ''}</p>