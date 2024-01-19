<script lang="ts">
  import { clickOutside } from "$/lib/custom/clickOutside";
  import type { LinkItem } from "./navbar.type";
  export let items: LinkItem[];
  export let label: string;
  let isOpen = false;
</script>

<div class="relative">
  <button 
    class="px-4 py-2 font-semibold text-gray-100 rounded hover:bg-pokeyellow hover:text-gray-900 relative" 
    on:click={() => isOpen = true}
    tabindex="0"
  >
    {label}
  </button>

  {#if isOpen}
    <div
      class="mt-2 w-auto min-w-full bg-background-light rounded-md shadow-lg flex flex-col absolute" 
      use:clickOutside on:click_outside={() => { isOpen = false }}
    >
      {#each items as item, i (i)}
        <a href={item.path}>
          <div class="first:rounded-t-md last:rounded-b-md px-4 py-2 text-gray-100 font-semibold hover:bg-pokeyellow hover:text-gray-900 min-w-48">
            {item.label}
          </div>
        </a>
      {/each}
    </div>
  {/if}
</div>
