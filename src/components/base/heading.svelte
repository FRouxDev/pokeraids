<script lang="ts">
  type HeadingLevel = 1 | 2 | 3;
  export let id: string | undefined = undefined;
  export let level: HeadingLevel = 1;
</script>

{#if level === 1}
  <h1 class="font-bold text-pokeyellow text-4xl" id={id}>
    <slot />
  </h1>
{:else if level === 2}
  <h2 class="font-semibold text-pokeyellow text-2xl" id={id}>
    <slot />
  </h2>
{:else if level === 3}
  <h3 class="font-semibold text-xl text-pokeyellow-active" id={id}>
    <slot /> 
  </h3>
{/if}
