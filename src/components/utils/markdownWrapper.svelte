<script lang="ts">
  import './markdown.css';
  import SvelteMarkdown from "svelte-markdown";
  export let content: string;
</script>

<SvelteMarkdown source={content} />