import { deleteItem, getAllItems } from '$/lib/services/crud.service';
import { fail, type Actions } from '@sveltejs/kit';

export async function load() {
  const itemsList = await getAllItems();
  return { itemsList };
}

export const actions: Actions = {
  deleteItem: async (event) => {
    const { request } = event;
    const data = await request.formData();
    const itemId = data.get('itemId');

    console.log(itemId);

    if (!itemId) {
      return fail(400, { error: 'No Id' });
    }

    try {
      await deleteItem(itemId.toString());
      return { success: true };
    } catch (err) {
      return fail(500, { error: err });
    }
  },
};
