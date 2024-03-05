import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { validateProfileErrors } from '../consts/consts';

const data = {
  username: 'admin',
  age: 24,
  country: Country.Russia,
  lastname: 'sam',
  first: 'kir',
  city: 'moscow',
  currency: Currency.RUB,
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readOnly: false,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))).toEqual({ readOnly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: {
        username: '',
      },
    };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({
        readOnly: true,
        validateErrors: undefined,
        data,
        form: data,
      });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: '1234',
      },
    };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '1234' })))
      .toEqual({
        form: {
          username: '1234',
        },
      });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [validateProfileErrors.SERVER_ERROR],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateError: undefined,
      });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateError: [validateProfileErrors.SERVER_ERROR],
      readOnly: false,
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
      .toEqual({
        isLoading: false,
        validateError: undefined,
        readOnly: true,
        form: data,
        data,
      });
  });
});
