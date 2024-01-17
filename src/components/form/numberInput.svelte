<script lang="ts">
  export let id: string;
  export let name: string;
  export let label: string;
</script>

<label class="block text-gray-100 text-sm font-semibold my-2" for={id}>
  {label}
</label>
<input 
  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" 
  id={id}
  name={name}
  type="number"
  value="0"
/>