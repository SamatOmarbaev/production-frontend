import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { validateProfileErrors } from '../../types/profile';

const data = {
  username: 'admin',
  age: 24,
  country: Country.Russia,
  lastname: 'sam',
  first: 'kir',
  city: 'moscow',
  currency: Currency.RUB,
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });
  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_USER_DATA,
    ]);
  });
  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_AGE,
    ]);
  });
  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });
  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_USER_DATA,
      validateProfileErrors.INCORRECT_AGE,
      validateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });
});
