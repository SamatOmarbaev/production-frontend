import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';

type TSelector<T, Args extends any[]> = (
  state: StateSchema,
  ...args: Args
) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, TSelector<T, Args>];

export function buildSelector<T, Args extends any[]>(
  selector: TSelector<T, Args>,
): Result<T, Args> {
  const useSelectorHook: Hook<T, Args> = (...args: Args) =>
    useSelector((state: StateSchema) => selector(state, ...args));

  return [useSelectorHook, selector];
}
