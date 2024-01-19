<script lang="ts">
  import type { SelectItem } from "$/shared/types/forms/select.types";

  export let id: string;
  export let name: string;
  export let label: string;
  export let items: SelectItem[];
  export let value: string | undefined = undefined;
</script>

<label class="block text-gray-100 text-sm font-semibold my-2" for={id}>
  {label}
</label>
<select 
  class="shadow bg-white block border rounded w-full py-1 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" 
  id={id}
  name={name}
  bind:value={value}
>
  {#each items as item}
    <option value={item.value}>{item.label}</option>
  {/each}
</select>
