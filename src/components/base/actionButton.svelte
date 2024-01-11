<script lang="ts">
  export let label:string;
  export let action: () => void;
</script>

<button class="font-semibold text-gray-900 px-3 pt-2 pb-3 bg-pokeyellow-active hover:bg-pokeyellow rounded leading-4 flex items-center" on:click={action}>
  {label}
</button>