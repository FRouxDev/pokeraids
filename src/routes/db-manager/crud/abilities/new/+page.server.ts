import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { AbilityModel } from '$/lib/data/models/Ability';

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const data = await request.formData();
    const nameFr = data.get('nameFr');
    const nameEn = data.get('nameEn');
    const descriptionFr = data.get('descriptionFr');
    const descriptionEn = data.get('descriptionEn');

    if (!nameFr || !nameEn || !descriptionFr) {
      return fail(400, {
        missing: {
          nameFr: !nameFr,
          nameEn: !nameEn,
          descriptionFr: !descriptionFr,
        },
      });
    }

    const newAbility = new AbilityModel({
      nameFr,
      nameEn,
      descriptionFr,
      descriptionEn: descriptionEn || undefined,
    });

    await newAbility.save();

    redirect(301, '/db-manager/crud/abilities');
  },
};
