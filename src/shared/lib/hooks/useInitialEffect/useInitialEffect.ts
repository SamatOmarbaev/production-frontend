import { useEffect } from 'react';

export function useInitialEffect(callBack: () => void) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      callBack();
    }
    // eslint-disable-next-line
  }, []);
}
