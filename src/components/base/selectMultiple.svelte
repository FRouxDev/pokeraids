<script lang="ts">
  export let options: string[];
  let isOpen: boolean = false;
</script>

<div class="relative inline-block">
  <button on:click={() => isOpen = !isOpen} class="bg-white text-gray-500 px-4 py-2 rounded-md">
    Select Options
  </button>

  {#if isOpen}
    <div class="mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg flex flex-col">
      {#each options as option}
        <div class="flex flex-row gap-1 px-2 py-1 cursor-pointer"><input type="checkbox" id={option} /><label for={option} class="text-gray-700">{option}</label></div>
      {/each}
    </div>
  {/if}
</div>

