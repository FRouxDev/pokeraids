import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { AttackMoveModel, StatusMoveModel } from '$/lib/data/models/Move';

export const actions: Actions = {
  default: async (event) => {
    const { request } = event;
    const data = await request.formData();
    const nameFr = data.get('nameFr');
    const nameEn = data.get('nameEn');
    const descriptionFr = data.get('descriptionFr');
    const descriptionEn = data.get('descriptionEn');
    const type = data.get('type');
    const category = data.get('category');
    const pp = data.get('pp');
    const accuracy = data.get('accuracy');
    const basePower = data.get('basePower');

    const isAttackMove = category === 'physical' || category === 'special';

    if (!nameFr || !nameEn || !descriptionFr) {
      return fail(400, {
        missing: {
          nameFr: !nameFr,
          nameEn: !nameEn,
          descriptionFr: !descriptionFr,
          pp: !Number.isInteger(pp),
          accuracy: !Number.isInteger(accuracy),
          basePower: isAttackMove ? !Number.isInteger(basePower) : false,
        },
      });
    }

    if (isAttackMove) {
      const newMove = new AttackMoveModel({
        nameFr,
        nameEn,
        descriptionFr,
        descriptionEn: descriptionEn || undefined,
        type,
        pp,
        accuracy,
        category,
        basePower,
      });

      await newMove.save();
    } else {
      const newMove = new StatusMoveModel({
        nameFr,
        nameEn,
        descriptionFr,
        descriptionEn: descriptionEn || undefined,
        type,
        pp,
        accuracy,
        category,
      });

      await newMove.save();
    }

    redirect(301, '/db-manager/crud/moves');
  },
};
