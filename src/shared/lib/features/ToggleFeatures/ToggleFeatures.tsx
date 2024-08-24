import { ReactElement } from 'react';
import { FeatureFlags } from '../../../types/featureFlags';
import { getFeatureFlags } from '../setGetFeatures';

interface ToggleFeaturesOptions {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesOptions) => {
    const { feature, off, on } = props;

    if (getFeatureFlags(feature)) {
        return on;
    }

    return off;
}
