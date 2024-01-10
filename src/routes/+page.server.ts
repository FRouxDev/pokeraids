import type { Load } from '@sveltejs/kit';

import { dbConnect } from '$/lib/utils/db';
import { MoveModel } from '$/lib/data/models/Move';

export const load: Load = async () => {
  await dbConnect();

  const moves = await MoveModel.find({}).lean();

  const returnMoves = {
    moves: moves.map((move) => {
      return {
        ...move,
        _id: move._id.toString(),
      };
    }),
  };

  console.log(returnMoves);
  return returnMoves;
};
