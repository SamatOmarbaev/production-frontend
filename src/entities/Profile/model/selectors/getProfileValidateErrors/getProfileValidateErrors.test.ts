import { StateSchema } from 'app/providers/StoreProvider';
import { validateProfileErrors } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
  test('should return data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          validateProfileErrors.INCORRECT_AGE,
          validateProfileErrors.INCORRECT_COUNTRY,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      validateProfileErrors.INCORRECT_AGE,
      validateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
