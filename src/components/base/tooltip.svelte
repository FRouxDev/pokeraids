<script lang="ts">
  export let text: string;
  export let content: string;
  let w: number;
</script>

<div class="group relative">
  <div class="font-semibold cursor-pointer">{text}</div>
  <div class="invisible absolute p-2 text-sm w-64 group-hover:visible bg-gray-900 text-gray-100 rounded z-10 -left-16">{content}</div>
</div>
