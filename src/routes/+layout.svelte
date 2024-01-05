<script lang="ts">
  import '$/app.css';
  import Footer from '$/components/layout/footer/footer.svelte';
  import Navbar from '$/components/layout/navbar/navbar.svelte';
  import { pagesItems } from './appNav';
</script>
<div class="bg-background-dark">
  <div class="w-2/3 bg-background text-gray-100 m-auto min-h-screen flex flex-col">
    <Navbar items={pagesItems} />
    <main class="grow"><slot></slot></main>
    <Footer />
  </div>
</div>

