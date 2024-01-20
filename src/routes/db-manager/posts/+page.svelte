
<script lang="ts">
  import FormButton from '$/components/base/formButton.svelte';
  import Heading from '$/components/base/heading.svelte';
  import StatusBanner from '$/components/base/statusBanner.svelte';
  import TextArea from '$/components/form/textArea.svelte';
  import TextInput from '$/components/form/textInput.svelte';
  import PageLayout from '$/components/layout/pageLayout/pageLayout.svelte';
  import MarkdownWrapper from '$/components/utils/markdownWrapper.svelte';

  type FormFeedback = {
    success?: true;
    missing?: {
      title: boolean;
      slug: boolean;
      shortText: boolean;
      content: boolean;
    };
  }
  export let form: FormFeedback | undefined;
  export let content: string;
  $: missingFields = form?.missing && Object.keys(form.missing).filter((key) => form?.missing?.[key as keyof typeof form.missing] === true);
  $: formError = missingFields && `Champs manquants : ${missingFields.join(', ')}`;
</script>

<PageLayout>
  <Heading>Nouvel article</Heading>
  <div class="flex flex-row gap-4">
    <div class="bg-background-light p-4 rounded my-4 w-2/3">
      <form method="POST">
        {#if form?.missing}
          <StatusBanner status="error" content={formError || ''} />
        {/if}
        <TextInput label="Titre" id="title" name="title" placeholder="Titre de l'article" />
        <TextArea label="Description courte" id="shortText" name="shortText" placeholder="Description de l'article" rows={3} />
        <TextArea label="Contenu" id="content" name="content" placeholder="Lorem ipsum..." rows={10} bind:value={content} />
        <div class="mt-2 flex justify-end">
          <FormButton label="Enregistrer" />
        </div>
      </form>
      <MarkdownWrapper content={content} />
    </div>
  </div>
</PageLayout>