<script>
  export let data;
  console.log(data);
</script>

<h1>Liste des Pokémon</h1>
<ul>
  {#each data.pokemonList as pokemon}
    <li>{pokemon.nameFr}</li>
  {/each}
</ul>