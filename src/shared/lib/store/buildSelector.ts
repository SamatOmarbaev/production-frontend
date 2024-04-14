import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type TSelector<T> = (state: StateSchema) => T
type Result<T> = [() => T, TSelector<T>]

export function buildSelector<T>(selector: TSelector<T>): Result<T> {
  const useSelectorHook = () => useSelector(selector);

  return [useSelectorHook, selector];
}
