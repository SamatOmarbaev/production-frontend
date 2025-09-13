import { rtkApi } from '@/shared/api/rtkApi';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagsOption {
  userId: string;
  features: Partial<FeatureFlags>;
}

const featureFlagApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsOption>({
      query: ({ userId, features }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          features,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const updateFeatureFlagsMutation =
  featureFlagApi.endpoints.updateFeatureFlags.initiate;
