import { getAllRaidBuilds } from '$/lib/services/crud.service';

export async function load() {
  const raidBuildsList = await getAllRaidBuilds();
  return { raidBuildsList };
}
