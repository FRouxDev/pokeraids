<script lang="ts">
  import type { Role } from "$/shared/types/role.type";
  export let label: Role;
</script>

<span class="rounded-full px-3 py-1 font-semibold bg-gray-200 text-gray-900 cursor-pointer text-sm">
  {label}
</span>