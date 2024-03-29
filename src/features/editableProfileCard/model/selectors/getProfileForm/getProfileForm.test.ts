import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return form', () => {
    const data: Profile = {
      username: 'admin',
      age: 24,
      country: Country.Russia,
      lastname: 'sam',
      first: 'kir',
      city: 'moscow',
      currency: Currency.RUB,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
