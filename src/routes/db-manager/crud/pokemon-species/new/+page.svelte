<script lang="ts">
  import FormButton from '$/components/base/formButton.svelte';
  import Heading from '$/components/base/heading.svelte';
  import StatusBanner from '$/components/base/statusBanner.svelte';
  import Select from '$/components/form/select.svelte';
  import TextInput from '$/components/form/textInput.svelte';
  import NumberInput from '$/components/form/numberInput.svelte';
  import PageLayout from '$/components/layout/pageLayout/pageLayout.svelte';
  import type { Ability } from '$/lib/data/models/Ability';
  import { typesToValues } from '$/shared/utils/typesToValues';
  import { originsToValues } from '$/shared/utils/originsToValues';
  import { addEmptyValue } from '$/shared/utils/addEmptyValue';
  import { customTypeListToValues } from '$/shared/utils/customTypeToValues';

  type FormFeedback = {
    success?: true;
    missing?: {
      nameFr: boolean;
      nameEn: boolean;
      slug: boolean;
    };
  }

  export let data: { abilitiesList: Ability[] };
  export let form: FormFeedback | undefined;
  $: missingFields = form?.missing && Object.keys(form.missing).filter((key) => form?.missing?.[key as keyof typeof form.missing] === true);
  $: formError = missingFields && `Champs manquants : ${missingFields.join(', ')}`;
  $: abilitiesValues = customTypeListToValues<Ability>(data.abilitiesList, 'nameFr', '_id');
  $: abilitiesValuesWithEmpty = addEmptyValue(abilitiesValues);

  const typeValues = typesToValues(true);
  const typeValuesWithEmpty = typesToValues(true, true);
  const originValues = originsToValues();
</script>

<PageLayout>
  <Heading>Nouveau Pokémon</Heading>
  <div class="flex flex-row gap-4">
    <div class="bg-background-light p-4 rounded my-4 w-2/3">
      <form method="POST">
        {#if form?.missing}
          <StatusBanner status="error" content={formError || ''} />
        {/if}
        <Heading level={3}>Général</Heading>
        <div class="w-1/2">
          <TextInput label="Nom FR" id="nameFr" name="nameFr" placeholder="Nom en français" />
          <TextInput label="Nom EN" id="nameEn" name="nameEn" placeholder="Nom en anglais" />
          <TextInput label="Forme FR" id="formFr" name="formFr" placeholder="Nom de forme en français" />
          <TextInput label="Forme EN" id="formEn" name="formEn" placeholder="Nom de forme en anglais" />
          <TextInput label="Slug" id="slug" name="slug" placeholder="Identifiant" />
          <Select label="Région" id="origin" name="origin" items={originValues} />
        </div>
        <hr class="mt-4 mb-2" />
        <Heading level={3}>Données</Heading>
        <div class="w-1/2">
          <Select label="Type 1" id="type_1" name="type1" items={typeValues} />
          <Select label="Type 2" id="type_2" name="type2" items={typeValuesWithEmpty} />
          <Select label="Talent 1" id="ability_1" name="ability1" items={abilitiesValues} />
          <Select label="Talent 2" id="ability_2" name="ability2" items={abilitiesValuesWithEmpty} />
          <Select label="Talent caché" id="hidden-ability" name="hiddenAbility" items={abilitiesValuesWithEmpty} />
        </div>
        <hr class="mt-4 mb-2" />
        <Heading level={3}>Statistiques</Heading>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <NumberInput label="PV" id="hp" name="hp" />
            <NumberInput label="Attaque" id="attack" name="attack" />
            <NumberInput label="Défense" id="defense" name="defense" />
          </div>
          <div>
            <NumberInput label="Attaque Spé." id="spattack" name="spattack" />
            <NumberInput label="Défense Spé." id="spdefense" name="spdefense" />
            <NumberInput label="Vitesse" id="speed" name="speed" />
          </div>
        </div>
        <div class="mt-4 flex justify-end">
          <FormButton label="Enregistrer" />
        </div>
      </form>
    </div>
  </div>
</PageLayout>