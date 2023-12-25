<script lang="ts" generics="T">
  import "$/app.css";
  type HeaderValue = {
    label: string;
    key: keyof T;
  };
  export let headers: HeaderValue[];
  export let rows: T[]; 
</script>

<table class="table-auto">
  <tr>
    {#each headers as header}
      <th scope="col">{header.label}</th>
    {/each}
  </tr>
  {#each rows as row}
    <tr>
      {#each headers as header}
        <td>{row[header.key]}</td>
      {/each}
    </tr>
  {/each}
</table>
