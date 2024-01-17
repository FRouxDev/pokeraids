import { deleteAbility, getAllAbilities } from '$/lib/services/crud.service';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export async function load() {
  const abilitiesList = await getAllAbilities();
  return { abilitiesList };
}

export const actions: Actions = {
  deleteAbility: async (event) => {
    const { request } = event;
    const data = await request.formData();
    const itemId = data.get('itemId');

    console.log(itemId);

    if (!itemId) {
      return fail(400, { error: 'No Id' });
    }

    try {
      await deleteAbility(itemId.toString());
      return { success: true };
    } catch (err) {
      return fail(500, { error: err });
    }
  },
};
