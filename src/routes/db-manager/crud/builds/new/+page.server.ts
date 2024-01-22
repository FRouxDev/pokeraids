import {
  createBuild,
  getAllAbilities,
  getAllMoves,
  getAllPokemonSpecies,
} from '$/lib/services/crud.service';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { type RaidBuildDto } from '$/lib/data/models/RaidBuild';
import { isTruthyString } from '$/shared/utils/validators/isTruthyString';
import { parseData } from '$/shared/utils/forms/parseData';
import { markRequired } from '$/shared/utils/forms/markRequired';

export async function load() {
  const abilitiesList = await getAllAbilities();
  const pokemonList = await getAllPokemonSpecies();
  const moveList = await getAllMoves();
  return { abilitiesList, pokemonList, moveList };
}

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const data = await request.formData();
    const slug = parseData(data.get('slug'));
    const nameFr = parseData(data.get('nameFr'));
    const nameEn = parseData(data.get('nameEn'));
    const descriptionFr = parseData(data.get('descriptionFr'));
    const descriptionEn = parseData(data.get('descriptionEn'));
    const youtubeLink = parseData(data.get('youtubeLink'));

    const pokemon = parseData(data.get('pokemon'));
    const teraType = parseData(data.get('teraType'));
    const ability = parseData(data.get('ability'));
    const nature = parseData(data.get('nature'));
    const move1 = parseData(data.get('move_1'));
    const move2 = parseData(data.get('move_2'));
    const move3 = parseData(data.get('move_3'));
    const move4 = parseData(data.get('move_4'));

    const hp = parseData(data.get('hp'));
    const attack = parseData(data.get('attack'));
    const defense = parseData(data.get('defense'));
    const spattack = parseData(data.get('spattack'));
    const spdefense = parseData(data.get('spdefense'));
    const speed = parseData(data.get('speed'));

    if (!isTruthyString(nameFr) || !isTruthyString(descriptionFr) || !isTruthyString(slug)) {
      return fail(400, {
        missing: {
          nameFr: !isTruthyString(nameFr),
          descriptionFr: !isTruthyString(descriptionFr),
          slug: !isTruthyString(slug),
        },
      });
    }

    if (
      markRequired(pokemon) &&
      markRequired(teraType) &&
      markRequired(ability) &&
      markRequired(nature) &&
      markRequired(move1) &&
      markRequired(move2) &&
      markRequired(move3) &&
      markRequired(move4)
    ) {
      const newBuild: RaidBuildDto = {
        pokemon,
        nameFr,
        nameEn,
        slug,
        descriptionFr,
        descriptionEn,
        teraType,
        ability,
        nature,
        moveset: [move1, move2, move3, move4],
        evSpread: {
          hp: hp ? Number(hp) : undefined,
          attack: attack ? Number(attack) : undefined,
          defense: defense ? Number(defense) : undefined,
          spattack: spattack ? Number(spattack) : undefined,
          spdefense: spdefense ? Number(spdefense) : undefined,
          speed: speed ? Number(speed) : undefined,
        },
        ranking: {},
        youtubeLink,
      };

      await createBuild(newBuild);

      redirect(301, '/db-manager/crud/builds');
    }
  },
};
