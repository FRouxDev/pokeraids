<script lang="ts" generics="T extends Record<string, any>">
  import { goto } from "$app/navigation";
 
  type HeaderValue = {
    label: string;
    key: keyof T;
  };
  export let headers: HeaderValue[];
  export let rows: T[];
  export let itemsType: string;
  export let deleteName: string;
  export let action: string;

  const CRUD_BASE_URL = '/db-manager/crud';
</script>

<table class="table-auto w-full border-separate border-spacing-0">
  <tr class="h-10">
    {#each headers as header}
      <th scope="col">
        <div class="flex flex-row gap-1 items-center text-left">
          {header.label}
        </div>
      </th>
    {/each}
  </tr>
  {#each rows as row}
    <tr class="h-10 hover:bg-background-dark cursor-pointer" on:click={() => goto(`${CRUD_BASE_URL}/${itemsType}/${row._id}`)}>
      {#each headers as header}
      {@const value = header.key === '_id' ? row[header.key].toString() : row[header.key]}      
        <td class="px-2 first:rounded-l-lg first:pl-3 last:pr-3 last:rounded-r-lg">{value || ''}</td>
      {/each}
      <td class="px-2">
        <form method="POST" action={action}>
          <button 
            type="submit"
            name={deleteName}
            value={row._id.toString()}
            class="font-semibold text-gray-900 px-3 pt-2 pb-3 bg-pokeyellow-active hover:bg-pokeyellow rounded leading-4 flex items-center"
          >
            Suppr.
          </button>
        </form>
      </td>
    </tr>
  {/each}
</table>