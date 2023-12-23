import { error } from '@sveltejs/kit';

type RaidBuildParams = {
  buildId: string;
};

export function load({ params }: { params: RaidBuildParams }) {
  if (params.buildId) {
    return {
      buildId: params.buildId,
    };
  }

  error(404, 'Not found');
}
