<script lang="ts">
  export let href: string;
  export let label: string;
  export let targetBlank: boolean = false;
</script>

<a href={href} target={targetBlank ? '_blank' : '_self'} class="font-semibold hover:text-orange-400">{label}</a>