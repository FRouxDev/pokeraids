<script lang="ts">
  import '$/app.css';
  import Navbar from '$/components/layout/navbar/navbar.svelte';
  import { pagesItems } from './appNav';
</script>
<div class="bg-slate-900 h-screen">
  <div class="w-2/3 bg-slate-800 text-slate-100 m-auto h-screen">
    <Navbar items={pagesItems} />
    <slot></slot>
  </div>
</div>

