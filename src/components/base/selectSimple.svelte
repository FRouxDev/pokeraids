<script lang="ts">
  export let options: string[];
</script>

<select>
  {#each options as option}
    <option>{option}</option>
  {/each}
</select>