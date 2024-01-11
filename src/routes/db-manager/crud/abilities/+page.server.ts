import { getAllAbilities } from '$/lib/services/crud.service';

export async function load() {
  const abilitiesList = await getAllAbilities();
  return { abilitiesList };
}
