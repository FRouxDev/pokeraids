<script lang="ts">
  export let width = 560;
  export let height = 315;
  export let url: string;
</script>

<iframe 
  width={width}
  height={height}
  src={url}
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
>
</iframe>