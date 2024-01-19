<script lang="ts">
  import FormButton from '$/components/base/formButton.svelte';
  import Heading from '$/components/base/heading.svelte';
  import StatusBanner from '$/components/base/statusBanner.svelte';
  import NumberInput from '$/components/form/numberInput.svelte';
  import Select from '$/components/form/select.svelte';
  import TextArea from '$/components/form/textArea.svelte';
  import TextInput from '$/components/form/textInput.svelte';
  import PageLayout from '$/components/layout/pageLayout/pageLayout.svelte';
  import type { SelectItem } from '$/shared/types/forms/select.types';
  import { typesToValues } from '$/shared/utils/typesToValues';

  type FormFeedback = {
    success?: true;
    missing?: {
      nameFr: boolean;
      nameEn: boolean;
      descriptionFr: boolean;
      pp: boolean,
      accuracy: boolean,
      basePower: boolean,
    };
  }
  export let form: FormFeedback | undefined;
  let currentCategory: 'physical' | 'special' | 'status';
  $: missingFields = form?.missing && Object.keys(form.missing).filter((key) => form?.missing?.[key as keyof typeof form.missing] === true);
  $: formError = missingFields && `Champs manquants : ${missingFields.join(', ')}`;

  const typeValues = typesToValues(true);

  const categoryValues: SelectItem[] = [
    {
      label: 'Physique',
      value: 'physical',
    },
    {
      label: 'Spécial',
      value: 'special',
    },
    {
      label: 'Statut',
      value: 'status',
    }
  ];
</script>

<PageLayout>
  <Heading>Nouvelle attaque</Heading>
  <div class="flex flex-row gap-4">
    <div class="bg-background-light p-4 rounded my-4 w-1/2">
      <form method="POST">
        {#if form?.missing}
          <StatusBanner status="error" content={formError || ''} />
        {/if}
        <TextInput label="Nom FR" id="nameFr" name="nameFr" placeholder="Nom en français" />
        <TextInput label="Nom EN" id="nameEn" name="nameEn" placeholder="Nom en anglais" />
        <Select label="Type" id="type" name="type" items={typeValues} />
        <TextArea label="Description FR" id="descriptionFr" name="descriptionFr" placeholder="Description en français" rows={3} />
        <TextArea label="Description EN" id="descriptionEn" name="descriptionEn" placeholder="Description en anglais" rows={3} />
        <Select label="Catégorie" id="category" name="category" items={categoryValues} bind:value={currentCategory} />
        <NumberInput label="PP" id="pp" name="pp" />
        <NumberInput label="Précision" id="accuracy" name="accuracy" />
        {#if currentCategory !== 'status'}
          <NumberInput label="Puissance" id="basePower" name="basePower" />
        {/if}
        <div class="mt-2 flex justify-end">
          <FormButton label="Enregistrer" />
        </div>
      </form>
    </div>
  </div>
</PageLayout>