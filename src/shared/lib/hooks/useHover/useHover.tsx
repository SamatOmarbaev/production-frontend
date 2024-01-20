import { useCallback, useMemo, useState } from 'react';

interface UseMouseBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseMouseBind]

export function useHover(): UseHoverResult {
  const [isHover, setIsHover] = useState(false);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  return useMemo(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave],
  );
}
