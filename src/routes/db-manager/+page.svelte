<script>
  import FormButton from "$/components/base/formButton.svelte";
  export let data;
  $: ({ abilitiesCount, pokemonCount, movesCount } = data);
</script>
<p>Manager de DB bonjour !</p>
<div class="bg-background-light p-4 rounded my-4">
  <p>Votre base de données comporte actuellement :</p>
  <ul>
    <li>{pokemonCount} espèces de Pokémon</li>
    <li>{abilitiesCount} talents</li>
    <li>{movesCount} attaques</li>
  </ul>
</div>

<div class="flex flex-row gap-2">
  <form method="POST" action="?/list-abilities">
    <FormButton label="Synchro Talents" />
  </form>
  
  <form method="POST" action="?/list-pokemon">
    <FormButton label="Synchro Pokémon" />
  </form>
</div>
