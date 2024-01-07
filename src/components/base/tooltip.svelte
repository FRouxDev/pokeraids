<script lang="ts">
  export let text: string;
  export let content: string;
  let isVisible = false;

  const showTooltip = () => isVisible = true;
  const hideTooltip = () => isVisible = false;
</script>

<span class="font-semibold" on:mouseenter={() => showTooltip()} on:mouseleave={() => hideTooltip()} role="button" tabindex="0">{text}</span>

{#if isVisible}
  <div class="absolute w-auto mt-1 p-2 text-sm max-w-64 bg-gray-900 text-gray-100 rounded">{content}</div>
{/if}