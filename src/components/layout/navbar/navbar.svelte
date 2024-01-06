<script lang="ts">
  import type { NavbarItem } from "./navbar.type";
  export let items: NavbarItem[];
</script>

<nav class="w-full flex flex-row m-3">
  {#each items as item}
    <a href={item.path}>
      <div class="px-4 py-2 font-semibold text-gray-100 rounded hover:bg-pokeyellow hover:text-gray-900">
        {item.label}
      </div>
    </a>
  {/each}
</nav>
