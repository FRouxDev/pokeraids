import { findBuildById } from '$/lib/services/builds.service';
import { error } from '@sveltejs/kit';

type BuildParams = {
  buildId: string;
};

export function load({ params }: { params: BuildParams }) {
  const { buildId } = params;
  if (buildId) {
    const build = findBuildById(buildId);
    if (build) {
      return {
        build,
      };
    }
  }

  error(404, 'Not found');
}
