import { getAllMoves } from '$/lib/services/crud.service';

export async function load() {
  const movesList = await getAllMoves();
  return { movesList };
}
