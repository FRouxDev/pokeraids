<script lang="ts">
  import type { Role } from "$/shared/types/role.type";
  export let label: Role;
</script>

<span class="rounded-full px-3 py-1 font-semibold bg-slate-200 text-slate-900 cursor-pointer text-sm">
  {label}
</span>