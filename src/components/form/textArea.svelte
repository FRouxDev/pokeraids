<script lang="ts">
  export let id: string;
  export let name: string;
  export let placeholder: string;
  export let label: string;
  export let rows: number;
</script>

<label class="block text-gray-100 text-sm font-semibold my-2" for={id}>
  {label}
</label>
<textarea
  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
  id={id}
  name={name}
  placeholder={placeholder}
  rows={rows}
></textarea>