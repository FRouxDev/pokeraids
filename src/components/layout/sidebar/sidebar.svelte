<script lang="ts">
  import type { SidebarItem } from "./sidebar.type";
  export let items: SidebarItem[];
</script>

<nav class="flex flex-col bg-slate-600 w-64">
  {#each items as item}
    {#if 'target' in item}
      {@const linkItem = item}
      <a href={linkItem.target}>
        <div class="px-6 py-4 font-semibold text-lg text-slate-100 hover:bg-slate-500">
          {linkItem.label}
        </div>
      </a>
    {:else if 'action' in item}
      {@const actionItem = item}
      <a href="/" on:click|preventDefault={() => actionItem.action()}>
        <div class="px-6 py-4 font-semibold text-lg text-slate-100 hover:bg-slate-500 cursor-pointer">
          {item.label}
        </div>
      </a>
    {/if}
  {/each}
</nav>
