<script lang="ts" generics="T">
  import { clickOutside } from "$/lib/custom/clickOutside";

  export let options: T[];
  export let selectedOptions: T[] = [];
  export let labelKey: keyof T | undefined = undefined;
  export let label: string;
  let isOpen: boolean = false;

  const toggleOption = (event: Event, option: T) => {
    const target = event.target as HTMLInputElement;
    const value = target.checked;
    const optionIndex = selectedOptions.indexOf(option);
    if (value && optionIndex < 0) {
      selectedOptions.push(option);
    }
    if (!value && optionIndex >= 0) {
      selectedOptions.splice(optionIndex, 1);
    }
    console.log(selectedOptions);
    selectedOptions = selectedOptions;
  }
</script>

<div class="inline-flex gap-2 items-center">
  <span>
    {label}
  </span>
  <div class="relative">
    <button on:click={() => isOpen = !isOpen} class="bg-pokeyellow text-gray-900 px-2 py-1 rounded-md text-sm font-semibold">
      {selectedOptions.length} sélectionnés
    </button>
  
    {#if isOpen}
      <div
        class="mt-2 w-auto min-w-full bg-background-light border border-gray-300 rounded-md shadow-lg flex flex-col absolute" 
        use:clickOutside on:click_outside={() => { isOpen = false }}
      >
        {#each options as option, i (i)}
          <div class="flex flex-row gap-1 px-2 py-1 cursor-pointer select-none">
            <input type="checkbox" id={`option ${i}`} checked={selectedOptions.includes(option)} on:change={(e) => toggleOption(e, option) } />
            <label for={`option ${i}`} class="text-gray-100 whitespace-nowrap">{labelKey ? option[labelKey] : option}</label>
          </div>
        {/each}
      </div>
    {/if}
  </div>  
</div>

