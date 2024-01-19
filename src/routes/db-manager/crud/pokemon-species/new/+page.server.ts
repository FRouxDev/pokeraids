import { getAllAbilities } from '$/lib/services/crud.service';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { PokemonSpeciesModel } from '$/lib/data/models/PokemonSpecies';

export async function load() {
  const abilitiesList = await getAllAbilities();
  return { abilitiesList };
}

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const data = await request.formData();
    const nameFr = data.get('nameFr');
    const nameEn = data.get('nameEn');
    const formFr = data.get('formFr');
    const formEn = data.get('formEn');
    const slug = data.get('slug');
    const origin = data.get('origin');
    const type1 = data.get('type1');
    const type2 = data.get('type2');
    const ability1 = data.get('ability1');
    const ability2 = data.get('ability2');
    const hiddenAbility = data.get('hidden-ability');
    const hp = data.get('hp');
    const attack = data.get('attack');
    const defense = data.get('defense');
    const spattack = data.get('spattack');
    const spdefense = data.get('spdefense');
    const speed = data.get('speed');

    if (!nameFr || !nameEn || !slug) {
      return fail(400, {
        missing: {
          nameFr: !nameFr,
          nameEn: !nameEn,
          slug: !slug,
          hp: !Number.isInteger(hp),
          attack: !Number.isInteger(attack),
          defense: !Number.isInteger(defense),
          spattack: !Number.isInteger(spattack),
          spdefense: !Number.isInteger(spdefense),
          speed: !Number.isInteger(speed),
        },
      });
    }

    const newPokemon = new PokemonSpeciesModel({
      nameFr,
      nameEn,
      formFr: formFr || undefined,
      formEn: formEn || undefined,
      slug,
      origin,
      type1,
      type2: type2 || undefined,
      abilities: ability2 ? [ability1, ability2] : [ability1],
      hiddenAbility: hiddenAbility || undefined,
      picture: `${slug}.png`,
      pokemonStats: {
        hp,
        attack,
        defense,
        spattack,
        spdefense,
        speed,
      },
    });

    await newPokemon.save();

    redirect(301, '/db-manager/crud/pokemon-species');
  },
};
