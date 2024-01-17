<script lang="ts">
  export let status: 'error' | 'success';
  export let content: string;

  const CLASS_MAPPING = {
    success: "bg-green-400 rounded px-2 py-1 text-green-800 mb-2 font-semibold",
    error: "bg-red-400 rounded px-2 py-1 text-red-800 mb-2 font-semibold",
  };

  $: bannerClasses = CLASS_MAPPING[status];
</script>

<div class={bannerClasses}>
  {content}
</div>