<script lang="ts">
  import MarkdownWrapper from "$/components/utils/markdownWrapper.svelte";
  import type { Post } from "$/lib/data/models/News";
  export let data: Post;
</script>

<MarkdownWrapper content={data.content} />