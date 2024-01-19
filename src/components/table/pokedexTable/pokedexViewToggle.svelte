<script lang="ts">
  import ListBulletIcon from "$/components/icons/listBulletIcon.svelte";
  import SquaresIcon from "$/components/icons/squaresIcon.svelte";

  export let viewMode: 'list' | 'grid' = 'grid';

  const setViewMode = (mode: 'list' | 'grid') => {
    viewMode = mode;
  }
</script>

<div>
  <div class="rounded bg-pokeyellow text-gray-900 flex flex-row items-center p-0 m-auto"> 
    <button class="px-1 py-1 w-7 rounded-l hover:bg-pokeyellow-active" on:click={() => setViewMode('grid')}>
      <SquaresIcon />
    </button>
    <button class="px-1 py-1 w-7 rounded-r hover:bg-pokeyellow-active" on:click={() => setViewMode('list')}>
      <ListBulletIcon />
    </button> 
  </div>
</div>