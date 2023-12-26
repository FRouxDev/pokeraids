<script lang="ts">
  export let size: 'medium' | 'small' = 'medium';
</script>

{#if size === 'medium'}
  <p class="font-regular text-base">
    <slot />
  </p>
{:else if size === 'small'}
  <p class="font-regular text-sm">
    <slot /> 
  </p>
{/if}