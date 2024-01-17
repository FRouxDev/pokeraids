<script lang="ts" generics="T">
  import FooterLink from "../layout/footer/footerLink.svelte";

  type HeaderValue = {
    label: string;
    key: keyof T;
    linkId?: keyof T;
    linkParent?: string;
    formatter?: 'typeChip';
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
        {#if header.linkId}
          <td><FooterLink href={`${header.linkParent || ''}/${row[header.linkId]}`} label={`${row[header.key]}`} /></td>
        {:else}
          <td>{row[header.key]}</td>
        {/if}
      {/each}
    </tr>
  {/each}
</table>
