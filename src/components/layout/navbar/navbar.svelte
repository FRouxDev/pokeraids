<script lang="ts">
  import type { NavbarItem } from "./navbar.type";
  export let items: NavbarItem[];
</script>

<nav class="w-full flex flex-row bg-slate-700">
  {#each items as item}
    <a href={item.path}>
      <div class="px-6 py-4 font-semibold text-lg text-slate-100 hover:bg-slate-400">
        {item.label}
      </div>
    </a>
  {/each}
</nav>
