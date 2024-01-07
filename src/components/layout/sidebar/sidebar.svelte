<script lang="ts">
  import type { SidebarItem } from "./sidebar.type";
  export let items: SidebarItem[];
</script>

<nav class="flex flex-col bg-background-dark w-64">
  {#each items as item}
    {#if 'target' in item}
      {@const linkItem = item}
      <a href={linkItem.target}>
        <div class="px-4 py-2 font-semibold text-gray-100 hover:bg-pokeblue-dark hover:underline">
          {linkItem.label}
        </div>
      </a>
    {:else if 'action' in item}
      {@const actionItem = item}
      <a href="/" on:click|preventDefault={() => actionItem.action()}>
        <div class="px-4 py-2 font-semibold text-gray-100 hover:bg-pokeblue-dark hover:underline cursor-pointer">
          {item.label}
        </div>
      </a>
    {/if}
  {/each}
</nav>
