<script lang="ts">
  import FormButton from "$/components/base/formButton.svelte";
  import Heading from "$/components/base/heading.svelte";
  import StatusBanner from "$/components/base/statusBanner.svelte";
  import NumberInput from "$/components/form/numberInput.svelte";
  import Select from "$/components/form/select.svelte";
  import TextInput from "$/components/form/textInput.svelte";
  import PageLayout from "$/components/layout/pageLayout/pageLayout.svelte";
  import { typesToValues } from "$/shared/utils/typesToValues";
  import type { Ability } from '$/lib/data/models/Ability';
  import type { PokemonSpecies } from '$/lib/data/models/PokemonSpecies';
  import { customTypeListToValues } from "$/shared/utils/customTypeToValues";
  import type { Move } from "$/lib/data/models/Move";
  import TextArea from "$/components/form/textArea.svelte";
  import { naturesToValues } from "$/shared/utils/naturesToValues";
  import type { Item } from "$/lib/data/models/Item";
  
  type FormFeedback = {
    success?: true;
    missing?: {
      nameFr: boolean;
      nameEn: boolean;
      slug: boolean;
    };
  }

  export let data: { abilitiesList: Ability[], pokemonList: PokemonSpecies[], moveList: Move[], itemsList: Item[] };
  export let form: FormFeedback | undefined;
  $: missingFields = form?.missing && Object.keys(form.missing).filter((key) => form?.missing?.[key as keyof typeof form.missing] === true);
  $: formError = missingFields && `Champs manquants : ${missingFields.join(', ')}`;
  $: abilitiesValues = customTypeListToValues<Ability>(data.abilitiesList, 'nameFr', '_id');
  $: pokemonValues = customTypeListToValues<PokemonSpecies>(data.pokemonList, 'nameFr', '_id');
  $: moveValues = customTypeListToValues<Move>(data.moveList, 'nameFr', '_id');
  $: itemsValues = customTypeListToValues<Item>(data.itemsList, 'nameFr', '_id');

  const typeValues = typesToValues(false);
  const natureValues = naturesToValues(false);
</script>

<PageLayout>
  <Heading>Nouveau Build</Heading>
  <div class="flex flex-row gap-4">
    <div class="bg-background-light p-4 rounded my-4 w-2/3">
      <form method="POST">
        {#if form?.missing}
          <StatusBanner status="error" content={formError || ''} />
        {/if}
        <Heading level={3}>Général</Heading>
        <div class="w-1/2">
          <TextInput label="Slug" id="slug" name="slug" placeholder="Identifiant" />
          <TextInput label="Nom FR" id="nameFr" name="nameFr" placeholder="Nom en français" />
          <TextInput label="Nom EN" id="nameEn" name="nameEn" placeholder="Nom en anglais" />
          <TextInput label="Lien YouTube" id="youtubeLink" name="youtubeLink" placeholder="Lien YouTube" />
        </div>
        <hr class="mt-4 mb-2" />
        <Heading level={3}>Pokémon</Heading>
        <div class="w-1/2">
          <Select label="Pokémon" id="pokemon" name="pokemon" items={pokemonValues} />
          <Select label="Tera Type" id="teraType" name="teraType" items={typeValues} />
          <Select label="Talent" id="ability" name="ability" items={abilitiesValues} />
          <Select label="Objet" id="item" name="item" items={itemsValues} />
          <Select label="Nature" id="nature" name="nature" items={natureValues} />
        </div>
        <hr class="mt-4 mb-2" />
        <Heading level={3}>Moveset</Heading>
        <div class="w-1/2">
          <Select label="Attaque 1" id="move_1" name="move_1" items={moveValues} />
          <Select label="Attaque 2" id="move_2" name="move_2" items={moveValues} />
          <Select label="Attaque 3" id="move_3" name="move_3" items={moveValues} />
          <Select label="Attaque 4" id="move_4" name="move_4" items={moveValues} />
        </div>
        <hr class="mt-4 mb-2" />
        <Heading level={3}>Spreads</Heading>
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
        <hr class="mt-4 mb-2" />
        <Heading level={3}>Description</Heading>
        <div class="w-1/2">
          <TextArea label="Description FR" id="descriptionFR" name="descriptionFr" placeholder="Description FR" rows={10} />
          <TextArea label="Description EN" id="descriptionEN" name="descriptionEN" placeholder="Description EN" rows={10} />
        </div>          
        <div class="mt-4 flex justify-end">
          <FormButton label="Enregistrer" />
        </div>
      </form>
    </div>
  </div>
</PageLayout>