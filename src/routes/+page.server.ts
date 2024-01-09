import type { Load } from '@sveltejs/kit';
import { DB_USER } from '$env/static/private';
import { dbConnect } from '$/lib/utils/db';
import { MoveModel } from '$/lib/data/models/Move';

export const load: Load = async () => {
  await dbConnect();

  const fakeOut = new MoveModel({
    nameFr: 'Bluff',
    nameEn: 'Fake out',
  });

  await fakeOut.save();

  return {
    user: DB_USER,
  };
};
