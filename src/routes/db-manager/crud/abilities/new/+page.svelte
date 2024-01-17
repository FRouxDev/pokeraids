<script lang="ts">
  import FormButton from '$/components/base/formButton.svelte';
  import Heading from '$/components/base/heading.svelte';
  import StatusBanner from '$/components/base/statusBanner.svelte';
  import TextArea from '$/components/form/textArea.svelte';
  import TextInput from '$/components/form/textInput.svelte';
  import PageLayout from '$/components/layout/pageLayout/pageLayout.svelte';

  type FormFeedback = {
    success?: true;
    missing?: {
      nameFr: boolean;
      nameEn: boolean;
      descriptionFr: boolean;
    };
  }
  export let form: FormFeedback | undefined;
  $: missingFields = form?.missing && Object.keys(form.missing).filter((key) => form?.missing?.[key as keyof typeof form.missing] === true);
  $: formError = missingFields && `Champs manquants : ${missingFields.join(', ')}`;
</script>

<PageLayout>
  <Heading>Nouveau talent</Heading>
  <div class="flex flex-row gap-4">
    <div class="bg-background-light p-4 rounded my-4 w-1/2">
      <form method="POST">
        {#if form?.missing}
          <StatusBanner status="error" content={formError || ''} />
        {/if}
        <TextInput label="Nom FR" id="nameFr" name="nameFr" placeholder="Nom en français" />
        <TextInput label="Nom EN" id="nameEn" name="nameEn" placeholder="Nom en anglais" />
        <TextArea label="Description FR" id="descriptionFr" name="descriptionFr" placeholder="Description en français" rows={3} />
        <TextArea label="Description EN" id="descriptionEn" name="descriptionEn" placeholder="Description en anglais" rows={3} />
        <div class="mt-2 flex justify-end">
          <FormButton label="Enregistrer" />
        </div>
      </form>
    </div>
  </div>
</PageLayout>