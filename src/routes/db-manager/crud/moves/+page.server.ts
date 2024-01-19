import { deleteMove, getAllMoves } from '$/lib/services/crud.service';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export async function load() {
  const movesList = await getAllMoves();
  return { movesList };
}

export const actions: Actions = {
  deleteMove: async (event) => {
    const { request } = event;
    const data = await request.formData();
    const itemId = data.get('itemId');

    console.log(itemId);

    if (!itemId) {
      return fail(400, { error: 'No Id' });
    }

    try {
      await deleteMove(itemId.toString());
      return { success: true };
    } catch (err) {
      return fail(500, { error: err });
    }
  },
};
