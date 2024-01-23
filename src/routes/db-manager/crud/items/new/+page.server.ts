import { fail, redirect, type Actions } from '@sveltejs/kit';
import { ItemModel } from '$/lib/data/models/Item';

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const data = await request.formData();
    const slug = data.get('slug');
    const nameFr = data.get('nameFr');
    const nameEn = data.get('nameEn');
    const descriptionFr = data.get('descriptionFr');
    const descriptionEn = data.get('descriptionEn');

    if (!nameFr || !slug || !descriptionFr) {
      return fail(400, {
        missing: {
          nameFr: !nameFr,
          slug: !slug,
          descriptionFr: !descriptionFr,
        },
      });
    }

    const newItem = new ItemModel({
      slug,
      nameFr,
      nameEn,
      descriptionFr,
      descriptionEn: descriptionEn || undefined,
    });

    await newItem.save();

    redirect(301, '/db-manager/crud/items');
  },
};
