import type { Actions } from './$types';
import pokemonList from '$lib/data/pokemon.json';
import buildsList from '$lib/data/builds.json';
import { AbilityModel, type Ability } from '$/lib/data/models/Ability';
import { type PokemonSpecies, PokemonSpeciesModel } from '$/lib/data/models/PokemonSpecies';
import type { PokemonType } from '$/shared/types/pokemonType.type';
import type { Origin } from '$/shared/types/origin.type';
import { MoveModel } from '$/lib/data/models/Move';
import { RaidBuildModel, type RaidBuild } from '$/lib/data/models/RaidBuild';
import type { RankingValue } from '$/shared/types/tierRanking.type';

export const load = async () => {
  const abilitiesCount = await AbilityModel.countDocuments();
  const pokemonCount = await PokemonSpeciesModel.countDocuments();
  const movesCount = await MoveModel.countDocuments();
  const buildsCount = await RaidBuildModel.countDocuments();

  return { abilitiesCount, pokemonCount, movesCount, buildsCount };
};

export const actions: Actions = {
  'list-abilities': async () => {
    const uniqueAbilitiesNames: string[] = [];
    const abilities: Ability[] = [];

    pokemonList.forEach((pokemon) => {
      pokemon.abilities.forEach((ability) => {
        const isDuplicate = uniqueAbilitiesNames.includes(ability.nameFr);
        if (!isDuplicate) {
          uniqueAbilitiesNames.push(ability.nameFr);
          abilities.push(ability);
        }
      });
      if (pokemon?.hiddenAbility && !uniqueAbilitiesNames.includes(pokemon.hiddenAbility.nameFr)) {
        uniqueAbilitiesNames.push(pokemon.hiddenAbility.nameFr);
        abilities.push(pokemon.hiddenAbility);
      }
    });
    abilities.forEach(async (ability) => {
      await AbilityModel.replaceOne({ nameFr: ability.nameFr }, ability, { upsert: true });
    });
  },
  'list-pokemon': async () => {
    for (const pokemon of pokemonList) {
      const typedPokemon: PokemonSpecies = {
        ...pokemon,
        type1: pokemon.type1 as PokemonType,
        type2: pokemon.type2 as PokemonType | undefined,
        origin: pokemon.origin as Origin,
      };

      for (const ability of typedPokemon.abilities) {
        const abilityId = await AbilityModel.exists({ nameFr: ability.nameFr });
        if (abilityId?._id) {
          ability._id = abilityId._id;
        }
      }

      if (typedPokemon.hiddenAbility) {
        const abilityId = await AbilityModel.exists({ nameFr: typedPokemon.hiddenAbility.nameFr });
        if (abilityId?._id) {
          typedPokemon.hiddenAbility._id = abilityId._id;
        }
      }

      await PokemonSpeciesModel.updateOne({ slug: typedPokemon.slug }, typedPokemon, {
        upsert: true,
      });
    }
  },
  'list-builds': async () => {
    for (const build of buildsList) {
      const pokemon = await PokemonSpeciesModel.findOne({ slug: build.pokemonId }).lean();
      if (pokemon) {
        const { pokemonId, ...rest } = build;
        const typedBuild: RaidBuild = {
          ...rest,
          pokemon,
          teraType: build.teraType as PokemonType,
          ranking: {
            solo: build.ranking.solo as RankingValue | undefined,
            multiplayer: build.ranking.multiplayer as RankingValue | undefined,
          },
        };

        if (typedBuild.ability) {
          const abilityId = await AbilityModel.exists({ nameFr: typedBuild.ability.nameFr });
          if (abilityId?._id) {
            typedBuild.ability._id = abilityId._id;
          }
        }

        console.log(pokemonId);

        await RaidBuildModel.updateOne({ slug: typedBuild.slug }, typedBuild, {
          upsert: true,
        });
      }
    }
  },
};
