<script lang="ts">
  import type { NavbarItem } from "./navbar.type";
  import SubMenuItem from "./subMenuItem.svelte";
  export let items: NavbarItem[];
</script>

<nav class="w-full flex flex-row items-center m-3 gap-2">
  <a href="/"><img src="/assets/logoPokeraids_sm.png" alt="Pokéraids" /></a>  
  {#each items as item}
    {#if 'path' in item}
      <a href={item.path}>
        <div class="px-4 py-2 font-semibold text-gray-100 rounded hover:bg-pokeyellow hover:text-gray-900">
          {item.label}
        </div>
      </a>
    {:else if 'subItems' in item}
      <SubMenuItem label={item.label} items={item.subItems} />
    {/if}
  {/each}
</nav>
