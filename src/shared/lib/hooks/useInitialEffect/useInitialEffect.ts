import { useEffect } from 'react';

export function useInitialEffect(callBack: () => void) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callBack();
    }
    // eslint-disable-next-line
  }, []);
}
